import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';
import { handleIsMobile } from 'src/utils/mobile';

interface Props {
  accept?: string;
  filePlaceholder?: string; //첨부파일 추가 뒤에...
  fileInfoText?: string; //첨부 파일 안내문구
  fileCount: number; //업로드 파일 갯수
  label?: string;
  newFiles?: FileInfoBase64[];
  oldFiles?: FileInfoBase64[];
  deleteFiles?: FileInfoBase64[];
  disabled?: boolean;
  multiple: boolean;
  comment?: string | React.ReactNode;
  onChangeNewFileCallback?: (data: FileInfoBase64[]) => void;
  onChangeOldFileCallback?: (
    oldData: FileInfoBase64[],
    delData: FileInfoBase64[]
  ) => void;
}

export default function FileBoxBase64(props: Props) {
  const {
    accept,
    filePlaceholder,
    fileInfoText,
    fileCount = 0,
    label,
    newFiles = [],
    oldFiles,
    disabled,
    multiple,
    comment,
    onChangeNewFileCallback,
    onChangeOldFileCallback,
  } = props;

  let fileRef = useRef();

  //FN: mobile 여부
  const isMobile = handleIsMobile();
  const fileId = useRef<number>(0); // 각 선택했던 파일들의 고유값 id

  const [_fileName, setFileName] = useState<string>('');
  // const [base64String, setBase64String] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [preViewImg, setPreViewImg] = useState<string[]>([]);

  //파일 encode base64
  const handleChangeAddFilesEncodeBase64 = (
    e: ChangeEvent<HTMLInputElement> | any
  ): void => {
    const addFiles: File[] = e.target.files;

    for (const file of addFiles) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // 파일을 Base64로 읽기

      reader.onload = () => {
        // setBase64String(reader.result as string);
        handleChangeAddFiles(file, reader.result as string);
      };
    }
  };

  //파일 추가
  const handleChangeAddFiles = useCallback(
    (file: File, fileEncodeBase64: string): void => {
      //에러 메시지 초기화
      setErrorMessage('');
      let tempFiles: FileInfoBase64[] = [...newFiles];

      //업로드 파일이 1개 이상일때 체크
      if (fileCount > 1 && fileCount < tempFiles.length + 1) {
        setErrorMessage(fileCount + '개의 파일만 업로드 가능합니다.');
        return;
      }

      const exp = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase();
      let equalsFile = tempFiles.filter(
        (filter) => filter.fileName === file.name
      );

      if (equalsFile.length === 0) {
        const uploadFileParams: FileInfoBase64 = {
          fileSeq: tempFiles.length + fileId.current + 1, // fileId의 값을 1씩 늘려주면서 각 파일의 고유값으로 사용.
          fileExt: exp,
          fileName: file.name, //첨부파일명
          fileSize: file.size, //첨부파일 크기 값
          file: fileEncodeBase64, // object 객체안에 선택했던 파일들의 정보가 담겨있음.
        };

        //업로드 파일이 1개일때
        if (fileCount === 1) {
          tempFiles = [uploadFileParams];
          onChangeOldFileCallback?.([], oldFiles || []);
        } else {
          tempFiles = [...tempFiles, uploadFileParams];
        }
      }

      onChangeNewFileCallback?.(tempFiles);
    },
    [newFiles, oldFiles]
  );

  //FN: 업로드 파일삭제
  const handleClickNewFileDel = (delFile: FileInfoBase64) => {
    const filterData = newFiles.filter(
      (filter) => filter.fileSeq !== delFile.fileSeq
    );
    onChangeNewFileCallback?.(filterData);
  };
  //FN: 기존 파일삭제
  const handleClickOldFileDel = (delFile: FileInfoBase64) => {
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
            <label htmlFor={`file`}>
              <span>
                {label ? label : '첨부'}파일 추가{' '}
                {isMobile ? '' : filePlaceholder}
              </span>
            </label>
            {/* <input type="file" id="file" /> */}
            <input
              type="file"
              id={`file`}
              accept={accept}
              multiple={multiple} // 파일 다중선택 허용
              onChange={handleChangeAddFilesEncodeBase64}
              value={_fileName}
              disabled={disabled}
            />
            {comment && <p className="t-text ty2 c-black">{comment}</p>}
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
              newFiles.map((file: FileInfoBase64, idx: number) => (
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
              oldFiles.map((file: FileInfoBase64, idx: number) => (
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
