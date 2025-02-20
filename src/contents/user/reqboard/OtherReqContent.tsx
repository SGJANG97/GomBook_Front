import { useState } from 'react';
import parse from 'html-react-parser';

import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';

import FileBoxBase64 from 'src/components/form/FileBoxBase64';
import SatisfactionContent from 'src/components/satisfaction/SatisfactionContent';

interface Props {
  id?: string;
}

export default function OtherReqContent(props: Props) {
  const { id } = props;
  //등록 여부
  const isCreate = !Boolean(id);

  //첨부파일
  const [newPcFiles, setNewPcFiles] = useState<FileInfoBase64[]>([]);
  const [oldPcFiles, setoldPcFiles] = useState<FileInfoBase64[]>([]);

  //답변
  const [comment, setComment] = useState<string>(
    '<p>[2024-11-10] 샘플 신청건중 7개의 상품이 발송처리 되었습니다. 배송조회는 주문내역 페이지에서 확인 가능합니다.</p><p>[2024-11-10] 샘플 신청건중 7개의 상품이 발송처리 되었습니다. 배송조회는 주문내역 페이지에서 확인 가능합니다.</p>'
  );

  return (
    <>
      <tr>
        <th className="reqired">내용</th>
        <td>
          <textarea
            name=""
            id=""
            placeholder="[필수] 문의 내용을 입력하세요."
          ></textarea>
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
