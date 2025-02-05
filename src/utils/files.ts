import { ChangeEvent } from 'react';

//파일 하나 선택
export const handleClickSingleFileSelect = (
  e: ChangeEvent<HTMLInputElement>
) => {
  const files = e.target.files?.[0] || null;
  if (files) {
    console.log('Selected file: ', files);
  }
  let newFiles: File;
  //   if (files) {
  //     newFiles = files;
  //     console.log('Selected file:', files);
  // }

  //   return newFiles;
};
