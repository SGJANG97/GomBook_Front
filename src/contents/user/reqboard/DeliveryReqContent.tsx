import { useState } from 'react';
import parse from 'html-react-parser';

import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { handleIsMobile } from 'src/utils/mobile';
import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';

import ButtonBox from 'src/components/form/ButtonBox';
import TextareaBox from 'src/components/form/TextareaBox';
import FileBoxBase64 from 'src/components/form/FileBoxBase64';
import BookItemContent from 'src/components/book/BookItemContent';
import OrderProductPopupContent from 'src/contents/user/reqboard/modal/OrderProductPopupContent';
import SatisfactionContent from 'src/components/satisfaction/SatisfactionContent';

interface Props {
  id?: string;
}

//배송
export default function DeliveryReqContent(props: Props) {
  const { id } = props;
  //등록 여부
  const isCreate = !Boolean(id);

  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  //FN: mobile 여부
  const isMobile = handleIsMobile();

  const [product, setProduct] = useState<any | null>(null);

  //답변
  const [comment, setComment] = useState<string>(
    '<p>[2024-11-10] 샘플 신청건중 7개의 상품이 발송처리 되었습니다. 배송조회는 주문내역 페이지에서 확인 가능합니다.</p><p>[2024-11-10] 샘플 신청건중 7개의 상품이 발송처리 되었습니다. 배송조회는 주문내역 페이지에서 확인 가능합니다.</p>'
  );

  //첨부파일
  const [newPcFiles, setNewPcFiles] = useState<FileInfoBase64[]>([]);
  const [oldPcFiles, setoldPcFiles] = useState<FileInfoBase64[]>([]);

  //FN: 상품선택
  const handleClickProductSelected = () => {
    userModalActions.setUserModal({
      type: 'popup',
      modalOpen: true,
      headerTitle: isMobile ? '상품선택' : '상품선택',
      headerTitleClassName: 'ta-c t-none',
      content: (
        <OrderProductPopupContent
          type="배송"
          onClickCallback={(list) => handleClickProductList(list)}
        />
      ),
    });
  };

  //FN: 신청 상품 목록
  const handleClickProductList = (addList: any) => {
    setProduct(addList);
  };

  //FN: 신청 상품 삭제
  const handleClickProductDelete = () => {
    setProduct(null);
  };

  return (
    <>
      <tr className="row">
        <th className="reqired">주문이력</th>
        <td>
          <ButtonBox
            className="btns"
            label="주문이력찾기"
            onClickCallback={handleClickProductSelected}
          />
          <p className="t-text ty2 c-black inline-block show-pc">
            구매이력 2개월내 상품에 한하여 배송문의이 가능합니다.
          </p>
          <p className="t-text ty2 c-red">주문이력을 선택하세요.</p>

          <div className="cart-item-list bd-none">
            <ul className="ty1">
              <li>
                {/* <!-- 등록되었을때는 date에 ing 클래스 붙이고 찾기 버튼은 삭제하시면됩니다 --> */}
                <div className="date">
                  주문일: 2024년 12월 12일 / 주문번호: NTHack142306012
                </div>

                <div className="item">
                  {/* 상품 */}
                  <BookItemContent />

                  <ButtonBox
                    className="btn ty2 bd-ty2 del"
                    label="삭제"
                    onClickCallback={handleClickProductDelete}
                  />
                  {/* <p className="t-text ty2 c-red">문의 내용을 입력하세요.</p> */}
                </div>

                <div className="tables">
                  <table>
                    <tbody>
                      <tr className="row bd">
                        <th className="reqired">수량</th>
                        <td>
                          <div className="flex">
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
                            <p className="t-text ty2 c-red inline-block show-pc">
                              구매하신 수량을 초과하였습니다.
                            </p>
                            {/* <!-- <p className="t-text ty2 c-black inline-block fw-600">처리수량:1</p> --> */}
                          </div>
                        </td>
                      </tr>

                      <tr className="row">
                        <th className="reqired">내용</th>
                        <td>
                          <TextareaBox
                            value=""
                            placeholder="[필수] 문의 내용을 입력하세요."
                            onChangeCallback={() => {}}
                          />
                          <p className="t-text ty2 c-red inline-block">
                            문의 내용을 입력하세요.
                          </p>
                        </td>
                      </tr>

                      {isCreate ? (
                        <tr className="bd row">
                          {/* <!-- 등록할때 --> */}
                          <th className="">사진파일</th>
                          <td>
                            <div className="con">
                              <FileBoxBase64
                                accept="image/*"
                                label="사진"
                                newFiles={newPcFiles}
                                fileCount={3}
                                multiple={false}
                                comment="사진파일은 최대 3개까지 업로드 가능합니다."
                                onChangeNewFileCallback={(e) => {
                                  setNewPcFiles(e);
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <tr className="bd row">
                          {/* <!-- 등록후에 --> */}
                          <th className="lh-1">사진파일</th>
                          <td>
                            <div className="con">
                              {oldPcFiles.length > 0 ? (
                                oldPcFiles.map((item, idx) => (
                                  <p key={idx}>{item.fileName}</p>
                                ))
                              ) : (
                                <p>등록된 파일이 없습니다.</p>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </div>
        </td>
      </tr>

      <tr className="bd">
        <th>답변</th>
        <td>
          <div className="cs-result">
            <div className="p-wrap">{parse(comment || '')}</div>
          </div>
        </td>
      </tr>

      <tr className="bd">
        <th className="lh-1">만족도 평가</th>
        <td>
          <SatisfactionContent
            type="user"
            satisfaction={null}
            onChangeCallback={(scoreCnt, oneReview) => {}}
          />
        </td>
      </tr>
    </>
  );
}
