import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ReqBoardReqType } from 'src/utils/codeDefines';
import { userReqBoardPath } from 'src/routes/path';
import { handleClickPreventDefault } from 'src/utils/commonHandler';

import InputBox from 'src/components/form/InputBox';
import SelectBox from 'src/components/form/SelectBox';
import ButtonBox from 'src/components/form/ButtonBox';
import SampleReqContent from 'src/contents/user/reqboard/SampleReqContent';
import ReturnReqContent from 'src/contents/user/reqboard/ReturnReqContent';
import ProductReqContent from 'src/contents/user/reqboard/ProductReqContent';
import DeliveryReqContent from 'src/contents/user/reqboard/DeliveryReqContent';
import PartnerReqContent from 'src/contents/user/reqboard/PartnerReqContent';
import OtherReqContent from 'src/contents/user/reqboard/OtherReqContent';
import OrderCancelReqContent from 'src/contents/user/reqboard/OrderCancelReqContent';

interface Props {
  id?: string;
}

export default function ReqBoardDetailContent(props: Props) {
  const { id } = props;
  //등록 여부
  const isCreate = !Boolean(id);

  const navigate = useNavigate();
  const { search } = useLocation();

  const requestType = new URLSearchParams(search).get('requestType'); //param 문의유형

  //문의유형
  const [reqBoardType, setReqBoardType] = useState<string>('');
  //문의제목
  const [reqBoardTitle, setReqBoardTitle] = useState<string>('');

  useEffect(() => {
    if (requestType) {
      setReqBoardType(requestType);
    }
  }, [requestType]);

  //FN: 문의유형
  const handleChangeReqBoardType = (e: string) => {
    setReqBoardType(e);
  };
  //FN: 문의제목
  const handleChangeReqBoardTitle = (e: string) => {
    setReqBoardTitle(e);
  };

  //FN: 목록으로
  const handleClickGoList = handleClickPreventDefault(() => {
    navigate(`/${userReqBoardPath}`);
  });

  return (
    <>
      <section className="cs-wrap">
        <article className="inner-content">
          <div className="sub-title-box">
            <h2 className="title-t ty2 show-pc">문의등록</h2>
          </div>
          {/* <!-- input ,select , textarea 에 disabled 넣으면 회색배경에 클릭안됩니다--> */}
          <div className="cs-write">
            <div className="gray-box">
              오후 5시 이후 접수 건은 다음날(평일)
              <br className="show-mo" />
              오전 9시 이후 부터 순차적으로 답변드립니다.
            </div>
            <div className="tables">
              <table>
                <tbody>
                  <tr>
                    <th className="reqired">문의유형</th>
                    <td>
                      <SelectBox
                        value={reqBoardType}
                        options={ReqBoardReqType.getOptions()}
                        onChangeCallback={handleChangeReqBoardType}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="reqired">제목</th>
                    <td>
                      <InputBox
                        value={reqBoardTitle}
                        className="t-inp"
                        placeholder="[필수] 제목을 입력하세요."
                        onChangeCallback={handleChangeReqBoardTitle}
                      />
                    </td>
                  </tr>

                  {/* 샘플신청 */}
                  {reqBoardType.includes(ReqBoardReqType.getCode('SAMPLE')) && (
                    <SampleReqContent id={id} type={reqBoardType} />
                  )}
                  {/* 반품 */}
                  {reqBoardType.includes(ReqBoardReqType.getCode('RETURN')) && (
                    <ReturnReqContent id={id} />
                  )}
                  {/* 제품 */}
                  {reqBoardType.includes(
                    ReqBoardReqType.getCode('PRODUCT')
                  ) && <ProductReqContent id={id} />}
                  {/* 배송 */}
                  {reqBoardType.includes(
                    ReqBoardReqType.getCode('DELIVERY')
                  ) && <DeliveryReqContent id={id} />}
                  {/* 기타 */}
                  {reqBoardType.includes(ReqBoardReqType.getCode('OTHER')) && (
                    <OtherReqContent id={id} />
                  )}
                  {/* 주문취소 */}
                  {reqBoardType.includes(
                    ReqBoardReqType.getCode('ORDERCANCEL')
                  ) && <OrderCancelReqContent id={id} />}
                </tbody>
              </table>
            </div>

            {/* 사업장 정보 변경 요청 */}
            {reqBoardType.includes(ReqBoardReqType.getCode('MEMBER')) && (
              <PartnerReqContent id={id} />
            )}

            {/* 샘플신청 등록시 안내 */}
            {isCreate &&
              reqBoardType.includes(ReqBoardReqType.getCode('SAMPLE')) && (
                <div className="text-g">
                  <p>저희 쉐프스푸드의 식자재에 관심 가져주셔서 감사합니다.</p>
                  <span>
                    1. 샘플 신청해주시면 품목별로 1개씩 무상으로 제공해드립니다.
                  </span>
                  <span>
                    2. 상황에 따라 샘플 제공이 안될 수 있으니 양해 바랍니다.
                  </span>
                  <span>
                    3. 비규격 상품, 고가의 상품, 대형 상품 등은 신청이
                    불가합니다.
                  </span>
                  <span>
                    4. 담당자 접수 후 1주일 내에 배송처로 전달해드립니다.
                  </span>
                  <span>5. 주문했던 상품은 신청할 수 없습니다.</span>
                  <span>
                    6. 샘플 신청했던 상품은 또 샘플 신청할 수 없습니다.
                  </span>
                </div>
              )}

            {isCreate ? (
              <div className="btn-box center ty2">
                <ButtonBox
                  className="btn ty3 bd-ty2"
                  label="취소"
                  onClickCallback={handleClickGoList}
                />

                <ButtonBox className="btn ty3 c-black" label="등록하기" />
              </div>
            ) : (
              <div className="btn-box end ty2">
                <ButtonBox
                  className="btn ty2 bd-ty2"
                  label="목록보기"
                  onClickCallback={handleClickGoList}
                />
                <ButtonBox
                  className="btn ty2 bd-ty2"
                  label="목록"
                  onClickCallback={handleClickGoList}
                />
                <ButtonBox className="btn ty2 bd-ty2" label="삭제" />
                <ButtonBox className="btn ty2 c-black" label="저장" />
              </div>
            )}
          </div>
        </article>
      </section>
    </>
  );
}
