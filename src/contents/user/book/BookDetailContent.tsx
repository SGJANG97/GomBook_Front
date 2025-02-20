import { handleCopyClipBoard } from 'src/utils/clipBoard';
import { useLocation } from 'react-router';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { storeUser } from 'src/lib/store/userStore';

interface Props {
  id?: string;
}

export default function BookDetailContent(props: Props) {
  const { id } = props;
  const { pathname } = useLocation();

  //store: user 상태관리
  const user = storeUser();
  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  //FN: url 복사
  const handleClickClipBoard = () => {
    handleCopyClipBoard(pathname);
    userModalActions.setUserModal({
      type: 'toast',
      modalOpen: true,
      headerTitle: '',
      popClassName: 'ty2',
      content: (
        <>
          URL이 복사 되었습니다.
          <br />
          붙여넣기를 사용하여 URL을 공유해 보세요.
        </>
      ),
    });
  };

  //FN: 장바구니 담기
  const handleClickCartAdd = () => {
    userModalActions.setUserModal({
      type: 'toast',
      modalOpen: true,
      headerTitle: '',
      content: <>상품이 장바구니에 담겼습니다.</>,
    });
  };

  //FN: 재입고 알림
  const handleClickAlarm = () => {
    userModalActions.setUserModal({
      type: 'popup',
      modalOpen: true,
      headerTitle: '재입고 알림 신청',
      popClassName: 'popup-alert',
      content: (
        <>
          <div className="inner">
            <div className="popup-realarm-box">
              <div className="prd-box">
                <h6 className="name">콜로린모</h6>
                <p className="info">파이베이코 소브라사다 1.7~1.9kg</p>
              </div>
              <div className="number-box">
                <p className="c-gray2">연락받을 번호</p>
                <p className="c-black fw-6">010-1234-5678</p>
              </div>
              <div className="data-box">
                <h6 className="title">알림 기간</h6>
                <div className="radio-item">
                  <div className="chkbox">
                    <label>
                      <input type="radio" name="month" id="" />
                      <span className="text">1개월</span>
                    </label>
                  </div>
                  <div className="chkbox">
                    <label>
                      <input type="radio" name="month" id="" />
                      <span className="text">3개월</span>
                    </label>
                  </div>
                  <div className="chkbox">
                    <label>
                      <input type="radio" name="month" id="" />
                      <span className="text">6개월</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="popup-btn-area">
            <button type="button" className="btn ty1 bd-ty1">
              <span className="fw-5">취소</span>
            </button>
            {/* <!-- PC ONLY --> */}
            <button type="button" className="btn ty1 c-red show-pc">
              <span className="fw-6">알림신청</span>
            </button>
            {/* <!-- //PC ONLY --> */}
            {/* <!-- MO ONLY --> */}
            <button type="button" className="btn ty1 c-red show-mo">
              <span className="fw-6">확인</span>
            </button>
            {/* <!-- //MO ONLY --> */}
          </div>
        </>
      ),
    });
  };

  return (
    <>
      {/* <!-- PC ONLY --> */}
      <section className="breadcrumb show-pc">
        <article className="breadcrumb-inner inner-content">
          <a href="#">HOME</a>
          <a href="#">파스타&밀가루</a>
          <a href="#" className="active">
            밀가루
          </a>
        </article>
      </section>
      {/* <!-- //PC ONLY --> */}
      <section className="goods-detail-wrap">
        <article className="goods-detail-inner inner-content">
          {/* 이미지 */}
          <div className="goods-thumbs img-slide prd-item sw-box">
            <div className="sw-cont goods-big-slide thumbs">
              {/* 로그인 후 */}
              {user && (
                <>
                  <span className="label-item">1+1</span>
                  {/* <!-- 활성화시 active클래스 --> */}
                  <span className="btn icon like active">좋아요</span>
                </>
              )}

              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="img">
                    <img
                      src={require('src/assets/images/temp/goods_temp_img01.png')}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="img">
                    <img
                      src={require('src/assets/images/temp/goods_temp_img02.png')}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="img">
                    <img
                      src={require('src/assets/images/temp/goods_temp_img03.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-pagination show-mo"></div>
            </div>

            <div className="sw-cont goods-thumb-slide show-pc">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="img">
                    <img
                      src={require('src/assets/images/temp/goods_temp_img01.png')}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="img">
                    <img
                      src={require('src/assets/images/temp/goods_temp_img02.png')}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="img">
                    <img
                      src={require('src/assets/images/temp/goods_temp_img03.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 상세 설명 (구매여부) */}
          <div className="goods-info-cont">
            <div className="goods-desc-area">
              <p className="brand">카푸토 kaputo </p>
              <p className="name">
                코스타도로 엑스트라버진 올리브오일 500ml Costa d'oro
              </p>
              <button
                type="button"
                className="btn icon clipboard"
                onClick={handleClickClipBoard}
              >
                <span>URL복사</span>
              </button>
              <div className="badge-cont">
                <span className="badge-item ty-orange">상온</span>
                <span className="badge-item ty-gray ty-b">B급</span>
              </div>
              <p className="desc">
                주황색 컬러가 특징인 내추럴 ‘레드 체다’치즈 슬라이스로, 낱장이
                깔끔하게 분리되어 사용이 편리하며, 견과류의 고소한 맛과 깊은
                치즈의 풍미가 좋고 멜팅이 잘 되어 녹여 쓰기도 좋음. 장당 16g, 총
                50장
              </p>

              {/* 로그인 후 */}
              {user && (
                <div className="price">
                  <del>9,999,999원</del>
                  <p className="amount">
                    9,999,999원
                    <span className="per">10%</span>
                  </p>
                </div>
              )}
            </div>

            <div className="goods-info-area">
              <ul className="info">
                <li>원산지 : 이탈리아</li>
                <li>25kg*10</li>
                <li>실온</li>
                <li>소비기한 : 2024년 10월 18일</li>
              </ul>
              <div className="badge-cont">
                <span className="badge-item ty2 ty-lgray">유기농</span>
                <span className="badge-item ty2 ty-lgray">HACCP</span>
                <span className="badge-item ty2 ty-lgray">Non-GMO</span>
                <span className="badge-item ty2 ty-lgray">글루텐프리</span>
                <span className="badge-item ty2 ty-lgray">ISO</span>
                <span className="badge-item ty2 ty-lgray">PDO</span>
                <span className="badge-item ty2 ty-lgray">TSG</span>
                <span className="badge-item ty2 ty-lgray">비건</span>
              </div>
            </div>

            {/* 로그인 후 */}
            {user && (
              <>
                {/* <!-- PC ONLY --> */}
                <div className="goods-qty-area show-pc">
                  <p className="t-text ty2 c-gray2 ta-r">남은수량 14</p>
                  <dl className="goods-qty-box">
                    <dt>수량 입력</dt>
                    <dd>
                      <div className="item-qty-box">
                        <p className="item-unit">5ea</p>
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
                      <div className="item-qty-box">
                        <p className="item-unit">ea</p>
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
                    </dd>
                  </dl>
                  <div className="item-qty-give-box">
                    <p className="item-qty-tooltip">
                      주문 가능한 최대 수량입니다.
                    </p>
                    <p className="item-qty-give">
                      증정품(1+1) <span className="c-red">23개</span>
                    </p>
                  </div>
                </div>
                <div className="total-price-area show-pc">
                  <p>총 합계 5EA</p>
                  <p className="total-price">990,000원</p>
                </div>
                {/* <!-- //PC ONLY --> */}
                <div className="btn-area">
                  {/* <!-- 활성화시 active클래스 --> */}
                  <button type="button" className="btn ty2 bd-ty2 like">
                    <span>즐겨찾기</span>
                  </button>
                  <button
                    type="button"
                    className="btn ty2 c-black cart"
                    onClick={handleClickCartAdd}
                  >
                    <span>장바구니</span>
                  </button>
                </div>
                {/* <!-- 품절시 --> */}
                <div className="btn-area">
                  {/* <!-- PC ONLY --> */}
                  <div className="soldout show-pc">
                    <span>품절 되었습니다.</span>
                  </div>
                  <button type="button" className="btn ty2 bd-ty2 like show-pc">
                    <span>즐겨찾기</span>
                  </button>

                  {/* <!-- MO ONLY --> */}
                  <div className="soldout show-mo">
                    <span>품절</span>
                  </div>

                  <button
                    type="button"
                    className="btn ty2 alarm c-dgray"
                    onClick={handleClickAlarm}
                  >
                    <span>재입고 알림</span>
                  </button>
                </div>
                {/* <!-- //품절시 --> */}
              </>
            )}
          </div>
        </article>
      </section>

      {/* 로그인 후 */}
      {/* <!-- PC ONLY  --> 모바일 ???? */}
      {user && (
        <section className="goods-fix-wrap show-pc">
          <article className="inner-content">
            {/* <!-- 품절시 soldout 클래스 추가 --> */}
            <div className="prd-item v-ty1">
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
                  <p className="name">
                    코스타도로 엑스트라버진 올리브오일 500ml Costa d'oro
                  </p>
                  <p className="size">500ml*12</p>
                </a>
                <div className="badge-cont">
                  <span className="badge-item ty-orange">상온</span>
                  <span className="badge-item ty-gray ty-b">B급</span>
                </div>

                <div className="info">
                  <span>25kg*10</span>
                  <span>소비기한 2030/12/31</span>
                </div>
              </div>
            </div>

            <div className="goods-qty-area">
              <div className="item-qty-box ty2">
                <p className="item-unit">5ea</p>
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
            </div>
            <div className="goods-price-area">
              <del>9,999,999원</del>
              <p className="amount">
                <span className="per">10%</span>
                9,999,999원
              </p>
            </div>
            <div className="btn-area">
              <button className="btn ty2 c-red cart">
                <span>담기</span>
              </button>
              <button className="btn icon like bd-ty2"></button>
            </div>
          </article>
        </section>
      )}

      <section className="goods-tab-wrap show-pc">
        <article className="inner-content">
          <ul className="tab-group-list">
            <li className="tab-menu active">
              <a href="#">대체 상품</a>
            </li>
            <li className="tab-menu">
              <a href="#">연관 상품</a>
            </li>
          </ul>

          <div className="goods-tab-box">
            <div className="sw-box">
              <div className="sw-cont pdt-normal-slide swiper-container">
                <div className="swiper-wrapper">
                  {/* <!-- 품절시 soldout 클래스 추가 --> */}
                  <div className="swiper-slide">
                    <div className="prd-item">
                      {user && (
                        <>
                          <div className="rank">1</div>
                          {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                          <div className="prd-item-btn">
                            <button type="button" className="btn">
                              <span>담기</span>
                            </button>
                            {/* // 품절시 */}
                            <button type="button" className="btn">
                              <span>재입고 알림</span>
                            </button>
                            {/* // 출고 불가시 */}
                            <div className="label-noship">
                              해당 출고예정일에 출고 불가 상품입니다.
                            </div>
                          </div>
                        </>
                      )}
                      <div className="thumbs">
                        <a href="#">
                          <img
                            src={require('src/assets/images/temp/temp_item01.png')}
                            alt=""
                          />
                        </a>
                        {/* 로그인 후 */}
                        {user && (
                          <>
                            {/* <!-- 활성화시 active 클래스 추가 --> */}
                            <button type="button" className="like">
                              좋아요
                            </button>
                            <span className="label-item">할인</span>
                          </>
                        )}
                      </div>
                      <div className="desc">
                        <a href="#">
                          <p className="brand">브랜드명</p>
                          <p className="name">
                            상품명 2줄이상 말줄임 처리 상품명 2줄이상 말줄임
                            처리 상품명 2줄이상 말줄임 상품명 2줄이상 말줄임
                            처리 상품명 2줄이상 말줄임 처리 상품명 2줄이상
                            말줄임
                          </p>
                          <p className="size">500ml*12</p>

                          {/* 로그인 후 */}
                          {user && (
                            <div className="price">
                              <p className="amount">
                                <span className="per">15%</span>
                                9,999,999원
                                <del>9,999,999원</del>
                              </p>
                            </div>
                          )}
                        </a>

                        <div className="badge-cont">
                          <span className="badge-item ty-orange">상온</span>
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>

                        {/* 로그인 후 */}
                        {user && (
                          <div className="info">
                            <span>소비기한 2030/12/31</span>
                            <span>남은수량 100개</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    {/* <!-- 출고불가시 noship 클래스 추가 --> */}
                    <div className="prd-item noship">
                      <div className="rank">1</div>
                      {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                      <div className="prd-item-btn">
                        <button type="button" className="btn" disabled>
                          <span>담기</span>
                        </button>
                        {/* //품절시 */}
                        <button type="button" className="btn">
                          <span>재입고 알림</span>
                        </button>
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
                        <span className="label-item">1+1</span>
                        <div className="label-noship">
                          해당 출고예정일에 <br className="show-mo" />
                          출고 불가 상품입니다.
                        </div>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <p className="brand">브랜드명</p>
                          <p className="name">상품명</p>
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
                          <span className="badge-item ty-skyblue">냉동</span>
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>
                        <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    {/* <!-- 품절시 soldout 클래스 추가 --> */}
                    <div className="prd-item soldout">
                      <div className="rank">1</div>
                      {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                      <div className="prd-item-btn">
                        <button type="button" className="btn">
                          <span>담기</span>
                        </button>
                        <button type="button" className="btn">
                          <span>재입고 알림</span>
                        </button>
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
                        {/* // 출고 불가시 */}
                        <div className="label-noship">
                          해당 출고예정일에 출고 불가 상품입니다.
                        </div>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <p className="brand">브랜드명</p>
                          <p className="name">상품명</p>
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
                          <span className="badge-item ty-green">냉장</span>
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>
                        <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </article>
      </section>
      {/* <!-- //PC ONLY --> */}
      {/* <!-- MO ONLY --> */}
      <section className="goods-plus-wrap show-mo">
        <article className="inner-content">
          <div className="goods-plus-area">
            <h6 className="goods-plus-title">대체 상품</h6>
            <div className="sw-box">
              <div className="sw-cont pdt-normal-slide swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    {/* <!-- 품절시 soldout 클래스 추가 --> */}
                    <div className="prd-item">
                      <div className="rank">1</div>
                      {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                      <div className="prd-item-btn">
                        <button type="button" className="btn">
                          <span>담기</span>
                        </button>
                        {/* // 품절시 */}
                        <button type="button" className="btn">
                          <span>재입고 알림</span>
                        </button>
                        {/* // 출고 불가시 */}
                        <div className="label-noship">
                          해당 출고예정일에 출고 불가 상품입니다.
                        </div>
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
                            상품명 2줄이상 말줄임 처리 상품명 2줄이상 말줄임
                            처리 상품명 2줄이상 말줄임 상품명 2줄이상 말줄임
                            처리 상품명 2줄이상 말줄임 처리 상품명 2줄이상
                            말줄임
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
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>
                        <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    {/* <!-- 출고불가시 noship 클래스 추가 --> */}
                    <div className="prd-item noship">
                      <div className="rank">1</div>
                      {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                      <div className="prd-item-btn">
                        <button type="button" className="btn" disabled>
                          <span>담기</span>
                        </button>
                        {/* //품절시 */}
                        <button type="button" className="btn">
                          <span>재입고 알림</span>
                        </button>
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
                        <span className="label-item">1+1</span>
                        <div className="label-noship">
                          해당 출고예정일에 <br className="show-mo" />
                          출고 불가 상품입니다.
                        </div>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <p className="brand">브랜드명</p>
                          <p className="name">상품명</p>
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
                          <span className="badge-item ty-skyblue">냉동</span>
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>
                        <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    {/* <!-- 품절시 soldout 클래스 추가 --> */}
                    <div className="prd-item soldout">
                      <div className="rank">1</div>
                      {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                      <div className="prd-item-btn">
                        <button type="button" className="btn">
                          <span>담기</span>
                        </button>
                        <button type="button" className="btn">
                          <span>재입고 알림</span>
                        </button>
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
                        {/* // 출고 불가시 */}
                        <div className="label-noship">
                          해당 출고예정일에 출고 불가 상품입니다.
                        </div>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <p className="brand">브랜드명</p>
                          <p className="name">상품명</p>
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
                          <span className="badge-item ty-green">냉장</span>
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>
                        <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
          <div className="goods-plus-area">
            <h6 className="goods-plus-title">연관 상품</h6>
            <div className="sw-box">
              <div className="sw-cont pdt-normal-slide swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    {/* <!-- 품절시 soldout 클래스 추가 --> */}
                    <div className="prd-item">
                      <div className="rank">1</div>
                      {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                      <div className="prd-item-btn">
                        <button type="button" className="btn">
                          <span>담기</span>
                        </button>
                        {/* // 품절시 */}
                        <button type="button" className="btn">
                          <span>재입고 알림</span>
                        </button>
                        {/* // 출고 불가시 */}
                        <div className="label-noship">
                          해당 출고예정일에 출고 불가 상품입니다.
                        </div>
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
                            상품명 2줄이상 말줄임 처리 상품명 2줄이상 말줄임
                            처리 상품명 2줄이상 말줄임 상품명 2줄이상 말줄임
                            처리 상품명 2줄이상 말줄임 처리 상품명 2줄이상
                            말줄임
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
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>
                        <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    {/* <!-- 출고불가시 noship 클래스 추가 --> */}
                    <div className="prd-item noship">
                      <div className="rank">1</div>
                      {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                      <div className="prd-item-btn">
                        <button type="button" className="btn" disabled>
                          <span>담기</span>
                        </button>
                        {/* //품절시 */}
                        <button type="button" className="btn">
                          <span>재입고 알림</span>
                        </button>
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
                        <span className="label-item">1+1</span>
                        <div className="label-noship">
                          해당 출고예정일에 <br className="show-mo" />
                          출고 불가 상품입니다.
                        </div>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <p className="brand">브랜드명</p>
                          <p className="name">상품명</p>
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
                          <span className="badge-item ty-skyblue">냉동</span>
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>
                        <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    {/* <!-- 품절시 soldout 클래스 추가 --> */}
                    <div className="prd-item soldout">
                      <div className="rank">1</div>
                      {/* <!-- 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 --> */}
                      <div className="prd-item-btn">
                        <button type="button" className="btn">
                          <span>담기</span>
                        </button>
                        <button type="button" className="btn">
                          <span>재입고 알림</span>
                        </button>
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
                        {/* // 출고 불가시 */}
                        <div className="label-noship">
                          해당 출고예정일에 출고 불가 상품입니다.
                        </div>
                      </div>
                      <div className="desc">
                        <a href="#">
                          <p className="brand">브랜드명</p>
                          <p className="name">상품명</p>
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
                          <span className="badge-item ty-green">냉장</span>
                          <span className="badge-item ty-lightgray">NEW</span>
                        </div>
                        <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* <!-- //MO ONLY --> */}

      {/* 상품 상세 내용 */}
      <section className="goods-info-wrap">
        <article className="inner-content">
          <div className="goods-info-area">
            <h6>제품상세</h6>
            <p>원산지 : 이탈리아</p>
            <p>제조사 : ANTIMO CAPUTO S.R.L</p>
            <p>규격*박스입수 : 25kg*1, 5kg*1</p>
            <p>원료명 : 밀가루(밀)100%</p>
            <p>유통기한 : 제조일로부터 1년</p>
            <p>보관 : 상온 (직사광선을 피한 건조하고 서늘한 곳에 보관)</p>
            <p>
              상품특징 : Tipo 0, 단백질 13.50%, 회분 0.60%, 강도 320~340, 탄성
              0.50~0.60"누볼라 밀가루"보다 단백질 함량이 높아 기공 형성이 더욱
              뛰어난 카푸토의 신제품입니다. 단백질 함량이 높아 글루텐 형성이 잘
              되어 발효 시 기공이 잘 생기며 풍미가 매우 뛰어납니다. 비가, 풀리쉬
              또는 사워도우 등에
            </p>
            <p>
              적합하며, 슈퍼 누볼라로 나폴리 피자를 만들면 고르니초네가 크게
              부풀고 풍미가 더욱 진해집니다.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
