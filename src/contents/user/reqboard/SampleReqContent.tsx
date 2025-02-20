import { useState } from 'react';

import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { handleIsMobile } from 'src/utils/mobile';

import ButtonBox from 'src/components/form/ButtonBox';
import SamplePopupContent from 'src/contents/user/reqboard/modal/SamplePopupContent';
import BookItemContent from 'src/components/book/BookItemContent';
import TextareaBox from 'src/components/form/TextareaBox';

interface Props {
  id?: string;
  type: string;
}

//샘플
export default function SampleReqContent(props: Props) {
  const { type, id } = props;
  //등록 여부
  const isCreate = !Boolean(id);

  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  //FN: mobile 여부
  const isMobile = handleIsMobile();

  const [productList, setProductList] = useState<any[]>([]);

  //FN: 상품선택
  const handleClickProductSelected = () => {
    userModalActions.setUserModal({
      type: 'popup',
      modalOpen: true,
      headerTitle: isMobile ? '상품선택' : '상품선택',
      headerTitleClassName: 'ta-c t-none',
      content: (
        <SamplePopupContent
          onClickCallback={(list) => handleClickProductList(list)}
        />
      ),
    });
  };

  //FN: 신청 상품 목록
  const handleClickProductList = (addList: any[]) => {
    setProductList([...productList, ...addList]);
  };

  //FN: 신청 상품 삭제
  const handleClickProductDelete = (idx: number) => {
    setProductList(productList.filter((filter) => filter.idx !== idx));
  };

  return (
    <tr className="row">
      <th className="reqired">상품찾기</th>
      <td>
        <ButtonBox
          className="btns"
          label="상품찾기"
          onClickCallback={handleClickProductSelected}
        />
        <p className="t-text ty2 c-red">상품을 선택 하세요.</p>

        <div className="cart-item-list">
          <table>
            <tbody>
              {productList.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    {/* 상품 */}
                    <BookItemContent />
                  </td>
                  <td>
                    <TextareaBox
                      className="mt16"
                      value=""
                      placeholder="※ 필수입력 - 샘플 신청 사유를 입력해 주세요."
                      onChangeCallback={() => {}}
                    />
                    <p className="t-text ty2 c-red">
                      샘플 신청 사유를 입력해 주세요.
                    </p>
                  </td>
                  <td>
                    <ButtonBox
                      className="btn ty2 bd-ty2 del"
                      label="삭제"
                      onClickCallback={() => handleClickProductDelete(item.idx)}
                    />
                    <ButtonBox className="btn ty2 bd-ty2" label="확정" />
                    <ButtonBox className="btn ty2 c-red" label="불가" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
}
