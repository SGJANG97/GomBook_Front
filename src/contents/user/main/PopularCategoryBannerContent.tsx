import { Link } from 'react-router-dom';

export default function PopularCategoryBannerContent() {
  return (
    <section className="main-pcate-wrap">
      <article className="inner-content">
        <div className="title-box">
          <h4 className="title-t ty2">인기 카테고리</h4>
        </div>
        <ul className="pcate-area">
          <li>
            <Link to={''}>
              <div className="img-box">
                <img
                  src={require('src/assets/images/temp/main_pcate_01.png')}
                  alt=""
                />
              </div>
              <p>전체 카테고리</p>
            </Link>
          </li>
          <li className="hot">
            <Link to={''}>
              <span className="badge">HOT</span>
              <div className="img-box">
                <img
                  src={require('src/assets/images/temp/main_pcate_02.png')}
                  alt=""
                />
              </div>
              <p>특가</p>
            </Link>
          </li>
          <li>
            <Link to={''}>
              <div className="img-box">
                <img
                  src={require('src/assets/images/temp/main_pcate_03.png')}
                  alt=""
                />
              </div>
              <p>파스타&밀가루</p>
            </Link>
          </li>
          <li>
            <Link to={''}>
              <div className="img-box">
                <img
                  src={require('src/assets/images/temp/main_pcate_04.png')}
                  alt=""
                />
              </div>
              <p>올리브오일</p>
            </Link>
          </li>
          <li>
            <Link to={''}>
              <div className="img-box">
                <img
                  src={require('src/assets/images/temp/main_pcate_05.png')}
                  alt=""
                />
              </div>
              <p>소스</p>
            </Link>
          </li>
          <li>
            <Link to={''}>
              <div className="img-box">
                <img
                  src={require('src/assets/images/temp/main_pcate_06.png')}
                  alt=""
                />
              </div>
              <p>치즈&유제품</p>
            </Link>
          </li>
          <li>
            <Link to={''}>
              <div className="img-box">
                <img
                  src={require('src/assets/images/temp/main_pcate_07.png')}
                  alt=""
                />
              </div>
              <p>고기&햄</p>
            </Link>
          </li>
          <li>
            <Link to={''}>
              <div className="img-box">
                <img
                  src={require('src/assets/images/temp/main_pcate_08.png')}
                  alt=""
                />
              </div>
              <p>수산물</p>
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
}
