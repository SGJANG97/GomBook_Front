import { useState } from 'react';
import parse from 'html-react-parser';

import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { handleIsMobile } from 'src/utils/mobile';

import ButtonBox from 'src/components/form/ButtonBox';
import InputBox from 'src/components/form/InputBox';
import RadioBox from 'src/components/form/RadioBox';
import SelectBox from 'src/components/form/SelectBox';
import TextareaBox from 'src/components/form/TextareaBox';
import FileBoxBase64 from 'src/components/form/FileBoxBase64';
import BookItemContent from 'src/components/book/BookItemContent';
import OrderProductPopupContent from 'src/contents/user/reqboard/modal/OrderProductPopupContent';
import SatisfactionContent from 'src/components/satisfaction/SatisfactionContent';

interface Props {
  id?: string;
}

//반품
export default function ReturnReqContent(props: Props) {
  const { id } = props;
  //등록 여부
  const isCreate = !Boolean(id);

  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  //FN: mobile 여부
  const isMobile = handleIsMobile();

  const [productList, setProductList] = useState<any[]>([]);

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
          type="반품"
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
    <>
      <tr className="row">
        <th className="reqired">구매이력</th>
        <td>
          <ButtonBox
            className="btns"
            label="구매이력찾기"
            onClickCallback={handleClickProductSelected}
          />

          <p className="t-text ty2 c-black inline-block show-pc">
            구매이력 2개월내 상품에 한하여 반품신청이 가능합니다.
          </p>

          <p className="t-text ty2 c-red">구매이력을 선택 하세요.</p>

          <div className="cart-item-list bd-none">
            {/* <!-- <div className="cart-item-list"> --> */}
            <ul className="ty1">
              <li>
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
                </div>
                <div className="return-text">
                  반품진행을 위한 정보를 입력해주세요. <span>*</span>필수입력
                  항목
                </div>
                <div className="tables">
                  <table>
                    <tbody>
                      <tr className="row">
                        <th className="reqired">신청수량</th>
                        <td>
                          <div className="flex">
                            <div className="item-qty">
                              <InputBox
                                className="item_qty_count"
                                type="tel"
                                value="1"
                                onChangeCallback={() => {}}
                              />
                              <ButtonBox
                                className="btn icon minus"
                                label="상품수량 빼기"
                                onClickCallback={() => {}}
                              />
                              <ButtonBox
                                className="btn icon plus"
                                label="상품수량 더하기"
                                onClickCallback={() => {}}
                              />
                            </div>
                            <p className="t-text ty2 c-red inline-block show-pc">
                              구매하신 수량을 초과하였습니다.
                            </p>
                            <p className="t-text ty2 c-black inline-block fw-600">
                              처리수량:1
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="row">
                        <th className="reqired">처리방법</th>
                        <td>
                          <div className="flex">
                            {/* <!-- pc는 라디오버튼 --> */}
                            <div className="radio-item show-pc">
                              <RadioBox
                                options={[
                                  { value: '1', name: '반품' },
                                  { value: '2', name: '재배송' },
                                ]}
                              />
                            </div>
                            {/* <!-- 모바일은 셀렉트박스 --> */}
                            <SelectBox
                              value=""
                              className={'show-mo'}
                              options={[
                                { value: '1', name: '반품2' },
                                { value: '2', name: '재배송2' },
                              ]}
                              onChangeCallback={() => {}}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="row ">
                        <th className="reqired">소비기한</th>
                        <td>
                          <InputBox
                            value=""
                            className="t-inp"
                            placeholder="년도월일을 숫자만 기재해주세요. 예시)20300131"
                            onChangeCallback={() => {}}
                          />
                          <p className="t-text ty2 c-red">
                            소비기한을 입력하세요.
                          </p>
                        </td>
                      </tr>
                      <tr className="row ">
                        <th className="reqired">반품사유</th>
                        <td>
                          <SelectBox
                            value=""
                            options={[{ value: '1', name: '반품사유' }]}
                            onChangeCallback={() => {}}
                          />
                          <p className="t-text ty2 c-red">
                            소비기한을 입력하세요.
                          </p>
                        </td>
                      </tr>
                      <tr className="row ">
                        <th className="">LOT 번호</th>
                        <td>
                          <InputBox
                            className="t-inp"
                            value=""
                            placeholder=""
                            onChangeCallback={() => {}}
                          />
                        </td>
                      </tr>
                      <tr className="row">
                        <th className="">비고</th>
                        <td>
                          <TextareaBox
                            value=""
                            placeholder=""
                            onChangeCallback={() => {}}
                          />
                        </td>
                      </tr>

                      {isCreate ? (
                        <tr className="row">
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

      {!isCreate && (
        <>
          <tr className="bd">
            <th>답변</th>
            <td>
              <div className="cs-result">
                <div className="p-wrap">
                  {/* 
                    * API 데이터가 예시와 같아야 합니다.
                    * 예시: 
                      <p>[2025-02-05 15:30] 관리자(ID)<br/>답변내용</p>
                  */}
                  {/* <p>
                    [{dateStringFormat('2025-02-05 15:30', 'YYYY-MM-DD HH:mm')}]
                    관리자(ID)
                  </p> */}
                  {parse(comment || '')}
                </div>
              </div>
            </td>
          </tr>

          {/* 처리완료 상태에서 노출 */}
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
      )}
    </>
  );
}
