import { useState } from 'react';
import { PageInfo } from 'src/components/form/grid/GridTableBox';
import PaginationBox from 'src/components/form/PaginationBox';
import { handleIsMobile } from 'src/utils/mobile';

interface Props {
  id?: string;
}

export default function ExhibitionDetailContent(props: Props) {
  const { id } = props;

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
    <section className="promo-detail-wrap">
      {/* <!-- PC ONLY --> */}
      <article className="breadcrumb show-pc">
        <div className="breadcrumb-inner inner-content">
          <a href="#">HOME</a>
          <a href="#" className="active">
            기획전
          </a>
        </div>
      </article>
      {/* <!-- //PC ONLY --> */}

      <article className="inner-content">
        <div className="promo-detail-banner">
          <img
            src={require('src/assets/images/temp/promo_temp_detail.png')}
            alt=""
            className="show-pc"
          />
          <img
            src={require('src/assets/images/temp/promo_temp_detail_mo.png')}
            alt=""
            className="show-mo"
          />
        </div>
        <div className="promo-detail-list-wrap">
          <div className="prd-lists">
            {/* 로그인 후 */}
            {/* <!-- 품절시 soldout 클래스 추가 --> */}
            <div className="prd-item">
              <div className="prd-item-btn">
                {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                <button type="button" className="btn">
                  <span>담기</span>
                </button>
                {/* // 품절시 */}
                <button type="button" className="btn">
                  <span>재입고 알림</span>
                </button>{' '}
                {/* // 출고 불가시 */}
                <div className="label-noship">
                  해당 출고예정일에 출고 불가 상품입니다.
                </div>{' '}
              </div>

              <div className="thumbs">
                <a href="#">
                  <img
                    src={require('src/assets/images/temp/temp_item01.png')}
                    alt=""
                  />
                </a>
                {/* <!-- 활성화시 active 클래스 추가 --> */}
                <button type="button" className="like">
                  좋아요
                </button>
                <span className="label-item">할인</span>
              </div>
              <div className="desc">
                <a href="#">
                  <p className="brand">브랜드명</p>
                  <p className="name">
                    상품명 2줄이상 말줄임 처리 상품명 2줄이상 말줄임 처리 상품명
                    2줄이상 말줄임 상품명 2줄이상 말줄임 처리 상품명 2줄이상
                    말줄임 처리 상품명 2줄이상 말줄임
                  </p>
                  <p className="size">500ml*12</p>
                  <div className="price">
                    <p className="amount">
                      <span className="per">15%</span>
                      9,999,999원
                      <del>9,999,999원</del>
                    </p>
                  </div>
                </a>
                <div className="badge-cont">
                  <span className="badge-item ty-orange">상온</span>
                  <span className="badge-item ty-gray ty-b">B급</span>
                </div>
                <div className="info">
                  <span>소비기한 2030/12/31</span>
                  <span>남은수량 100개</span>
                </div>
              </div>
            </div>

            {/* 로그인 전 */}
            {/* <!-- 품절시 soldout 클래스 추가 --> */}
            <div className="prd-item">
              <div className="thumbs">
                <a href="#">
                  <img
                    src={require('src/assets/images/temp/temp_item01.png')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <a href="#">
                  <p className="brand">브랜드명</p>
                  <p className="name">글루텐프리-레굼 펜네떼 리가테</p>
                  <p className="size">500ml*12</p>
                </a>
                <div className="badge-cont">
                  <span className="badge-item ty-orange">상온</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- PC에서만 사용 --> */}
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
        </div>
      </article>
    </section>
  );
}
