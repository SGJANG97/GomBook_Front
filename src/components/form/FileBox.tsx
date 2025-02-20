import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileInfo } from 'src/models/file/fileInfo';

import { handleIsMobile } from 'src/utils/mobile';

interface Props {
  accept?: string;
  filePlaceholder?: string; //첨부파일 추가 뒤에...
  fileInfoText?: string; //첨부 파일 안내문구
  fileCount?: number; //업로드 파일 갯수
  mobileYn?: string; //모바일 여부
  label?: string;
  newFiles?: FileInfo[];
  oldFiles?: FileInfo[];
  deleteFiles?: FileInfo[];
  disabled?: boolean;
  multiple?: boolean;
  onChangeNewFileCallback?: (data: FileInfo[]) => void;
  onChangeOldFileCallback?: (oldData: FileInfo[], delData: FileInfo[]) => void;
}

export default function FileBox(props: Props) {
  const {
    accept,
    filePlaceholder,
    fileInfoText,
    fileCount = 0,
    mobileYn,
    label,
    newFiles = [],
    oldFiles,
    disabled,
    multiple,
    onChangeNewFileCallback,
    onChangeOldFileCallback,
  } = props;

  //FN: mobile 여부
  const isMobile = handleIsMobile();

  const fileId = useRef<number>(0); // 각 선택했던 파일들의 고유값 id

  const [_fileName, setFileName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [preViewImg, setPreViewImg] = useState<string[]>([]);

  //파일 추가
  const handleChangeAddFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      //에러 메시지 초기화
      setErrorMessage('');
      let tempFiles: FileInfo[] = [...newFiles];
      let addFiles: File[] = e.target.files;

      //업로드 파일이 1개 이상일때 체크
      if (fileCount > 1 && fileCount < tempFiles.length + addFiles.length) {
        setErrorMessage(fileCount + '개의 파일만 업로드 가능합니다.');
        return;
      }

      for (const file of addFiles) {
        const exp = file.name
          .slice(file.name.lastIndexOf('.') + 1)
          .toLowerCase();
        let equalsFile = tempFiles.filter(
          (filter) => filter.fileName === file.name
        );

        if (equalsFile.length === 0) {
          const uploadFileParams: FileInfo = {
            fileSeq: tempFiles.length + fileId.current + 1, // fileId의 값을 1씩 늘려주면서 각 파일의 고유값으로 사용.
            fileExt: exp,
            fileName: file.name, //첨부파일명
            fileSize: file.size, //첨부파일 크기 값
            files: file, // object 객체안에 선택했던 파일들의 정보가 담겨있음.
          };

          //업로드 파일이 1개일때
          if (fileCount === 1) {
            tempFiles = [uploadFileParams];
            onChangeOldFileCallback?.([], oldFiles || []);
          } else {
            tempFiles = [...tempFiles, uploadFileParams];
          }
        }
      }

      onChangeNewFileCallback?.(tempFiles);
    },
    [newFiles, oldFiles]
  );

  //FN: 업로드 파일삭제
  const handleClickNewFileDel = (delFile: FileInfo) => {
    const filterData = newFiles.filter(
      (filter) => filter.fileSeq !== delFile.fileSeq
    );
    onChangeNewFileCallback?.(filterData);
  };
  //FN: 기존 파일삭제
  const handleClickOldFileDel = (delFile: FileInfo) => {
    const filterData = oldFiles?.filter(
      (filter) => filter.fileSeq !== delFile.fileSeq
    );
    onChangeOldFileCallback?.(filterData || [], [delFile]);
  };

  return (
    <>
      {!disabled ? (
        <>
          <div className={`file-box ${isMobile ? 'show-mo' : 'show-pc'}`}>
            <label htmlFor={`file_${label}`}>
              <span>첨부파일 추가 {isMobile ? '' : filePlaceholder}</span>
            </label>
            {/* <input type="file" id="file" /> */}
            <input
              type="file"
              id={`file_${label}`}
              accept={accept}
              multiple={multiple} // 파일 다중선택 허용
              onChange={handleChangeAddFiles}
              value={_fileName}
              disabled={disabled}
            />
          </div>
          <p className="t-text ty2 c-gray">{fileInfoText}</p>
          {/* 체크박스 예시입니다 */}
          {/* <ul className="file-list chk">
                <li>
                  <div className="chkbox">
                    <label>
                      <input type="checkbox" className="inp" value="OMBD001001" />
                      <span className="text">node-v14.17.3-x64.msi</span>
                    </label>
                  </div>
                  <a className="del" href="/admin/brand/create"></a>
                </li>
              </ul> 
          */}
          <ul className="file-list">
            {newFiles &&
              newFiles.map((file: FileInfo, idx: number) => (
                <li key={idx}>
                  {file.fileName}
                  {!disabled && (
                    <Link
                      to=""
                      className="del"
                      onClick={() => handleClickNewFileDel(file)}
                    />
                  )}
                </li>
              ))}
            {oldFiles &&
              oldFiles.map((file: FileInfo, idx: number) => (
                <li key={idx}>
                  {file.fileName}
                  {!disabled && (
                    <Link
                      to=""
                      className="del"
                      onClick={() => handleClickOldFileDel(file)}
                    />
                  )}
                </li>
              ))}
          </ul>
          {errorMessage && <p className="t-text ty2 c-red">{errorMessage}</p>}
        </>
      ) : (
        <p className="c-gray">No File</p>
      )}
    </>
  );
}
