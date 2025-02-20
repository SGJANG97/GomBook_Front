import { ChangeEvent, useState } from 'react';

import PaginationBox from 'src/components/form/PaginationBox';
import { handleIsMobile } from 'src/utils/mobile';
import { PageInfo } from 'src/components/form/grid/GridTableBox';
import { storeUser } from 'src/lib/store/userStore';
import { Link } from 'react-router-dom';
import BookSearchBarContent from 'src/components/book/BookSearchBarContent';
import BookItemContent from 'src/components/book/BookItemContent';

export default function BookContent() {
  //FN: mobile 여부
  const isMobile = handleIsMobile();

  //store: user 상태관리
  const user = storeUser();

  //페이징
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalCount: 0,
    pageNo: 1,
    pageSize: 20,
  });

  //select box
  const [selectValue, setSelectValue] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  //FN: 페이징
  const handleClickPagination = (curPage: number) => {
    setPageInfo({
      ...pageInfo,
      pageNo: curPage,
    });
  };

  const badgeList = [
    { color: 'ty-orange', label: '상온', type: '' },
    { color: 'ty-green', label: '냉장', type: '' },
    { color: 'ty-skyblue', label: '냉동', type: '' },
    { color: 'ty-lightgray', label: 'NEW', type: '' },
    { color: 'ty-red', label: '할인', type: '' },
    { color: 'ty-red', label: '임박', type: '' },
    { color: 'ty-gray', label: 'B급', type: 'b' },
  ];

  return (
    <div className="cate-wrap">
      <div className="inner-content">
        {/* 타이틀 */}
        <div className="sub-title-box">
          <h2 className="title-t ty2 show-pc">도서 카테고리</h2>

          {/* 로그인시 */}
          {user && (
            <div className="info">
              <strong className="c-red">주문가능금액 : 10,000,000원</strong>
              <span>※ 상품에 표기된 금액은 부가세 별도입니다.</span>
              <p>배송지 : 서울특별시 성동구 성수이로 65 협성빌딩 202호</p>
            </div>
          )}
        </div>

        {/* 상품 검색 */}
        <BookSearchBarContent />

        {/* <!-- 검색결과 없음 --> */}
        {/* <div className="no-data">검색결과가 없습니다.</div> */}

        {/* <!-- 상품 리스트--> */}
        {user ? (
          <section className="cate-lists-wrap ">
            <article className="cate-lists-area">
              <div className="cate-tbl-box">
                <table>
                  <colgroup>
                    <col style={{ width: 'auto' }} />
                    <col style={{ width: '25.05%' }} />
                    <col style={{ width: '14.05%' }} />
                    <col style={{ width: '11.7%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>상품명</th>
                      <th>수량</th>
                      <th>담기</th>
                      <th>즐겨찾기</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[...Array(10)].map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          {/* 상품 */}
                          <BookItemContent />
                        </td>
                        <td>
                          <p className="t-text ty2 fw-4 c-gray ta-c">
                            남은 수량 10
                          </p>
                          <div className="item-qty-box ty2">
                            <p className="item-unit">12ea</p>
                            <div className="item-qty">
                              <input
                                className="item_qty_count"
                                type="tel"
                                title="상품수량"
                                value="0"
                              />
                              <button type="button" className="btn icon minus">
                                <span>상품수량 빼기</span>
                              </button>
                              <button type="button" className="btn icon plus">
                                <span>상품수량 더하기</span>
                              </button>
                            </div>
                          </div>
                          <div className="item-qty-box ty2">
                            <p className="item-unit">ea</p>
                            <div className="item-qty">
                              <input
                                className="item_qty_count"
                                type="tel"
                                title="상품수량"
                                value="1"
                              />
                              <button type="button" className="btn icon minus">
                                <span>상품수량 빼기</span>
                              </button>
                              <button type="button" className="btn icon plus">
                                <span>상품수량 더하기</span>
                              </button>
                            </div>
                          </div>
                          <div className="t-box">
                            <p className="t-text ty2 fw-6">[1+1] 13ea 증정</p>
                            <p className="t-text ty2 c-red fw-4">
                              주문 가능한 최대 수량입니다.
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="btn-box">
                            <button
                              type="button"
                              className="btn ty2 bd-ty2 cart"
                            >
                              <span>담기</span>
                            </button>
                            <button
                              type="button"
                              className="btn ty2 bd-ty2 c-gray"
                            >
                              <span>재입고 알림</span>
                            </button>
                            <button type="button" className="btn ty2 bd-ty2">
                              <span>대체상품</span>
                            </button>
                          </div>
                        </td>
                        <td>
                          {/* <!-- 활성화시 active .prd-item .like 에도 active 추가 --> */}
                          <button
                            type="button"
                            className="btn icon like active"
                          ></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="cate-basket-area">
              <div className="cate-basket-sticky">
                <div className="cate-title-box">
                  <p>장바구니</p>
                  <a href="">전체삭제</a>
                </div>
                <div className="cate-date-box">
                  <p>출고예정일 2024.10.04(금)</p>
                  <button type="button" className="btn ty2 bd-ty2 data-btn">
                    <span>출고일 변경</span>
                  </button>
                </div>
                {/* <!-- 상품 없을떄 --> */}
                <div className="cate-basket-nodata">
                  장바구니에 담긴 상품이 없습니다.
                </div>
                {/* <!-- 상품 있을때 --> */}
                <ul className="cate-basket-box custom-scroll">
                  <li>
                    <div className="clamp-2">
                      {/* # 장바구니 뱃지 조건
                          1. 뱃지 자동은 색이 정해져 있음(할인, 1+1, B급, 임박) 
                          2. 할인, 1+1, B급, 임박 인것만 뱃지 노출
                      */}
                      {/* {badgeList?.map((item, idx) => (
                        <BadgeCongent
                          badgeType={item.type}
                          className={item.color}
                          styleColor={''}
                          label={item.label}
                          key={idx}
                        />
                      ))} */}
                      <span className="badge-item ty-red">할인</span>
                      {/* <span className="badge-item ty-gray">B급</span> */}
                      <span className="name">파스타 카자레체 500g</span>
                    </div>
                    <div className="box">
                      <p className="t-text ty2 c-red">
                        주문 가능한 최대 수량입니다.
                      </p>
                      <div className="item-qty-box">
                        <div className="item-qty">
                          <input
                            className="item_qty_count"
                            type="tel"
                            title="상품수량"
                            value="1"
                          />
                          <button type="button" className="btn icon minus">
                            <span>상품수량 빼기</span>
                          </button>
                          <button type="button" className="btn icon plus">
                            <span>상품수량 더하기</span>
                          </button>
                        </div>
                        <p className="price">80,000원</p>
                      </div>
                      <p className="item-qty-give">증정품(1+1) 2개 추가 적용</p>
                    </div>
                    <button
                      type="button"
                      className="btn remove-s20 c-gray"
                    ></button>
                  </li>
                  <li>
                    <div className="clamp-2">
                      <span className="badge-item ty-gray">B급</span>
                      <span className="name">파스타 카자레체 500g</span>
                    </div>
                    <div className="box">
                      <div className="item-qty-box">
                        <p className="price">품절</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn remove-s20 c-gray"
                    ></button>
                  </li>

                  <li>
                    <div className="clamp-2">
                      <span className="badge-item ty-red"> 할인</span>
                      <span className="name">파스타 카자레체 500g</span>
                    </div>
                    <div className="box">
                      <p className="t-text ty2 c-red">
                        주문 가능한 최대 수량입니다.
                      </p>
                      <div className="item-qty-box">
                        <div className="item-qty">
                          <input
                            className="item_qty_count"
                            type="tel"
                            title="상품수량"
                            value="1"
                          />
                          <button type="button" className="btn icon minus">
                            <span>상품수량 빼기</span>
                          </button>
                          <button type="button" className="btn icon plus">
                            <span>상품수량 더하기</span>
                          </button>
                        </div>
                        <p className="price">80,000원</p>
                      </div>
                      <p className="item-qty-give">증정품(1+1) 2개 추가 적용</p>
                    </div>
                    <button
                      type="button"
                      className="btn remove-s20 c-gray"
                    ></button>
                  </li>
                  <li>
                    <div className="clamp-2">
                      <span className="badge-item ty-gray">B급</span>
                      <span className="name">파스타 카자레체 500g</span>
                    </div>
                    <div className="box">
                      <div className="item-qty-box">
                        <p className="price">품절</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn remove-s20 c-gray"
                    ></button>
                  </li>
                </ul>
                <div className="cate-total-box">
                  <div className="total-box">
                    <div className="total">
                      <p>총 주문 금액</p>
                      <p className="price c-red">11,778,000원</p>
                    </div>
                    <p className="t-text c-red ty2 ta-r">
                      ※ 후불결제 예상금액이 주문가능금액을 초과한 상태입니다.
                    </p>
                  </div>
                  {/* <!-- 상품 없을떄 --> */}
                  <div className="payment-total-box show-mo">
                    <div className="detail-lists">
                      <p className="no-data">
                        장바구니에 담긴 상품이 없습니다.
                      </p>
                    </div>
                  </div>
                  {/* <!-- 상품 있을때 --> */}
                  {/* <!-- 바로구매하기는 배경색 없어서 여기만 추가입니다 grey --> */}
                  <div className="box grey">
                    <button type="button" className="btn-toggle show-mo active">
                      <span>주문 금액 내역 자세히 보기</span>
                    </button>
                    <dl>
                      <dt>공급가</dt>
                      <dd>700,000원</dd>
                    </dl>
                    <dl>
                      <dt>부가세</dt>
                      <dd>70,000원</dd>
                    </dl>
                    <dl>
                      <dt>배송료</dt>
                      <dd>7,000원</dd>
                    </dl>
                    <dl>
                      <dt>품목</dt>
                      <dd>
                        총 <span className="c-red">4</span>건
                      </dd>
                    </dl>
                  </div>
                  <a href="" className="btn ty1 c-black w-full ba-btn">
                    <span>장바구니</span>
                  </a>
                </div>
              </div>
            </article>
          </section>
        ) : (
          <div className="n-cate-lists-wrap">
            {/* <!-- 비로그인시 --> */}
            <div className="prd-lists">
              {[...Array(10)].map((item, idx) => (
                <div className="prd-item" key={idx}>
                  {/* <!-- 품절시 soldout 클래스 추가 --> */}
                  <div className="thumbs">
                    <Link to="#">
                      <img
                        src={require('src/assets/images/temp/image_noimg.png')}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="desc">
                    <Link to="#">
                      <p className="brand">인문/교양</p>
                      <p className="name">2500년 동안 사랑받은 초역 부처의 말</p>
                      <p className="size">코이케 류노스케</p>
                    </Link>
                    <div className="badge-cont">
                      <span className="badge-item ty-orange">상온</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
    </div>
  );
}
