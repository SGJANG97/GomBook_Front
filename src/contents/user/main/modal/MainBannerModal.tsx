import { useEffect, useState } from 'react';

import PreviewMainBannerModal from 'src/components/preview/PreviewMainBannerModal';
import { MainBannerPopup } from 'src/models/main/MainBannerPopup';

export default function MainBannerModal() {
  const [open, setOpen] = useState<boolean>(false);

  const data: MainBannerPopup[] = [
    {
      id: '0001',
      title: '라베키아 35년산 발사믹 비네거',
      desc: '이탈리아 전통 발효 숙성 식초',
      img: {
        fileId: '', //파일 ID
        fileName: '', //파일 명
        filePath: 'src/assets/images/temp/main_popup_01.png', //파일 경로
        fileSize: 0, //파일 사이즈(byte)
        fileSeq: 0, //파일 순번
        fileExt: '', //파일 확장자
        fileCategoryId: '', //파일 카테고리 ID
      },
    },
    {
      id: '0002',
      title: '라베키아 35년산 발사믹 비네거',
      desc: '이탈리아 전통 발효 숙성 식초',
      img: {
        fileId: '', //파일 ID
        fileName: '', //파일 명
        filePath: '', //'src/assets/images/temp/main_popup_01.png', //파일 경로
        fileSize: 0, //파일 사이즈(byte)
        fileSeq: 0, //파일 순번
        fileExt: '', //파일 확장자
        fileCategoryId: '', //파일 카테고리 ID
      },
    },
  ];

  useEffect(() => {}, []);

  return (
    <>
      {data.map((item, idx) => (
        <PreviewMainBannerModal viewType="main" viewData={item} key={idx} />
      ))}
    </>
  );
}
