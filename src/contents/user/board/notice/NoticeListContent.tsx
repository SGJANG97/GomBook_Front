import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageInfo } from 'src/components/form/grid/GridTableBox';
import PaginationBox from 'src/components/form/PaginationBox';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';
import { apiGetUserNoticeList } from 'src/lib/api/apiPath';
import { storeUser } from 'src/lib/store/userStore';
import { Notice } from 'src/models/notice/Notice';
import { NoticeList } from 'src/models/notice/NoticeList';
import { NoticeReqSearchParams } from 'src/models/notice/NoticeReqSearchParams';
import { dateStringFormat } from 'src/utils/date';
import { handleIsMobile } from 'src/utils/mobile';

export default function NoticeListContent() {
  //FN: mobile 여부
  const isMobile = handleIsMobile();

  //api call
  const apiCall = useUserApiCallHandler();

  const [noticeList, setNoticeList] = useState<NoticeList>();
  //페이징
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalCount: 0,
    pageNo: 1,
    pageSize: 20,
  });

  useEffect(() => {
    //공지사항 목록
    apiGetNoticeList();
  }, [pageInfo.pageNo]);

  //FN: 공지사항 목록
  const apiGetNoticeList = async () => {
    const params: NoticeReqSearchParams = {
      pageNo: pageInfo.pageNo,
      pageSize: pageInfo.pageSize?.toString(),
      useYn: 'Y', //게시상태
    };
    // API 호출: 목록 조회 ==================================//
    let result: NoticeList = await apiCall.userApiCall(
      'GET',
      apiGetUserNoticeList(),
      params
    );

    if (result) {
      setNoticeList(result);
      setPageInfo({
        ...pageInfo,
        totalCount: result?.totalSize || 0,
      });
    }
  };

  //FN:
  const handleClickPagination = (curPage: number) => {
    setPageInfo({
      ...pageInfo,
      pageNo: curPage,
    });
  };

  return (
    <section className="notice-wrap">
      <article className="inner-content">
        <div className={`sub-title-box ty2 ${isMobile ? '' : 'show-pc'}`}>
          <h2 className="title-t ty2">공지사항</h2>
        </div>
        <ul className="tbl-lists">
          {/* 고정 게시글 */}
          {noticeList?.fixList?.map((fixed: Notice, fixIdx: number) => (
            <li
              className={`tbl-list ${fixed.readYn === 'Y' ? 'read' : ''} fix`}
              key={fixIdx}
            >
              <NoticeGridContent data={fixed} />
            </li>
          ))}

          {/* 게시글 */}
          {noticeList?.noticeList?.map((notice: Notice, noticeIdx: number) => (
            <li
              className={`tbl-list ${notice.readYn === 'Y' ? 'read' : ''}`}
              key={noticeIdx}
            >
              <NoticeGridContent data={notice} />
            </li>
          ))}
        </ul>

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
      </article>
    </section>
  );
}

//공지사항 목록(고정, 게시글) 공통 view
const NoticeGridContent = (props: { data: Notice }) => {
  const { data } = props;
  //store: user 상태관리
  const user = storeUser();

  return (
    <Link to={`${data.noticeId}`} className="tbl-list-box">
      <div className="top">
        <p className="cate show-pc">{data.noticePre}</p>
        <p className="cate show-mo">[{data.noticePre}]</p>
        <p className="title">{data.noticeTitle}</p>
      </div>
      <div className="bottom">
        <p className="date">{dateStringFormat(data.createDt, 'YYYY-MM-DD')}</p>
        {user && (
          <p className="state">{data.readYn === 'Y' ? '읽음' : '안읽음'}</p>
        )}
      </div>
    </Link>
  );
};
