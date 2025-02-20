import { useState } from 'react';
import parse from 'html-react-parser';

import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';

import FileBoxBase64 from 'src/components/form/FileBoxBase64';

interface Props {
  id?: string;
}

export default function PartnerReqContent(props: Props) {
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
      <div className="business-table">
        <table>
          <tbody>
            <tr className="w100">
              <th>거래처명</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$거래처명$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>사업자등록번호</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$사업자등록번호$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>대표자명</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$대표자명$]"
                />
              </td>
            </tr>
            <tr className="w100">
              <th>사업자 소재지</th>
              <td>
                <textarea
                  name=""
                  id=""
                  placeholder="[$사업자등록번호$]&#13;&#10;&#13;&#10;[$본사 기본주소$]&#13;&#10;&#13;&#10;[$본사 상세주소$]"
                ></textarea>
              </td>
            </tr>
            <tr className="w50">
              <th>전화번호</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$본사 전화번호$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>팩스번호</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$본사 팩스번호$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>업태</th>
              <td>
                <input type="text" className="t-inp" placeholder="[$업태$]" />
              </td>
            </tr>
            <tr className="w50">
              <th>업종</th>
              <td>
                <input type="text" className="t-inp" placeholder="[$업종$]" />
              </td>
            </tr>
            <tr className="w50">
              <th>담당자 이메일</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$담당자 이메일$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>담당자 연락처</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$담당자 연락처$]"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="business-table">
        <table>
          <tbody>
            <tr className="w50">
              <th>배송처명</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$배송처명$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>배송유형</th>
              <td>[$직배송/택배 구분 노출$]</td>
            </tr>
            <tr className="w100">
              <th>배송지 주소</th>
              <td>
                <textarea
                  name=""
                  id=""
                  placeholder="[$사업자등록번호$]&#13;&#10;&#13;&#10;[$본사 기본주소$]&#13;&#10;&#13;&#10;[$본사 상세주소$]"
                ></textarea>
              </td>
            </tr>
            <tr className="w50">
              <th>발주 담당자</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$발주 담당자$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>배송 담당자</th>
              <td>[$김포15코스 택배$]</td>
            </tr>
            <tr className="w50">
              <th>발주 담당자 연락처</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$발주 담당자 연락처$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>배송 담당자 연락처</th>
              <td>[$배송 담당자 연락처$]</td>
            </tr>
            <tr className="w50">
              <th>발주 담당자 이메일</th>
              <td>
                <input
                  type="text"
                  className="t-inp"
                  placeholder="[$발주 담당자 이메일$]"
                />
              </td>
            </tr>
            <tr className="w50">
              <th>배송요일</th>
              <td>[$배송요일$]</td>
            </tr>
            <tr className="w50">
              <th>담당 영업사원</th>
              <td>[$거래처 담당 영업사원명$]</td>
            </tr>
            <tr className="w50">
              <th>영업사원 전화번호</th>
              <td>[$거래처 담당자 핸드폰 번호$]</td>
            </tr>
            <tr className="w50">
              <th>영업사원 이메일</th>
              <td>[$거래처 담당자 이메일$]</td>
            </tr>
            <tr className="w50">
              <th>가상계좌번호</th>
              <td>[$은행명/가상계좌번호$]</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tables pt-0">
        <table>
          <tbody>
            {isCreate ? (
              <tr className="bd row">
                {/* <!-- 등록할때 --> */}
                <th className="">첨부파일</th>
                <td>
                  <div className="con">
                    <FileBoxBase64
                      accept="image/*"
                      label="사진"
                      newFiles={newPcFiles}
                      fileCount={3}
                      multiple={false}
                      comment={
                        <>
                          ※사업자 정보 변경 요청 시 변경 된 사업자등록사본을
                          보내주셔야 합니다.
                          <br />
                          첨부파일은 최대 3개까지 업로드 가능합나다.
                        </>
                      }
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
                <th className="lh-1">첨부파일</th>
                <td>
                  <div className="con">
                    <p>첨부파일명.JPG</p>
                    <p>첨부파일명.JPG</p>
                  </div>
                </td>
              </tr>
            )}
            <tr className="bd">
              <th>답변</th>
              <td>
                <div className="cs-result">
                  <div className="p-wrap">
                    {parse(comment || '')}
                    {/* <p>
                      [2024-11-10] 샘플 신청건중 7개의 상품이 발송처리
                      되었습니다. 배송조회는 주문내역 페이지에서 확인 가능합니다
                    </p>
                    <p>
                      [2024-11-10] 샘플 신청건중 7개의 상품이 발송처리
                      되었습니다. 배송조회는 주문내역 페이지에서 확인 가능합니다
                    </p> */}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
