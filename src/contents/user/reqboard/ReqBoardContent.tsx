import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageInfo } from 'src/components/form/grid/GridTableBox';
import PaginationBox from 'src/components/form/PaginationBox';
import { userReqBoardCreatePath, userReqBoardPath } from 'src/routes/path';
import { handleIsMobile } from 'src/utils/mobile';

export default function ReqBoardContent() {
  //FN: mobile 여부
  const isMobile = handleIsMobile();

  //페이징
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalCount: 0,
    pageNo: 1,
    pageSize: 20,
  });

  //FN: 페이징
  const handleClickPagination = (curPage: number) => {
    setPageInfo({
      ...pageInfo,
      pageNo: curPage,
    });
  };

  return (
    <section className="cs-wrap">
      <article className="inner-content">
        <div className="sub-title-box">
          <h2 className="title-t ty2 show-pc">문의하기</h2>
          <Link to={`/${userReqBoardCreatePath}`}>문의글 작성</Link>
        </div>
        <div className="cs-list">
          {/* <!-- 
                        상태 class c-ty1 : 배경레드 , c-ty2 : 배경그레이
                        10개표시후 페이징
                    --> */}
          <ul>
            <li>
              <Link to={`/${userReqBoardPath}/1`}>
                <div className="td">
                  <p className="fw-6">반품</p>
                </div>
                <div className="td">
                  <p>반품 요청 합니다.</p>
                </div>
                <div className="td">2024-00-00</div>
                <div className="td">
                  <span className="c-ty1">등록</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={`/${userReqBoardPath}/2`}>
                <div className="td">
                  <p className="fw-6">주문취소요청</p>
                </div>
                <div className="td">
                  <p>주문취소요청</p>
                </div>
                <div className="td">2024-00-00</div>
                <div className="td">
                  <span className="c-ty1">접수 처리중</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={`/${userReqBoardPath}/3`}>
                <div className="td">
                  <p className="fw-6">사업자정보 변경요청</p>
                </div>
                <div className="td">
                  <p>사업자정보 변경요청</p>
                </div>
                <div className="td">2024-00-00</div>
                <div className="td">
                  <span className="c-ty2">처리 완료</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {!isMobile && (
          <PaginationBox
            totalCount={
              pageInfo?.totalCount === 0 ? 1 : pageInfo?.totalCount || 1
            } // 데이터의 총 개수
            itemCountPerPage={pageInfo?.pageSize || 20} // 페이지 당 보여줄 데이터 개수
            pageCount={pageInfo?.pageSize || 20} // 보여줄 페이지 개수
            currentPage={pageInfo?.pageNo || 1} // 현재 페이지
            onClickCallBack={handleClickPagination}
          />
        )}
      </article>
    </section>
  );
}
