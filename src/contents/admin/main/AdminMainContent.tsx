import AdminButtonBox from 'src/components/form/admin/AdminButtonBox';

export default function AdminMainContent() {
  return (
    <>
      <div className="content-head">
        <h2 className="lt-title-type1">주요 현황</h2>
      </div>
      <div className="lt-section home-area">
        <h3 className="lt-title-type2">출고 현황</h3>
        <div className="flex f-wrap">
          <div className="bg-box">
            <p className="fw-6">
              금일 출고 건 중 결품 발생
              <span className="c-red">3</span>
            </p>
          </div>
          <div className="date-summary">
            <div className="btn-area">
              {/* <!-- 클릭시 active 클래스 추가 --> */}
              <AdminButtonBox label="12.02 (월)" className="type1 active" />
              <AdminButtonBox label="12.03 (화)" className="type1" />
              <AdminButtonBox label="12.04 (수)" className="type1" />
              <AdminButtonBox label="12.05 (목)" className="type1" />
              <AdminButtonBox label="12.06 (금)" className="type1" />
            </div>
            <div className="table type1">
              <table>
                <thead>
                  <tr>
                    <th className="fix">배송유형</th>
                    <th>주문</th>
                    <th>주문확정</th>
                    <th>배송중</th>
                    <th>배송완료</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fix">직배송</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td className="fix">택배</td>
                    <td>100</td>
                    <td>50</td>
                    <td>10</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td className="fix">방문수령</td>
                    <td>100</td>
                    <td>100</td>
                    <td>***</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td className="fix">퀵</td>
                    <td>*,***</td>
                    <td>***</td>
                    <td>**</td>
                    <td>*,***</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="lt-section home-area">
        <div className="flex f-wrap">
          <div className="admin-table-area">
            <h3 className="lt-title-type2">특별관리 품목 현황</h3>
            <div className="table type2">
              <table>
                <tbody>
                  <tr>
                    <th>주문 급상승한 제품</th>
                    <td className="ta-r">30</td>
                  </tr>
                  <tr>
                    <th>품절처리한 제품</th>
                    <td className="ta-r">100</td>
                  </tr>
                  <tr>
                    <th>실제 품절된 제품</th>
                    <td className="ta-r">50</td>
                  </tr>
                  <tr>
                    <th>프로모션으로 할인건 제품</th>
                    <td className="ta-r">30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="admin-table-area">
            <h3 className="lt-title-type2">거래처 현황</h3>
            <div className="table type2">
              <table>
                <tbody>
                  <tr>
                    <th>금일 첫 주문 거래처</th>
                    <td className="ta-r">30</td>
                  </tr>
                  <tr>
                    <th>금일 신규 거래요청</th>
                    <td className="ta-r">100</td>
                  </tr>
                  <tr>
                    <th>월평균 200만원 이상 거래처</th>
                    <td className="ta-r">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="admin-table-area">
            <h3 className="lt-title-type2">처리되지 않은 문의 현황</h3>
            <div className="table type2">
              <table>
                <tbody>
                  <tr>
                    <th>배송문의</th>
                    <td className="ta-r">30</td>
                  </tr>
                  <tr>
                    <th>제품문의</th>
                    <td className="ta-r">100</td>
                  </tr>
                  <tr>
                    <th>기타문의</th>
                    <td className="ta-r">50</td>
                  </tr>
                  <tr>
                    <th>거래처 정보 변경요청</th>
                    <td className="ta-r">50</td>
                  </tr>
                  <tr>
                    <th>샘플신청</th>
                    <td className="ta-r">50</td>
                  </tr>
                  <tr>
                    <th>반품신청</th>
                    <td className="ta-r">30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
