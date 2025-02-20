import { Link } from 'react-router-dom';

export default function RecBrandBannerContent() {
  return (
    <section className="main-recbrand-wrap">
      <article className="inner-content">
        <div className="title-box">
          <h4 className="title-t ty2 clamp-1">추천 브랜드</h4>
          <p className="c-gray clamp-1">
            170년 전통의 파스타장인 가문의 비법 ‘Rummo’
          </p>
        </div>
        <div className="main-video-area">
          <div className="video-box">
            {/* 비디오 태그*/}
            {/* <video height="100%" width="100%" muted autoPlay playsInline loop> */}
            {/* <source src={require("../../assets/images/temp/video_sample.mp4")} type="video/mp4" /> */}
            {/* </video> */}
            <button className="button-muted">음소거</button>
            {/* 비디오 태그*/}
            {/* 유튜브 태그 */}
            유튜브 iframe
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TW_B8fgFhfw?autoplay=1&controls=1&mute=1&loop=0&playlist=TW_B8fgFhfw&playsinline=1"
              //   allowfullscreen
            ></iframe> */}
            {/* 유튜브 태그 */}
          </div>
        </div>
        <div className="btn-box center">
          <Link to={''} className="btn more-ty c-red">
            <span>더보기</span>
          </Link>
        </div>
      </article>
    </section>
  );
}
