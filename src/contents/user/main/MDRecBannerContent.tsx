import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import image_01 from 'src/assets/images/temp/main_visual_01.png';
import image_02 from 'src/assets/images/temp/main_visual_02.png';
import image_03 from 'src/assets/images/temp/main_visual_03.png';
import image_04 from 'src/assets/images/temp/main_visual_04.png';
import BadgeCongent from 'src/components/badge/BadgeContent';

export default function MDRecBannerContent() {
  // swiper
  const swiperRef = useRef<SwiperRef>(null); // Swiper 인스턴스를 참조하기 위한 ref
  const slides = [
    {
      title: '프랑스의 대중적 달팽이_01',
      description: '95년 역사의 오가닉 사육과 노하우',
      image: image_01,
    },
    {
      title: '이탈리아의 가장 사랑받는_02',
      description: '미식가를 위한 탁월한 선택',
      image: image_02,
    },
    {
      title: '스페인에서 온 신선한_03',
      description: '청정해역의 깊은 풍미',
      image: image_03,
    },
    {
      title: '프랑스의 대중적 달팽이_04',
      description: '파스타로 경험하는 이탈리아 미식',
      image: image_04,
    },
    {
      title: '프랑스의 대중적 달팽이_04',
      description: '파스타로 경험하는 이탈리아 미식',
      image: image_04,
    },
  ];

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
    <section className="main-md-wrap">
      <div className="inner-content">
        <div className="title-box">
          <h2 className="title-t ty2">MD 추천상품</h2>
          <Link to={''} className="btn-more">
            더보기
          </Link>
        </div>
        <div className="sw-box">
          <div className="sw-cont pdt-normal-slide">
            <Swiper
              className="pdt-normal-slide"
              loop={false} //슬라이드 무한 루프로 반복할지 여부
              slidesPerView={2.4} //한 번에 보여질 슬라이드 수
              spaceBetween={16} //슬라이드 사이의 간격
              speed={500}
              modules={[Pagination, Navigation]}
              breakpoints={{
                768: {
                  slidesPerView: 4, //브라우저가 768보다 클 때
                  spaceBetween: 30,
                },
              }}
              navigation={{
                nextEl: '.pdt-normal-slide .swiper-button-next',
                prevEl: '.pdt-normal-slide .swiper-button-prev',
              }} //이전 및 다음 버튼 표시하고 위치 설정
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="prd-item">
                    {/* 품절시 soldout 클래스 추가 */}
                    {/* 담기 버튼 미사용시 .prd-item-btn 영역 전체 삭제 */}
                    <div className="prd-item-btn">
                      <button type="button" className="btn">
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
                      {/*<button type="button" className="like">좋아요</button> */}{' '}
                      {/* 활성화시 active 클래스 추가 */}
                      {/* <span className="label-item">할인</span> */}
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
                        {badgeList?.map((item, idx) => (
                          <BadgeCongent
                            badgeType={item.type}
                            className={item.color}
                            styleColor={''}
                            label={item.label}
                            key={idx}
                          />
                        ))}
                      </div>
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
