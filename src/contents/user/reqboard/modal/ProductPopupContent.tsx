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
  onClickCallback?: (data: CartInfo) => void;
}

//상품(제품)
export default function ProductPopupContent(props: Props) {
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
    if (cartList.length + 1 > 1) {
      userModalActions.setUserModal({
        type: 'alert',
        modalOpen: true,
        headerTitle: '알림',
        content: '문의 상품 1개만 선택 가능합니다.',
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

    handleClickRequest({
      idx: idx,
      productId: 'product_' + idx, //상품ID
      productName: '상품_' + idx, //상품명
      productSpec: '500g', //상품규격
    });
  };

  //FN: 신청
  const handleClickRequest = (cartList: CartInfo) => {
    onClickCallback?.(cartList);
    //modal 초기화
    userModalActions.setUserModalInit();
  };

  return (
    <>
      <div className="sample-c">
        <div className="titles">
          <p>
            문의상품 선택
            <span>※ 문의 상품 1개만 선택 가능합니다.</span>
          </p>
        </div>

        {/* 상품 검색 */}
        <div className="cate-wrap">
          <div className="direct-order-wrap">
            <BookSearchBarContent />
          </div>
        </div>

        <div className="sample-table-wrap">
          <div className="sample-table ty2">
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
                          label="선택"
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
