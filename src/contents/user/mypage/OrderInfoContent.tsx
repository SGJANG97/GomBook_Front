export default function OrderInfoContent() {
  return (
    <section className="mypage-wrap">
      <article className="inner-content">
        <div className="sub-title-box">
          <h2 className="title-t ty2">마이페이지</h2>
        </div>
        <ul className="tab-group-list ty2">
          <li className="tab-menu">
            <a href="#">내정보</a>
          </li>
          <li className="tab-menu active">
            <a href="#">주문내역</a>
          </li>
          <li className="tab-menu">
            <a href="#">매입원장</a>
          </li>
          <li className="tab-menu">
            <a href="#">통계</a>
          </li>
        </ul>
        <div className="mypage-sorting-box">
          <div className="select-item ty1">
            {/* <!-- select 선택 전에는 그레이컬러[#888] 클릭시 블랙컬러[#191919]--> */}
            <select name="" id="">
              <option value="">배송처구분 전체</option>
              <option value="">배송처구분 전체</option>
              <option value="">배송처구분 전체</option>
            </select>
            <a href="" className="btn ty4 bd-ty2 download-btn">
              <span>엑셀 다운로드</span>
            </a>
          </div>
          <div className="date-item">
            <button type="button" className="date-btn">
              2024-12-24
            </button>
            <span>-</span>
            <button type="button" className="date-btn">
              2024-12-31
            </button>
            {/* <!-- PC ONLY --> */}
            <div className="state-box show-pc">
              {/* <!-- 선택시 bd-red 클래스 추가 --> */}
              <button type="button" className="btn ty4 bd-red">
                <span>최근1주일</span>
              </button>
              <button type="button" className="btn ty4 bd-ty2">
                <span>최근1개월</span>
              </button>
              <button type="button" className="btn ty4 bd-ty2">
                <span>최근3개월</span>
              </button>
            </div>
            {/* <!-- MO ONLY --> */}
            {/* <!-- select 선택 전에는 그레이컬러[#888] 클릭시 블랙컬러[#191919]--> */}
            <select name="" id="" className="show-mo">
              <option value="">최근1주일</option>
              <option value="">최근1개월</option>
              <option value="">최근3개월</option>
            </select>
          </div>
          <div className="select-item ty2">
            {/* <!-- select 선택 전에는 그레이컬러[#888] 클릭시 블랙컬러[#191919]--> */}
            <select name="" id="">
              <option value="">주문구분 전체</option>
              <option value="">주문구분 전체</option>
            </select>
            {/* <!-- select 선택 전에는 그레이컬러[#888] 클릭시 블랙컬러[#191919]--> */}
            <select name="" id="">
              <option value="">주문상태 전체</option>
              <option value="">주문상태 전체</option>
            </select>
          </div>
          <button type="button" className="btn ty4 c-black check-btn">
            <span>조회</span>
          </button>
        </div>
        {/* <!-- PC ONLY --> */}
        <div className="tbl ty2 ta-c">
          <table>
            <colgroup>
              <col style={{ width: '4.6%' }} />
              <col style={{ width: '17%' }} />
              <col style={{ width: '13.14%' }} />
              <col style={{ width: '8.96%' }} />
              <col style={{ width: '8.96%' }} />
              <col style={{ width: '7.2%' }} />
              <col style={{ width: '10.05%' }} />
              <col style={{ width: '10.05%' }} />
              <col style={{ width: '6.95%' }} />
              <col style={{ width: '6.53%' }} />
              <col style={{ width: '6.53%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>NO.</th>
                <th>배송처명</th>
                <th>주문번호</th>
                <th>주문일자</th>
                <th>출고요청일</th>
                <th>주문품목수</th>
                <th>총 주문금액</th>
                <th>총 출고금액</th>
                <th>정상/반품</th>
                <th>주문상태</th>
                <th>배송유형</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">
                    파스토키친(Pasto Kitchen)화덕피자&파스타광주본점
                  </p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">99,999,999원</td>
                <td>정상</td>
                <td>
                  <p>주문</p>
                  <a href="" className="btn ty5 bd-ty3 mt-6">
                    <span>주문취소</span>
                  </a>
                </td>
                <td>직배송</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">
                    배송처명 2줄 이상 말줄임처리 배송처명 2줄 이상 말줄임처리
                    배송처명 2줄 이상 말줄임처리
                  </p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">0원</td>
                <td>정상</td>
                <td>
                  <p>주문확정</p>
                  <a href="" className="btn ty5 bd-ty3 mt-6">
                    <span>취소요쳥</span>
                  </a>
                </td>
                <td>퀵</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">2호점</p>
                </td>
                {/* <!-- 반품일 경우 c-red 클래스 추가 --> */}
                <td>
                  <a href="" className="underline c-red">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">0원</td>
                <td className="ta-r">0원</td>
                <td>반품</td>
                <td>
                  <p>반품완료</p>
                </td>
                <td>택배</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">1호점</p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">99,999,999원</td>
                <td>정상</td>
                <td>
                  <p>배송중</p>
                </td>
                <td>직배송</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">2호점</p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">99,999,999원</td>
                <td>정상</td>
                <td>
                  <p>배송중</p>
                  <a href="" className="btn ty5 bd-ty3 mt-6">
                    <span>배송조회</span>
                  </a>
                </td>
                <td>직배송</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">2호점</p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">99,999,999원</td>
                <td>정상</td>
                <td>
                  <p>배송완료</p>
                  <a href="" className="btn ty5 bd-ty3 mt-6">
                    <span>배송조회</span>
                  </a>
                </td>
                <td>직배송</td>
              </tr>

              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">
                    파스토키친(Pasto Kitchen)화덕피자&파스타광주본점
                  </p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">99,999,999원</td>
                <td>정상</td>
                <td>
                  <p>주문</p>
                  <a href="" className="btn ty5 bd-ty3 mt-6">
                    <span>주문취소</span>
                  </a>
                </td>
                <td>직배송</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">
                    배송처명 2줄 이상 말줄임처리 배송처명 2줄 이상 말줄임처리
                    배송처명 2줄 이상 말줄임처리
                  </p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">0원</td>
                <td>정상</td>
                <td>
                  <p>주문확정</p>
                  <a href="" className="btn ty5 bd-ty3 mt-6">
                    <span>취소요쳥</span>
                  </a>
                </td>
                <td>퀵</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">2호점</p>
                </td>
                {/* <!-- 반품일 경우 c-red 클래스 추가 --> */}
                <td>
                  <a href="" className="underline c-red">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">0원</td>
                <td className="ta-r">0원</td>
                <td>반품</td>
                <td>
                  <p>반품완료</p>
                </td>
                <td>택배</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">1호점</p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">99,999,999원</td>
                <td>정상</td>
                <td>
                  <p>배송중</p>
                </td>
                <td>직배송</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">2호점</p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">99,999,999원</td>
                <td>정상</td>
                <td>
                  <p>배송중</p>
                  <a href="" className="btn ty5 bd-ty3 mt-6">
                    <span>배송조회</span>
                  </a>
                </td>
                <td>직배송</td>
              </tr>
              <tr>
                <td>00</td>
                <td>
                  <p className="clamp-2 fw-500">2호점</p>
                </td>
                <td>
                  <a href="" className="underline">
                    NTHack072105029
                  </a>
                </td>
                <td>2024-00-00</td>
                <td>2024-00-00</td>
                <td>99</td>
                <td className="ta-r">99,999,999원</td>
                <td className="ta-r">99,999,999원</td>
                <td>정상</td>
                <td>
                  <p>배송완료</p>
                  <a href="" className="btn ty5 bd-ty3 mt-6">
                    <span>배송조회</span>
                  </a>
                </td>
                <td>직배송</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- PC에서만 사용 --> */}
        <div className="pagination show-pc">
          <a href="" className="left">
            이전페이지
          </a>
          <ul>
            <li className="active">
              <a href="">1</a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
            <li>
              <a href="">4</a>
            </li>
            <li>
              <a href="">5</a>
            </li>
            <li>
              <a href="">6</a>
            </li>
            <li>
              <a href="">7</a>
            </li>
            <li>
              <a href="">8</a>
            </li>
            <li>
              <a href="">9</a>
            </li>
            <li>
              <a href="">10</a>
            </li>
          </ul>
          <a href="" className="right">
            다음페이지
          </a>
        </div>
        {/* <!-- PC ONLY--> */}
      </article>
    </section>
  );
}
