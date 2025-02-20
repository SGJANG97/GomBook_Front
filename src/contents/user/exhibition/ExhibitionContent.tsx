import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { userExhibitionPath } from 'src/routes/path';
import { handleClickPreventDefault } from 'src/utils/commonHandler';

import promo_temp_img01 from 'src/assets/images/temp/promo_temp_img01.png';
import promo_temp_img02 from 'src/assets/images/temp/promo_temp_img02.png';
import promo_temp_img03 from 'src/assets/images/temp/promo_temp_img03.png';

export default function ExhibitionContent() {
  const navigate = useNavigate();
  const [exhibitionList, setExhibitionList] = useState<any[]>([]);

  useEffect(() => {
    setExhibitionList([
      {
        id: 1,
        title: '#이벤트 타이틀#',
        data: '#이벤트 시작 년/월/일 ~ #이벤트 종료 년/월/일',
        img: promo_temp_img01,
      },
      {
        id: 2,
        title: '산뜻하고 달콤한 화이트 발사믹 기획전',
        data: '2024/12/01 ~ 2024/12/01',
        img: promo_temp_img02,
      },
      {
        id: 3,
        title: '이탈리안 유기농 듀럼밀',
        data: '2024/12/01 ~ 2024/12/01',
        img: promo_temp_img03,
      },
      {
        id: 4,
        title: '#이벤트 타이틀#',
        data: '#이벤트 시작 년/월/일 ~ #이벤트 종료 년/월/일',
        img: promo_temp_img01,
      },
      {
        id: 5,
        title: '산뜻하고 달콤한 화이트 발사믹 기획전',
        data: '2024/12/01 ~ 2024/12/01',
        img: promo_temp_img02,
      },
      {
        id: 6,
        title: '이탈리안 유기농 듀럼밀',
        data: '2024/12/01 ~ 2024/12/01',
        img: promo_temp_img03,
      },
      {
        id: 7,
        title: '#이벤트 타이틀#',
        data: '#이벤트 시작 년/월/일 ~ #이벤트 종료 년/월/일',
        img: promo_temp_img01,
      },
      {
        id: 8,
        title: '산뜻하고 달콤한 화이트 발사믹 기획전',
        data: '2024/12/01 ~ 2024/12/01',
        img: promo_temp_img02,
      },
      {
        id: 9,
        title: '이탈리안 유기농 듀럼밀',
        data: '2024/12/01 ~ 2024/12/01',
        img: promo_temp_img03,
      },
      {
        id: 10,
        title: '#이벤트 타이틀#',
        data: '#이벤트 시작 년/월/일 ~ #이벤트 종료 년/월/일',
        img: promo_temp_img01,
      },
      {
        id: 11,
        title: '산뜻하고 달콤한 화이트 발사믹 기획전',
        data: '2024/12/01 ~ 2024/12/01',
        img: promo_temp_img02,
      },
      {
        id: 12,
        title: '이탈리안 유기농 듀럼밀',
        data: '2024/12/01 ~ 2024/12/01',
        img: promo_temp_img03,
      },
    ]);
  }, []);

  //FN: 기획전 상세
  const handleClickExhibitionDetail = handleClickPreventDefault(
    (Exhibition: any) => {
      navigate(`/${userExhibitionPath}/${Exhibition.id}`);
    }
  );

  return (
    <section className="promo-wrap">
      <article className="inner-content">
        {/* <!-- 타이틀 --> */}
        <div className="sub-title-box show-pc">
          <h2 className="title-t ty2">기획전</h2>
        </div>

        <ul className="promo-lists">
          {exhibitionList.length > 0 ? (
            exhibitionList.map((item, idx) => (
              <li key={idx}>
                <Link
                  to=""
                  onClick={(e) => handleClickExhibitionDetail(e, item)}
                >
                  <div className="img-box">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="txt-box">
                    <h6 className="tit">[{item.title}]</h6>
                    <p className="date">[{item.data}]</p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li>
              <a href="">
                <div className="img-box">
                  <img
                    src={require('src/assets/images/temp/promo_temp_soon.png')}
                    alt=""
                  />
                </div>
              </a>
            </li>
          )}
        </ul>
      </article>
    </section>
  );
}
