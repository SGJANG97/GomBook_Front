import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileInfo } from 'src/models/common.model';
import { handleIsMobile } from 'src/utils/mobile';

interface Props {
  multiType?: 'single' | 'multy';
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
    multiType,
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

  // const fileRef:any = useRef();
  const dragRef: any = useRef<HTMLLabelElement | null>(null); // 드래그 이벤트를 감지하는 ref 참조변수 (label 태그에 들어갈 예정)
  const fileId = useRef<number>(0); // 각 선택했던 파일들의 고유값 id

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [_fileName, setFileName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [preViewImg, setPreViewImg] = useState<string[]>([]);

  //파일 추가
  const onAddFilesChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      //에러 메시지 초기화
      setErrorMessage('');
      let tempFiles: FileInfo[] = [...newFiles];
      let addFiles: File[] = [];

      if (e.type === 'drop') {
        addFiles = e.dataTransfer.files; // 드래그 앤 드롭 했을때
      } else {
        addFiles = e.target.files; // "파일 업로드" 버튼을 눌러서 파일을 선택했을때
      }

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
            mainYn: 'N', //대표이미지여부
            mobileYn: mobileYn,
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

  // drag & drop
  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);
  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);
  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onAddFilesChangeHandler(e);
      setIsDragging(false);
    },
    [onAddFilesChangeHandler]
  );
  //4개의 이벤트에 Listener를 등록합니다. (마운트 될때)
  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
  //4개의 이벤트에 Listener를 삭제합니다. (언마운트 될때)
  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

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
              onChange={onAddFilesChangeHandler}
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
