import { useState } from 'react';

import { PageInfo } from 'src/components/form/grid/GridTableBox';
import { handleIsMobile } from 'src/utils/mobile';
import { storeUserModalActions } from 'src/lib/store/userModalStore';

import ButtonBox from 'src/components/form/ButtonBox';
import PaginationBox from 'src/components/form/PaginationBox';
import SelectBox from 'src/components/form/SelectBox';
import BookItemContent from 'src/components/book/BookItemContent';

//장바구니 정보
interface CartInfo {
  idx: number;
  productId: string; //상품ID
  productName: string; //상품명
  productSpec: string; //상품규격
}

interface Props {
  type: string;
  onClickCallback?: (data: CartInfo[]) => void;
}

//구매 상품
export default function OrderProductPopupContent(props: Props) {
  const { type, onClickCallback } = props;

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
          <p>{type}상품 선택</p>
        </div>

        {/* 구매이력 선택 */}
        <div className="sample-table-wrap mt-16">
          <div className="flex column">
            <div className="story-list">
              <span>구매이력 선택</span>
              <SelectBox
                value=""
                options={[
                  {
                    value: '',
                    name: '주문일: 2024년 12월 12일 / 주문번호: NTHack142306012 주문건',
                  },
                ]}
                onChangeCallback={() => {}}
              />
            </div>

            <div className="sample-table ty2">
              <table>
                <thead>
                  <tr>
                    <th>상품명</th>
                    <th>규격</th>
                    <th>출고수량</th>
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
                          <p className="text-g">1개</p>
                        </td>

                        <td>
                          {/* disabled */}
                          <ButtonBox
                            className="btn ty2 bd-ty2"
                            label="선택"
                            onClickCallback={() =>
                              handleClickCartAdd(item, idx)
                            }
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

          <div className="sample-cart">
            <div className="title">
              <p>선택한 상품</p>
              <ButtonBox
                label="전체삭제"
                onClickCallback={() => handleClickCartDelete('All')}
              />
            </div>

            <div className="list scroll">
              {cartList.length === 0 ? (
                <div className="no-data">선택한 상품이 없습니다.</div>
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
              label={`${type}상품 선택`}
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
