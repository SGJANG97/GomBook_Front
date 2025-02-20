import { useState } from 'react';

import { PageInfo } from 'src/components/form/grid/GridTableBox';
import { handleIsMobile } from 'src/utils/mobile';

import ButtonBox from 'src/components/form/ButtonBox';
import PaginationBox from 'src/components/form/PaginationBox';
import BookItemContent from 'src/components/book/BookItemContent';
import BookSearchBarContent from 'src/components/book/BookSearchBarContent';
import { storeUserModalActions } from 'src/lib/store/userModalStore';

//장바구니 정보
interface CartInfo {
  idx: number;
  productId: string; //상품ID
  productName: string; //상품명
  productSpec: string; //상품규격
}

interface Props {
  onClickCallback?: (data: CartInfo[]) => void;
}

//샘플 상품
export default function SamplePopupContent(props: Props) {
  const { onClickCallback } = props;

  //FN: mobile 여부
  const isMobile = handleIsMobile();

  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  //장바구니
  const [cartList, setCartList] = useState<CartInfo[]>([]);

  //페이징
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalCount: 0,
    pageNo: 1,
    pageSize: 20,
  });

  //FN: 페이징
  const handleClickPagination = (curPage: number) => {
    setPageInfo({
      ...pageInfo,
      pageNo: curPage,
    });
  };

  //FN: 장바구니 담기
  const handleClickCartAdd = (product: any, idx: number) => {
    if (cartList.length + 1 > 10) {
      userModalActions.setUserModal({
        type: 'alert',
        modalOpen: true,
        headerTitle: '알림',
        content: '품목당 1개씩 최대10개까지 샘플신청 가능합니다.',
      });
      return;
    }

    setCartList([
      ...cartList,
      {
        idx: idx,
        productId: 'product_' + idx, //상품ID
        productName: '상품_' + idx, //상품명
        productSpec: '500g', //상품규격
      },
    ]);
  };

  //FN: 장바구니 전체 삭제
  const handleClickCartDelete = (flag: string, idx?: number) => {
    if (flag === 'All') {
      setCartList([]);
    } else {
      setCartList(cartList.filter((filter) => filter.idx !== idx));
    }
  };

  //FN: 신청
  const handleClickRequest = () => {
    onClickCallback?.(cartList);
    //modal 초기화
    userModalActions.setUserModalInit();
  };

  return (
    <>
      <div className="sample-c">
        <div className="titles">
          <p>
            샘플상품 선택
            <span>※ 품목당 1개씩 최대10개까지 샘플신청 가능합니다.</span>
          </p>
          <span>배송지 : 서울특별시 성동구 성수이로 65 협성빌딩 202호</span>
        </div>

        {/* 상품 검색 */}
        <div className="cate-wrap">
          <div className="direct-order-wrap">
            <BookSearchBarContent />
          </div>
        </div>

        <div className="sample-table-wrap">
          <div className="sample-table">
            <table>
              <thead>
                <tr>
                  <th>상품명</th>
                  <th>규격</th>
                  <th>담기</th>
                </tr>
              </thead>
            </table>
            <div className="scroll">
              <table>
                <tbody>
                  {[...Array(10)].map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        {/* 상품 */}
                        <BookItemContent />
                      </td>

                      <td>
                        <p className="text-g">500g*12</p>
                      </td>
                      <td>
                        {/* disabled */}
                        <ButtonBox
                          className="btn ty2 bd-ty2"
                          label="담기"
                          onClickCallback={() => handleClickCartAdd(item, idx)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {!isMobile && (
                <PaginationBox
                  totalCount={
                    pageInfo?.totalCount === 0 ? 1 : pageInfo?.totalCount || 1
                  } // 데이터의 총 개수
                  itemCountPerPage={pageInfo?.pageSize || 20} // 페이지 당 보여줄 데이터 개수
                  pageCount={pageInfo?.pageSize || 20} // 보여줄 페이지 개수
                  currentPage={pageInfo?.pageNo || 1} // 현재 페이지
                  onClickCallBack={handleClickPagination}
                />
              )}
            </div>
          </div>

          <div className="sample-cart">
            <div className="title">
              <p>담긴 샘플상품</p>
              <ButtonBox
                label="전체삭제"
                onClickCallback={() => handleClickCartDelete('All')}
              />
            </div>

            <div className="list">
              {cartList.length === 0 ? (
                <div className="no-data">담긴 샘플상품이 없습니다.</div>
              ) : (
                <ul>
                  {cartList.map((item) => (
                    <li key={item.idx}>
                      <p>
                        {item.productName} {item.productSpec}
                      </p>
                      <ButtonBox
                        onClickCallback={() =>
                          handleClickCartDelete('', item.idx)
                        }
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="total">
              <p>품목</p>
              <span>{cartList.length}건</span>
            </div>
            <ButtonBox
              className="btn ty8 c-red"
              label={'샘플신청'}
              onClickCallback={handleClickRequest}
            />
          </div>
        </div>
      </div>

      <div className="popup-btn-area ty2">
        <ButtonBox
          className="btn ty8 c-black"
          label="닫기"
          onClickCallback={() => userModalActions.closeLastModal()}
        />
      </div>
    </>
  );
}
