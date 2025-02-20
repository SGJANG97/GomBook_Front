import { useState } from 'react';

import { PageInfo } from 'src/components/form/grid/GridTableBox';
import { ReqBoardReqType } from 'src/utils/codeDefines';
import { handleIsMobile } from 'src/utils/mobile';

import ButtonBox from 'src/components/form/ButtonBox';
import InputBox from 'src/components/form/InputBox';
import PaginationBox from 'src/components/form/PaginationBox';
import SelectBox from 'src/components/form/SelectBox';

export default function FaqContent() {
  //FN: mobile 여부
  const isMobile = handleIsMobile();

  //faq list
  const [faqList, setFaqList] = useState<any[]>([]);

  //페이징
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalCount: 0,
    pageNo: 1,
    pageSize: 20,
  });

  //FN: 페이징
  const handleClickPagination = (curPage: number) => {
    setPageInfo({
      ...pageInfo,
      pageNo: curPage,
    });
  };

  return (
    <div className="faq-wrap">
      <div className="inner-content">
        <div className="sub-title-box ty2">
          <h2 className="title-t ty2">FAQ</h2>
        </div>
        {/* <!-- PC 탭--> */}
        <div className="tab-area show-pc">
          <div className="tab-box">
            {/* <!-- 1depth --> */}
            <ul className="tab-group-lists ty1">
              {/* <!-- 활성화시 active 클래스 추가 --> */}
              <li className="tab-menu">
                <a href="">TOP 10</a>
              </li>
              <li className="tab-menu">
                <a href="" className="active">
                  대여
                </a>
              </li>
              <li className="tab-menu">
                <a href="">반납</a>
              </li>
              <li className="tab-menu">
                <a href="">기타</a>
              </li>
            </ul>
            {/* <!-- 2depth 없을시 삭제 --> */}
            <ul className="tab-group-lists ty2">
              <li className="tab-menu">
                <a href="" className="active">
                  전체
                </a>
              </li>
              <li className="tab-menu">
                <a href="">대여 관련</a>
              </li>
              <li className="tab-menu">
                <a href="">예약 및 연장 관련</a>
              </li>
              <li className="tab-menu">
                <a href="">연체 및 분실 관련</a>
              </li>
            </ul>
          </div>

          <div className="search-box">
            <div className="input">
              <InputBox
                type="text"
                className="t-inp"
                placeholder="검색어를 입력해주세요"
                value=""
                onChangeCallback={() => {}}
              />
              <ButtonBox
                className="btn icon search"
                label="검색하기"
                onClickCallback={() => {}}
              />
            </div>
          </div>
        </div>

        <div className="tab-area show-mo">
          {/* <!-- MO 셀렉트--> */}
          <div className="search-box">
            <div className="input">
              <InputBox
                type="text"
                className="t-inp"
                placeholder="검색어를 입력해주세요"
                value=""
                onChangeCallback={() => {}}
              />
              <ButtonBox
                className="btn icon search"
                label="검색하기"
                onClickCallback={() => {}}
              />
            </div>
          </div>
          <div className="flex">
            <div className="selectbox">
              <SelectBox
                value=""
                options={
                  ReqBoardReqType.getOptions()
                  //   [
                  //   {value: '', name: 'TOP 10'},
                  //   {value: '', name: '주문'},
                  //   {value: '', name: '배송'},
                  //   {value: '', name: '반품'},
                  //   {value: '', name: '샘플'},
                  //   {value: '', name: '기타'},
                  // ]
                }
                onChangeCallback={() => {}}
              />
            </div>
            <div className="selectbox">
              <select name="" id="">
                <option value="">-</option>
              </select>
            </div>
          </div>
        </div>

        {faqList.length > 0 ? (
          <ul className="faq-lists-area">
            {faqList.map((item, idx) => (
              <li className="open" key={idx}>
                {/* <!-- 펼침시 open 클래스 추가 --> */}
                <div className="tit">
                  <span className="cate">주문/배송/출고</span>
                  <p>주문변경을 하면 기존 주문은 삭제되나요?</p>
                  <button type="button"></button>
                </div>
                <div className="con">
                  <p>비밀번호 변경은 아래를 참고해 주세요.</p>
                  <ul>
                    {/* <li>PC일 경우 우측 상단의 [회원정보 > 정보수정하기]에서 변경 가능합니다.</li> */}
                    <li>모바일 경우 [설정]에서 변경 가능합니다.</li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-data">
            <strong>$입력한 검색어$</strong>
            <p>
              일치하는 검색결과가 없습니다.
              <br />
              검색어가 정확한지 확인해 주세요.
            </p>

            <ButtonBox
              className="btn ty1 bd-ty1"
              label="문의하기"
              onClickCallback={() => {}}
            />
          </div>
        )}

        {/* <!-- PC에서만 사용 --> */}
        {!isMobile && (
          <PaginationBox
            totalCount={
              pageInfo?.totalCount === 0 ? 1 : pageInfo?.totalCount || 1
            } // 데이터의 총 개수
            itemCountPerPage={pageInfo?.pageSize || 20} // 페이지 당 보여줄 데이터 개수
            pageCount={pageInfo?.pageSize || 20} // 보여줄 페이지 개수
            currentPage={pageInfo?.pageNo || 1} // 현재 페이지
            onClickCallBack={handleClickPagination}
          />
        )}
        <div className="cs-box">
          <strong>
            대표전화 <em>1655-6227</em>
          </strong>
          <p>
            월~금요일 09:00 ~ 17:00
            <span className="show-pc">|</span>
            <br className="show-mo" />
            주말, 공휴일 휴무
          </p>
          <ButtonBox
            className="btn ty1 c-black"
            label="문의하기"
            onClickCallback={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
