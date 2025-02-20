import { Link } from 'react-router-dom';
// import { userProductPath } from 'src/routes/path';
import { userBookPath } from 'src/routes/path';
import BadgeCongent from 'src/components/badge/BadgeContent';

interface Props {}

export default function BookItemContent(props: Props) {
  const {} = props;

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
    <>
      {/* <!-- 품절시 soldout 클래스 추가 --> */}
      <div className={`prd-item v-ty1 ${'soldout'}`}>
        <div className="thumbs">
          <Link to={`/${userBookPath}/1`}>
            <img
              src={require('src/assets/images/temp/temp_item01.png')}
              alt=""
            />
          </Link>
          {/* ===================================
            1. 우선순위는 1+1 > 할인
            2. 이미지에 나오면(1+1, 할인) 뱃지에서는 빼야한다. 
            =================================== */}

          {/* <span className="label-item">할인</span> */}
          <span className="label-item">1+1</span>
          {/* <!-- 활성화시 active 클래스 추가 --> */}
          <span className="like active">좋아요</span>
        </div>
        <div className="desc">
          <Link to={`/${userBookPath}/1`}>
            <p className="brand">브랜드명</p>
            <p className="name">
              상품명 2줄이상 말줄임 처리 상품명 2줄이상 말줄임 처리 상품명
              2줄이상 말줄임 상품명 2줄이상 말줄임 처리 상품명 2줄이상 말줄임
              처리 상품명 2줄이상 말줄임
            </p>
            <p className="size">500ml*12</p>
            <div className="price">
              <p className="amount">
                <span className="per">15%</span>
                9,999,999원
                <del>9,999,999원</del>
              </p>
            </div>
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
          <div className="info">
            <span>25kg*10</span>
            <span>소비기한 2030/12/31</span>
          </div>
        </div>
      </div>
    </>
  );
}
