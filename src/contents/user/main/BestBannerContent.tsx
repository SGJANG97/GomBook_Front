import { Link } from 'react-router-dom';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';

import image_01 from 'src/assets/images/temp/main_visual_01.png';
import image_02 from 'src/assets/images/temp/main_visual_02.png';
import image_03 from 'src/assets/images/temp/main_visual_03.png';
import image_04 from 'src/assets/images/temp/main_visual_04.png';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import CartModal from 'src/components/modal/cart/CartModal';

export default function BestBannerContent() {
  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  // swiper
  const swiperRef = useRef<SwiperRef>(null); // Swiper 인스턴스를 참조하기 위한 ref

  const slides = [
    {
      id: '1',
      title: '프랑스의 대중적 달팽이_01',
      description: '95년 역사의 오가닉 사육과 노하우',
      image: image_01,
    },
    {
      id: '2',
      title: '이탈리아의 가장 사랑받는_02',
      description: '미식가를 위한 탁월한 선택',
      image: image_02,
    },
    {
      id: '3',
      title: '스페인에서 온 신선한_03',
      description: '청정해역의 깊은 풍미',
      image: image_03,
    },
    {
      id: '4',
      title: '프랑스의 대중적 달팽이_04',
      description: '파스타로 경험하는 이탈리아 미식',
      image: image_04,
    },
    {
      id: '5',
      title: '프랑스의 대중적 달팽이_04',
      description: '파스타로 경험하는 이탈리아 미식',
      image: image_04,
    },
  ];

  //FN: 상품 장바구니 담기 팝업
  const handleClickCart = (prodId: string) => {
    userModalActions.setUserModal({
      modalOpen: true,
      type: 'popup',
      headerTitle: '',
      popClassName: 'popup-qty-wrap popup-bottom-wrap',
      content: <CartModal prodId={prodId} />,
    });
  };

  return (
    <section className="main-best-wrap">
      <div className="inner-content">
        <div className="title-box c-white">
          <h2 className="title-t ty2">주간 BEST 상품</h2>
          <p>쉐프스푸드의 주간 BEST 상품을 만나보세요!</p>
          <Link to={''} className="btn-more">
            더보기
          </Link>
        </div>
        <div className="sw-box">
          <div className="sw-cont pdt-best-slide">
            <Swiper
              ref={swiperRef}
              className="pdt-best-slide"
              //   Autoplay={false}
              loop={true} //슬라이드 무한 루프로 반복할지 여부
              slidesPerView={1} //한 번에 보여질 슬라이드 수
              spaceBetween={16} //슬라이드 사이의 간격
              speed={500}
              modules={[Pagination, Navigation]}
              breakpoints={{
                768: {
                  slidesPerView: 3, //브라우저가 768보다 클 때
                  spaceBetween: 30,
                },
              }}
              pagination={{
                clickable: true, //페이지네이션 클릭 가능하게 설정
                el: '.pdt-best-slide .swiper-pagination',
                // dynamicBullets: true, // 동적 불릿 효과 적용 (선택사항)
              }} //페이지 표시기를 활성화하고 위치 설정
              navigation={{
                nextEl: '.pdt-best-slide .swiper-button-next',
                prevEl: '.pdt-best-slide .swiper-button-prev',
              }} //이전 및 다음 버튼 표시하고 위치 설정
              //   effect="slide" //슬라이드 전환 효과 설정 (ex. slide, fade 등등)
              // grabCursor //마우스 커서가 스와이퍼 위에 있을 때 손가락 포인터로 변경할지 여부
              // keyboard //키보드로 스와이퍼를 제어할지 여부
              // mousewheel //반응형 디자인을 위한 미디어쿼리와 함께 각 장치 크기에 대한 옵션
              //   onSlideChange={() => console.log('slide change')}
              //   onSwiper={(swiper: any) => console.log(swiper)}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="prd-item">
                    {/* 품절시 soldout 클래스 추가 */}
                    <div className="rank">1</div>
                    {/* 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 */}
                    <div className="prd-item-btn">
                      <button
                        type="button"
                        className="btn"
                        onClick={() => handleClickCart(slide.id)}
                      >
                        <span>담기</span>
                      </button>
                      {/* 품절시 */}
                      <button type="button" className="btn">
                        <span>재입고 알림</span>
                      </button>
                    </div>
                    <div className="thumbs">
                      <Link to={''}>
                        <img
                          src={require('src/assets/images/temp/temp_item01.png')}
                          alt=""
                        />
                      </Link>
                      {/* <button type="button" className="like">좋아요</button> */}
                      {/* 활성화시 active 클래스 추가 */}
                      {/*<span className="label-item">할인</span>*/}
                    </div>
                    <div className="desc">
                      <Link to={''}>
                        <p className="brand">브랜드명</p>
                        <p className="name">글루텐프리-레굼 펜네떼 리가테</p>
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
                        <span className="badge-item ty-orange">상온</span>
                      </div>
                      {/* <div className="info">
                          <span>소비기한 2030/12/31</span>
                          <span>남은수량 100개</span>
                        </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* 내비게이션 버튼 */}
            </Swiper>
            <div className="swiper-button swiper-button-next" />
            <div className="swiper-button swiper-button-prev" />
          </div>
        </div>
      </div>
    </section>
  );
}
