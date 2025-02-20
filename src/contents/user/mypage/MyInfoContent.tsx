export default function MyInfoContent() {
  return (
    <section className="mypage-wrap">
      <article className="inner-content">
        <div className="sub-title-box">
          <h2 className="title-t ty2">마이페이지</h2>
        </div>
        <ul className="tab-group-list ty2">
          <li className="tab-menu active">
            <a href="#">내정보</a>
          </li>
          <li className="tab-menu">
            <a href="#">주문내역</a>
          </li>
          <li className="tab-menu">
            <a href="#">매입원장</a>
          </li>
          <li className="tab-menu">
            <a href="#">통계</a>
          </li>
        </ul>
        <div className="div-tbl">
          <div className="div-tbl-tr">
            <div className="div-tbl-th">거래처명</div>
            <div className="div-tbl-td">거래처명</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">사업자등록번호</div>
            <div className="div-tbl-td">[$사업자등록번호$]</div>
            <div className="div-tbl-th">대표자명</div>
            <div className="div-tbl-td">[$대표자명$]</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">사업자 소재지</div>
            <div className="div-tbl-td">
              [$우편번호 5자리$]
              <br />
              [$본사 기본주소$]
              <br />
              [$본사 상세주소$]
            </div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">전화번호</div>
            <div className="div-tbl-td">[$본사 전화번호$]</div>
            <div className="div-tbl-th">팩스번호</div>
            <div className="div-tbl-td">[$본사 팩스번호$]</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">업태</div>
            <div className="div-tbl-td">[$업태$]</div>
            <div className="div-tbl-th">업종</div>
            <div className="div-tbl-td">[$업종$]</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">담당자 이메일</div>
            <div className="div-tbl-td">[$담당자 이메일$]</div>
            <div className="div-tbl-th">담당자 연락처</div>
            <div className="div-tbl-td">[$담당자 연락처$]</div>
          </div>
        </div>
        <div className="div-tbl">
          <div className="div-tbl-tr">
            <div className="div-tbl-th">배송처명</div>
            <div className="div-tbl-td">[$배송처명$]</div>
            <div className="div-tbl-th">배송유형</div>
            <div className="div-tbl-td">[$배송유형$]</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">배송지 주소</div>
            <div className="div-tbl-td">
              [$우편번호 5자리$]
              <br />
              [$본사 기본주소$]
              <br />
              [$본사 상세주소$]
            </div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">발주 담당자</div>
            <div className="div-tbl-td">[$발주 담당자명$]</div>
            <div className="div-tbl-th">배송 담당자</div>
            <div className="div-tbl-td">[$배송 담당자명$]</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">발주 담당자 연락처</div>
            <div className="div-tbl-td">[$발주 담당자 연락처$]</div>
            <div className="div-tbl-th">배송 담당자</div>
            <div className="div-tbl-td">[$배송 담당자명$]</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">발주 담당자 이메일</div>
            <div className="div-tbl-td">[$발주 담당자 이메일$]</div>
            <div className="div-tbl-th">배송요일</div>
            <div className="div-tbl-td">[$배송요일$]</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">담당 영업사원</div>
            <div className="div-tbl-td">[$거래처 담당 영업사원명$]</div>
            <div className="div-tbl-th">영업사원 전화번호</div>
            <div className="div-tbl-td">[$거래처 담당자 핸드폰번호$]</div>
          </div>
          <div className="div-tbl-tr">
            <div className="div-tbl-th">영업사원 이메일</div>
            <div className="div-tbl-td">[$거래처 담당자 이메일$]</div>
            <div className="div-tbl-th">가상계좌번호</div>
            <div className="div-tbl-td">[$은행명/가상계좌번호$]</div>
          </div>
        </div>
        {/* <!-- 모비일일때 스크롤시 버튼 고정 fixed 클래스 추가--> */}
        {/* TODO */}
        <div className="btn-box fix-btn-box center ty2">
          <a href="" className="btn ty3 bd-ty2">
            <span>정보 변경 요청</span>
          </a>
          <a href="" className="btn ty3 c-black">
            <span>비밀번호 변경</span>
          </a>
        </div>
      </article>
    </section>
  );
}
