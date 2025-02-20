import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { defaultInitialPageModel } from 'src/models/page.model';
import { DispYnType } from 'src/utils/codeDefines';
import { dateStringFormat } from 'src/utils/date';
import { ExhibitionReqSearchParams } from 'src/models/exhibition/ExhibitionReqSearchParams';

import BodyTitleBox from 'src/components/form/admin/BodyTitleBox';
import SearchBox from 'src/components/form/admin/SearchBox';

export default function AdminProductContent() {
  // 기획전 목록
  const [exhibitionList, setExhibitionList] = useState<null>();
  // 기획전 검색
  const [searchParams, setSearchParams] = useState<ExhibitionReqSearchParams>({
    ...defaultInitialPageModel,
    xbTitle: null, //기획전타이틀
    xbDispYn: null, //노출상태
    xbDispDt: dayjs().format('YYYY-MM-DD'), //노출일자
    createStartDt: dayjs().startOf('month').format('YYYY-MM-DD'), //등록일 start
    createEndDt: dayjs().format('YYYY-MM-DD'), //등록일 end
  });
  //FN: 현재 페이지 change
  const handleChangeCurrentPage = (curPage: number) => {
    setSearchParams({
      ...searchParams,
      pageNo: curPage,
    });
  };
  useEffect(() => {
    // API 호출: 조회 ==================================//
    handleClickSearch();
  }, [searchParams?.pageNo]);

  //FN: 검색
  const handleClickSearch = async () => {
    // API 호출: 조회 ==================================//
    // let result: ExhibitionList = await apiCall.adminApiCall(
    //   'GET',
    //   apiGetAdminExhibitionList(),
    //   searchParams
    // );
    // if (result) {
    //   //목록 저장
    //   setExhibitionList(result);
    // }
  };
  return (
    <>
      {/* title */}
      <BodyTitleBox pcTitle="상품목록" />

      <section className="lt-section">
        <SearchBox
          title="검색 조건"
          items={[
            {
              itemType: 'input',
              label: '기획전 타이틀',
              onChangeCallBack: (e) => {
                setSearchParams({
                  ...searchParams,
                  xbTitle: e === '' ? null : e,
                });
              },
            },
            {
              itemType: 'check',
              label: '노출 상태',
              options: DispYnType.getOptions(),
              values: searchParams?.xbDispYn,
              onChangeCallBack: (e) => {
                // setSearchParams({
                //   ...searchParams,
                //   xbShowYn: e,
                // });
              },
            },
            {
              itemType: 'date',
              label: '노출일자',
              value: dayjs().format('YYYY-MM-DD'),
              onChangeDateCallback: (e) => {
                setSearchParams({
                  ...searchParams,
                  xbDispDt: dateStringFormat(e, 'YYYY-MM-DD'),
                });
              },
            },

            {
              itemType: 'range_date',
              label: '등록일',
              startDate: dayjs().format('YYYY-MM-DD'),
              endDate: dayjs().format('YYYY-MM-DD'),
              // quickButtons: [
              //   { title: '당일', value: 1 },
              //   { title: '1주일', value: 7 },
              //   { title: '1개월', value: 30 },
              //   { title: '3개월', value: 90 },
              // ],
              onChangeStartDateCallback: (e) => {
                setSearchParams({
                  ...searchParams,
                  createStartDt: dateStringFormat(e, 'YYYY-MM-DD'),
                });
              },
              onChangeEndDateCallback: (e) => {
                setSearchParams({
                  ...searchParams,
                  createEndDt: dateStringFormat(e, 'YYYY-MM-DD'),
                });
              },
            },

            {
              itemType: 'button',
              buttons: [
                {
                  className: 'red',
                  label: '조회',
                  onClickCallback: handleClickSearch,
                },
              ],
            },
          ]}
        />
      </section>
    </>
  );
}
