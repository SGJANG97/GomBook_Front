import { useState } from 'react';
import parse from 'html-react-parser';

import TextareaBox from 'src/components/form/TextareaBox';

interface Props {
  id?: string;
}

export default function OrderCancelReqContent(props: Props) {
  const { id } = props;
  //등록 여부
  const isCreate = !Boolean(id);

  //답변
  const [comment, setComment] = useState<string>(
    '<p>[2024-11-10] 샘플 신청건중 7개의 상품이 발송처리 되었습니다. 배송조회는 주문내역 페이지에서 확인 가능합니다.</p><p>[2024-11-10] 샘플 신청건중 7개의 상품이 발송처리 되었습니다. 배송조회는 주문내역 페이지에서 확인 가능합니다.</p>'
  );

  return (
    <>
      <tr>
        <th className="reqired lh-1">내용</th>
        <td>
          <div className="date">
            주문일: 2024년 12월 12일 / 주문번호: NTHack142306012
          </div>
          <TextareaBox placeholder="[필수] 문의 내용을 입력하세요." />
          <p className="t-text ty2 c-red">주문취소 사유를 입력하세요.</p>
        </td>
      </tr>

      {!isCreate && (
        <tr className="bd">
          <th>답변</th>
          <td>
            <div className="cs-result">
              <div className="p-wrap">{parse(comment || '')}</div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
