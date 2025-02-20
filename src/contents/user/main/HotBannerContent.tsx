import { Link } from 'react-router-dom';
import { userBookPath } from 'src/routes/path'

export default function HotBannerContent() {
  return (
    <section className="main-hot-wrap">
      <div className="inner-content">
        <div className="title-box">
          <h2 className="title-t ty2">신규 도서</h2>
          <Link to={userBookPath} className="btn-more">
            더보기
          </Link>
        </div>
        <div className="content-box">
          <div className="banner-unit">
            {/*<img src={require('src/assets/images/temp/temp_hot.png')} alt="" />*/}
            <div className="img-placeholder"></div>
            <div className="text-cell">
              <strong>2월 테마도서</strong>
              <p>이달의 주제 : 인문</p>
            </div>
          </div>
          <div className="prd-lists n3">
            <div className="prd-item">
              {/* 품절시 soldout 클래스 추가 */}
              {/* 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 */}
              <div className="prd-item-btn">
                <button type="button" className="btn">
                  <span>담기</span>
                </button>
                {/* 품절시 */}
                <button type="button" className="btn">
                  <span>반납 알림</span>
                </button>
              </div>
              <div className="thumbs">
                <Link to={''}>
                  <img
                    src={require('src/assets/images/temp/noimg.png')}
                    alt=""
                  />
                </Link>
                {/*<button type="button" className="like">좋아요</button> 활성화시 active 클래스 추가 */}
                {/* <span className="label-item">할인</span> */}
              </div>
              <div className="desc">
                <Link to={''}>
                  <p className="brand">인문/교양</p>
                  <p className="name"> 2500년 동안 사랑받은 초역 부처의 말</p>
                  <p className="size">코이케 류노스케</p>
                  {/* <div className="price">
                        <p className="amount">
                          <span className="per">15%</span>
                          9,999,999원
                          <del>9,999,999원</del>
                        </p>
                      </div> */}
                </Link>
                <div className="badge-cont">
                  <span className="badge-item ty-orange">신규</span>
                </div>
                {/* <div className="info">
                      <span>소비기한 2030/12/31</span>
                      <span>남은수량 100개</span>
                    </div> */}
              </div>
            </div>
            <div className="prd-item">
              {/* 품절시 soldout 클래스 추가 */}
              {/* 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 */}
              <div className="prd-item-btn">
                <button type="button" className="btn">
                  <span>담기</span>
                </button>
                {/* 품절시 */}
                <button type="button" className="btn">
                  <span>반남 알림</span>
                </button>
              </div>
              <div className="thumbs">
                <Link to={''}>
                  <img
                    src={require('src/assets/images/temp/2107075.png')}
                    alt=""
                  />
                </Link>
                {/*<button type="button" className="like">좋아요</button> 활성화시 active 클래스 추가 */}
                {/* <span className="label-item">할인</span> */}
              </div>
              <div className="desc">
                <Link to={''}>
                  <p className="brand">인문/교양</p>
                  <p className="name">
                    내가 원하는 것을 나도 모를 때
                  </p>
                  <p className="size">전승환</p>
                  {/* <div className="price">
                        <p className="amount">
                          <span className="per">15%</span>
                          9,999,999원
                          <del>9,999,999원</del>
                        </p>
                      </div> */}
                </Link>
                <div className="badge-cont">
                  <span className="badge-item ty-orange">신규</span>
                </div>
                {/* <div className="info">
                      <span>소비기한 2030/12/31</span>
                      <span>남은수량 100개</span>
                    </div> */}
              </div>
            </div>
            <div className="prd-item">
              {/* 품절시 soldout 클래스 추가 */}
              {/* 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 */}
              <div className="prd-item-btn">
                <button type="button" className="btn">
                  <span>담기</span>
                </button>
                {/* 품절시 */}
                <button type="button" className="btn">
                  <span>반납 알림</span>
                </button>
              </div>
              <div className="thumbs">
                <Link to={''}>
                  <img
                    src={require('src/assets/images/temp/image_noimg.png')}
                    alt=""
                  />
                </Link>
                {/*<button type="button" className="like">좋아요</button> 활성화시 active 클래스 추가 */}
                {/* <span className="label-item">할인</span> */}
              </div>
              <div className="desc">
                <Link to={''}>
                  <p className="brand">브랜드명</p>
                  <p className="name">
                    상품명 2줄이상 말줄임 처리 상품명 2줄이상 말줄임 처리 상품명
                    2줄이상 말줄임 상품명 2줄이상 말줄임 처리 상품명 2줄이상
                    말줄임 처리 상품명 2줄이상 말줄임
                  </p>
                  <p className="size">500ml*12</p>
                  {/* <div className="price">
                        <p className="amount">
                          <span className="per">15%</span>
                          9,999,999원
                          <del>9,999,999원</del>
                        </p>
                      </div> */}
                </Link>
                <div className="badge-cont">
                  <span className="badge-item ty-skyblue">냉동</span>
                </div>
                {/* <div className="info">
                      <span>소비기한 2030/12/31</span>
                      <span>남은수량 100개</span>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
