import { storeUserModalActions } from 'src/lib/store/userModalStore';

interface Props {
  badgeType: string;
  className: string;
  styleColor: string;
  label: string;
  onClickCallback?: (data: string) => void;
}

export default function BadgeCongent(props: Props) {
  const { badgeType, className, styleColor, label, onClickCallback } = props;

  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  //FN: B급 상품 modal
  const handleClickBgrade = (type?: string) => {
    if (type === 'b') {
      userModalActions.setUserModal({
        modalOpen: true,
        type: 'popup',
        popClassName: 'popup-alert',
        headerTitle: 'B급 상품안내',
        content: <BProductInfo />,
      });
    }
  };

  return (
    <>
      {/* B급을 가장 마지막에... 그래야 (?)아이콘 나옴 */}
      <span
        className={`badge-item ${className} ${badgeType === 'b' && 'ty-b'}`}
        style={{ backgroundColor: `#${styleColor}` }}
        onClick={() => handleClickBgrade(badgeType)}
      >
        {label}
      </span>

      {/* 
      <div className="badge-cont">
        {badgeList?.map((item, idx) => (
          <span
            className={`badge-item ${item.type === 'b' && 'ty-gray ty-b'}`}
            style={{ backgroundColor: `#${item.color}` }}
            key={idx}
            onClick={() => handleClickBgrade(item.type)}
          >
            {item.label}
          </span>
        ))}
        <span className="badge-item ty-orange">상온</span>
      <span className="badge-item ty-gray ty-b">B급</span>
      <span className="badge-item ty-skyblue">냉동</span>
      <span className="badge-item ty-lightgray">NEW</span>
      <span className="badge-item ty-green">냉장</span>
      <span className="badge-item ty-red">임박</span>
      </div> 
      <div className="badge-cont">
        <span className="badge-item ty-orange">상온</span>
        <span className="badge-item ty-gray ty-b">B급</span>
      </div>
      <div className="info">
        <span>소비기한 2030/12/31</span>
        <span>남은수량 100개</span>
      </div>
      */}
    </>
  );
}

const BProductInfo = () => {
  return (
    <div className="popup-bgrade-box">
      <h6>B급상품이란?</h6>
      <p>
        포장 및 약간의 제품불량으로 인하여 사용에는 지장이 없으나 판매하기에는
        부적합한 상품을 합리적인 가격에 판매하는 제품입니다.
      </p>
      <p>B급 상품의 사유는 아래와 같습니다.</p>
      <dl>
        <dt>• 포장상태 B급</dt>
        <dd className="c-gray">
          제품 포장에 먼지 및 이물질이 묻거나 손상된 경우
        </dd>
      </dl>
      <dl>
        <dt>• 소량재고 상품</dt>
        <dd className="c-gray">판매 후 일부 잔량 재고인 경우</dd>
      </dl>
      <dl>
        <dt>• 제품상태 B급</dt>
        <dd className="c-gray">
          약간의 흠집등 제품 표면 등에 문제가 있는 경우{' '}
        </dd>
      </dl>
      <div className="box c-gray2">
        ※ 주의사항
        <br />
        위와 같은 사유로 합리적인 가격에 판매하는 상품이므로 구매시 신중하게
        선택하셔야 합니다.
      </div>
    </div>
  );
};
