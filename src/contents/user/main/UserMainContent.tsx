import { useEffect, useState } from 'react';
import { handleIsMobile } from 'src/utils/mobile';

import PopularCategoryBanner from 'src/contents/user/main/PopularCategoryBannerContent';
import BestBanner from 'src/contents/user/main/BestBannerContent';
import HotBanner from 'src/contents/user/main/HotBannerContent';
import RecBrandBanner from 'src/contents/user/main/RecBrandBannerContent';
import BestBrandBanner from 'src/contents/user/main/BestBrandBannerContent';
import SbannBanner from 'src/contents/user/main/SbannBannerContent';
import MainBanner from 'src/contents/user/main/MainBannerContent';
import MDRecBanner from 'src/contents/user/main/MDRecBannerContent';

import MainBannerModal from 'src/contents/user/main/modal/MainBannerModal';
import MainNoticeModal from 'src/contents/user/main/modal/MainNoticeModal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

interface BannerComponentType {
  component: React.ReactNode;
  sortOrder: number;
}

export default function UserMainContent() {
  const bannerData = [
    { type: 'type1', sortOrder: 1 },
    { type: 'type2', sortOrder: 2 },
    { type: 'type3', sortOrder: 3 },
    { type: 'type4', sortOrder: 4 },
    // { type: 'type5', sortOrder: 5 },
    // { type: 'type6', sortOrder: 6 },
    // { type: 'type7', sortOrder: 7 },
  ];

  // 상태로 배너 컴포넌트 관리
  const [bannerComponents, setBannerComponents] =
    useState<BannerComponentType[]>();

  useEffect(() => {
    const componentMap: { [key: string]: React.ReactNode } = {
      // type1: <PopularCategoryBanner />,
      // type2: <BestBanner />,
      // type3: <MDRecBanner />,
      // type4: <SbannBanner />,
      // type5: <HotBanner />,
      // type6: <RecBrandBanner />,
      // type7: <BestBrandBanner />,
      type1: <HotBanner />,
      type2: <MDRecBanner />,
      type3: <MDRecBanner />,
      type4: <BestBanner />,

    };

    const components = bannerData.map((data) => ({
      component: componentMap[data.type] || <>X</>,
      sortOrder: data.sortOrder,
    }));
    // 정렬
    components.sort((a, b) => a.sortOrder - b.sortOrder);

    // 상태 업데이트
    setBannerComponents(components);
  }, []);

  const [totalItems, setTotalItems] = useState<number>(10); // 데이터의 총 개수
  const [itemCountPerPage, setItemCountPerPage] = useState<number>(2); // 페이지 당 보여줄 데이터 개수
  const [pageCount, setPageCount] = useState<number>(10); // 보여줄 페이지 개수
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
  //FN:
  const handleClickPagination = (curPage: number) => {
    setCurrentPage(curPage);
  };

  const isMobile = handleIsMobile();

  return (
    <>
      {/* 메인 배너 고정 */}
      {/*<MainBanner />*/}

      {/* 공지사항 팝업 */}
      {/*<MainNoticeModal />*/}

      {/* 메인 배너 팝업 */}
      {/*<MainBannerModal />*/}

      {/* 그 외 배너 (sort) */}
      <div>
        {bannerComponents?.map((banner, index) => (
          <div key={index}>{banner.component}</div>
        ))}
      </div>

      {/* <div>
        {!isMobile && (
          <PaginationBox
            totalItems={totalItems} // 데이터의 총 개수
            itemCountPerPage={itemCountPerPage} // 페이지 당 보여줄 데이터 개수
            pageCount={pageCount} // 보여줄 페이지 개수
            currentPage={currentPage} // 현재 페이지
            onClickCallBack={handleClickPagination}
          />
        )}
      </div> */}
    </>
  );
}
