import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import image_01 from 'src/assets/images/temp/main_visual_01.png';
import image_02 from 'src/assets/images/temp/main_visual_02.png';
import image_03 from 'src/assets/images/temp/main_visual_03.png';
import image_04 from 'src/assets/images/temp/main_visual_04.png';

export default function SbannBannerContent() {
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
    <section className="main-sbann-wrap">
      <article className="inner-content">
        <div className="main-sbann-swiper">
          <Swiper
            //   ref={swiperRef}
            className="main-sbann-swiper"
            //   Autoplay={false}
            loop={true} //슬라이드 무한 루프로 반복할지 여부
            slidesPerView={1} //한 번에 보여질 슬라이드 수
            spaceBetween={10} //슬라이드 사이의 간격
            //   loopedSlides={3}
            speed={800}
            modules={[Pagination, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true, //페이지네이션 클릭 가능하게 설정
              type: 'fraction', // 불릿 타입으로 설정 (기본값) 'bullets', 'fraction', 'progressbar', 'custom' 중 선택
              el: '.main-sbann-swiper .swiper-pagination',
              renderFraction: (currentClass: string, totalClass: string) =>
                `<span class="${currentClass}"></span><i>/</i><span class="${totalClass}"></span>`,

              // dynamicBullets: true, // 동적 불릿 효과 적용 (선택사항)
            }} //페이지 표시기를 활성화하고 위치 설정
            navigation={{
              nextEl: '.main-sbann-swiper .swiper-button-next',
              prevEl: '.main-sbann-swiper .swiper-button-prev',
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
                <a href="">
                  <div className="img-box">
                    {/* PC 이미지 */}
                    <img
                      src={require('src/assets/images/temp/main_sbann_01.png')}
                      alt=""
                      className="show-pc"
                    />
                    {/* MO 이미지 */}
                    <img
                      src={require('src/assets/images/temp/main_sbann_01_mo.png')}
                      alt=""
                      className="show-mo"
                    />
                  </div>
                  <div className="txt-box">
                    <h6 className="title">말돈 사은품 이벤트</h6>
                    <p className="desc">말돈제품 구매시 말돈 그라인더 제공!</p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
            {/* 내비게이션 버튼 */}
          </Swiper>
          <div className="swiper-control">
            <div className="swiper-button swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button swiper-button-next"></div>
          </div>
        </div>
      </article>
    </section>
  );
}
