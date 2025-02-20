import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';

interface Props {
  type: string;
  slideList: Array<any>;
  swiperClassName?: string;
  paginationClassName?: string;
}

// Swiper 모듈 추가
// SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function SwiperBox(props: Props) {
  const { type, slideList, swiperClassName, paginationClassName } = props;

  const swiperRef = useRef<SwiperRef>(null); // Swiper 인스턴스를 참조하기 위한 ref

  //FN: stop
  const handleAutoplayStop = () => {
    swiperRef.current?.swiper.autoplay.stop();
  };
  //FN: start
  const handleAutoplayStart = () => {
    swiperRef.current?.swiper.autoplay.start();
  };

  return (
    <>
      {slideList.length > 0 && (
        <Swiper
          ref={swiperRef}
          className={swiperClassName}
          loop={true} //슬라이드 무한 루프로 반복할지 여부
          slidesPerView={1} //한 번에 보여질 슬라이드 수
          spaceBetween={type === 'main' ? 10 : 0} //슬라이드 사이의 간격
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }} //자동 재생 여부
          modules={[Pagination, Navigation]}
          breakpoints={
            type === 'main'
              ? {
                  768: {
                    slidesPerView: 2, //브라우저가 768보다 클 때
                    spaceBetween: 10,
                  },
                }
              : {}
          }
          pagination={{
            clickable: true, //페이지네이션 클릭 가능하게 설정
            type: 'fraction', // 불릿 타입으로 설정 (기본값) 'bullets', 'fraction', 'progressbar', 'custom' 중 선택
            el: `.${paginationClassName} .swiper-pagination`,
            renderFraction: (currentClass: string, totalClass: string) =>
              `<span class="${currentClass}"></span><i> / </i><span class="${totalClass}"></span>`,
            formatFractionCurrent: function (number: number) {
              return number < 10
                ? type === 'main'
                  ? '0' + number
                  : number
                : number;
            },
            // dynamicBullets: true, // 동적 불릿 효과 적용 (선택사항)
          }} //페이지 표시기를 활성화하고 위치 설정
          navigation={{
            nextEl: `.${swiperClassName} .swiper-button-next`,
            prevEl: `.${swiperClassName} .swiper-button-prev`,
          }} //이전 및 다음 버튼 표시하고 위치 설정
        >
          {slideList.map((slide, idx) => (
            <div key={idx} >
              {type === 'modal' ? (
                <SwiperSlide key={idx}>
                  <div
                    className="txt-box"
                    style={{
                      backgroundImage: `url(${slide.imageUrl})`,
                    }}
                  >
                    <h6 className="title" style={{ color: '#fff' }}>
                      {slide.title}
                    </h6>
                    <p className="desc" style={{ color: '#fff' }}>
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide
                  key={idx}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <Link to={`/product/${slide.id}`}>
                    <div className="txt-box">
                      <h6 className="title">{slide.title}</h6>
                      <p className="desc">{slide.description}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              )}
            </div>
          ))}
          {/* 내비게이션 버튼 */}
          <div className="swiper-button swiper-button-next" />
          <div className="swiper-button swiper-button-prev" />
          <div className="swiper-control">
            <div className="swiper-pagination"></div>
            <div className="swiper-button-play" onClick={handleAutoplayStart} />
            <div className="swiper-button-stop" onClick={handleAutoplayStop} />
          </div>
        </Swiper>
      )}
    </>
  );
}
