import SwiperBox from 'src/components/form/SwiperBox';

import image_01 from 'src/assets/images/temp/main_visual_01.png';
import image_02 from 'src/assets/images/temp/main_visual_02.png';
import image_03 from 'src/assets/images/temp/main_visual_03.png';
import image_04 from 'src/assets/images/temp/main_visual_04.png';

export default function MainBannerContent() {
  const slides = [
    {
      title: '프랑스의 대중적 달팽이_01',
      description: '95년 역사의 오가닉 사육과 노하우',
      image: image_01,
      id: 1,
    },
    {
      title: '이탈리아의 가장 사랑받는_02',
      description: '미식가를 위한 탁월한 선택',
      image: image_02,
      id: 2,
    },
    {
      title: '스페인에서 온 신선한_03',
      description: '청정해역의 깊은 풍미',
      image: image_03,
      id: 3,
    },
    {
      title: '프랑스의 대중적 달팽이_04',
      description: '파스타로 경험하는 이탈리아 미식',
      image: image_04,
      id: 4,
    },
  ];

  return (
    <section className="main-visual-wrap">
      <article className="inner-content">
        <div className="main-visual-swiper">
          <SwiperBox
            type={'main'}
            slideList={slides}
            swiperClassName="main-visual-swiper"
            paginationClassName="main-visual-swiper"
          />
        </div>
      </article>
    </section>
  );
}
