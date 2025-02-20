import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import image_01 from 'src/assets/images/temp/main_visual_01.png';
import image_02 from 'src/assets/images/temp/main_visual_02.png';
import image_03 from 'src/assets/images/temp/main_visual_03.png';
import image_04 from 'src/assets/images/temp/main_visual_04.png';

export default function BestBrandBannerContent() {
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

  return (
    <section className="main-bestbrand-wrap">
      <article className="inner-content">
        <div className="title-box">
          <h4 className="title-t ty2">베스트 브랜드</h4>
        </div>
        <div className="main-brand-area sw-box">
          <div className="main-brand-swiper">
            <Swiper
              className="main-brand-swiper"
              centeredSlides={true}
              loop={true} //슬라이드 무한 루프로 반복할지 여부
              slidesPerView={1.47} //한 번에 보여질 슬라이드 수
              spaceBetween={16} //슬라이드 사이의 간격
              speed={800}
              modules={[Pagination, Navigation]}
              breakpoints={{
                768: {
                  centeredSlides: false,
                  slidesPerView: 3, //브라우저가 768보다 클 때
                  spaceBetween: 30,
                },
              }}
              navigation={{
                nextEl: '.main-brand-swiper .swiper-button-next',
                prevEl: '.main-brand-swiper .swiper-button-prev',
              }} //이전 및 다음 버튼 표시하고 위치 설정
              pagination={{
                el: '.main-brand-area .swiper-pagination',
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <a href="">
                    <div className="img-box">
                      <img
                        src={require('src/assets/images/temp/main_brand_01.png')}
                        alt=""
                      />
                    </div>
                    <div className="txt-box">
                      <h6 className="title">카푸토</h6>
                      <p className="desc">3대가 이어온 이탈리아 대표 밀가루</p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
              {/* 내비게이션 버튼 */}
            </Swiper>
            <div className="swiper-button swiper-button-next" />
            <div className="swiper-button swiper-button-prev" />
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </article>
    </section>
  );
}
