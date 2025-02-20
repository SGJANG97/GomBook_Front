import { useState } from 'react';
import parse from 'html-react-parser';

import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { handleIsMobile } from 'src/utils/mobile';

import ButtonBox from 'src/components/form/ButtonBox';
import TextareaBox from 'src/components/form/TextareaBox';
import BookItemContent from 'src/components/book/BookItemContent';
import SatisfactionContent from 'src/components/satisfaction/SatisfactionContent';
import FileBoxBase64 from 'src/components/form/FileBoxBase64';
import ProductPopupContent from 'src/contents/user/reqboard/modal/ProductPopupContent';

interface Props {
  id?: string;
}

//상품(제품)
export default function ProductReqContent(props: Props) {
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
        <ProductPopupContent
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
        <th className="reqired">상품찾기</th>
        <td>
          <ButtonBox
            className="btns"
            label="상품찾기"
            onClickCallback={handleClickProductSelected}
          />

          <p className="t-text ty2 c-red">상품을 선택 하세요.</p>
          <div className="cart-item-list bd-none">
            <ul className="ty1">
              <li>
                <div className="item">
                  {/* 상품 */}
                  <BookItemContent />

                  <ButtonBox
                    className="btn ty2 bd-ty2 del"
                    label="삭제"
                    onClickCallback={handleClickProductDelete}
                  />

                  {/* 모바일 내용 */}
                  <TextareaBox
                    className="show-mo"
                    value=""
                    placeholder="[필수] 문의 내용을 입력하세요."
                    onChangeCallback={() => {}}
                  />
                  {/* <p className="t-text ty2 c-red">문의 내용을 입력하세요.</p> */}
                </div>
              </li>
            </ul>
          </div>
        </td>
      </tr>

      <tr className="bd show-pc">
        <th className="reqired">내용</th>
        <td>
          <TextareaBox
            value=""
            placeholder="[필수] 문의 내용을 입력하세요."
            onChangeCallback={() => {}}
          />
          <p className="t-text ty2 c-red">문의 내용을 입력하세요.</p>
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
        <>
          {/* <!-- 등록후에 --> */}
          <tr className="bd row">
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
      )}
    </>
  );
}
