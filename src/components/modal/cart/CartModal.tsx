import { storeUserModalActions } from 'src/lib/store/userModalStore';

interface Props {
  prodId: string;
}

export default function CartModal(props: Props) {
  const { prodId } = props;

  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  //FN: 장바구니 담기
  const handleClickCartAdd = () => {
    userModalActions.setUserModal({
      type: 'toast',
      modalOpen: true,
      headerTitle: '',
      content: '상품이 장바구니에 담겼습니다.',
    });
  };

  return (
    <div className="inner">
      <div className="prd-item h-ty1">
        <div className="thumbs">
          <a href="#">
            <img
              src={require('src/assets/images/temp/temp_item01.png')}
              alt=""
            />
          </a>
        </div>
        <div className="desc">
          <a href="#">
            <p className="brand">브랜드명</p>
            <p className="name">
              상품명 최대 2줄이상 말줄임처리 상품명 최대 2줄이상 말줄임처리
              상품명 최대 2줄이상 말줄임처리 상품명 최대 2줄이상 말줄임처리
              상품명 최대 2줄이상 말줄임처리
            </p>
            <div className="price">
              <p className="amount">[#판매가]원*</p>
              <span className="qty">남은수량 0</span>
            </div>
          </a>
        </div>
      </div>

      <div className="popup-qty-area">
        <p className="t-text c-red">*주문 가능 수량을 초과했습니다.</p>
        <p className="item-qty-give">[1+1] 11ea 증정</p>
        <div className="item-qty-box">
          <p className="item-unit">5ea</p>
          <div className="item-qty">
            <input
              className="item_qty_count"
              type="tel"
              title="상품수량"
              value="1"
            />
            <button type="button" className="btn icon minus">
              <span>상품수량 빼기</span>
            </button>
            <button type="button" className="btn icon plus">
              <span>상품수량 더하기</span>
            </button>
          </div>
        </div>
        <div className="item-qty-box">
          <p className="item-unit">1ea</p>
          <div className="item-qty">
            <input
              className="item_qty_count"
              type="tel"
              title="상품수량"
              value="1"
            />
            <button type="button" className="btn icon minus">
              <span>상품수량 빼기</span>
            </button>
            <button type="button" className="btn icon plus">
              <span>상품수량 더하기</span>
            </button>
          </div>
        </div>
      </div>
      <div className="popup-qty-total-area">
        <p className="price">[제품단가*수량]원</p>
        <p className="total">총 합계 11</p>
      </div>

      <div className="popup-btn-area">
        <button
          type="button"
          className="btn ty1 c-black"
          onClick={handleClickCartAdd}
        >
          <span>장바구니 담기</span>
        </button>
      </div>
    </div>
  );
}
