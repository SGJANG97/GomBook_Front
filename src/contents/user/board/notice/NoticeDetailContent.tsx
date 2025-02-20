import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import { apiGetUserNoticeDetail } from 'src/lib/api/apiPath';
import { Notice } from 'src/models/notice/Notice';
import { dateStringFormat } from 'src/utils/date';
import { userNoticePath } from 'src/routes/path';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';

interface Props {
  id?: number | string;
}

export default function NoticeDetailContent(props: Props) {
  const { id } = props;

  //api call
  const apiCall = useUserApiCallHandler();

  const [noticeData, setNoticeData] = useState<Notice>();

  useEffect(() => {
    //공지사항 상세 조회
    if (id) {
      apiGetNoticeDetail(id);
    }
  }, [id]);

  //FN: 공지사항 상세 조회
  const apiGetNoticeDetail = async (id: string | number) => {
    // API 호출: 상세 조회 ==================================//
    let result: Notice = await apiCall.userApiCall(
      'GET',
      apiGetUserNoticeDetail(id?.toString() || ''),
      {}
    );

    if (result) {
      //상세 저장
      setNoticeData(result);
    }
  };

  return (
    <section className="notice-detail-wrap">
      <article className="inner-content">
        <div className="sub-title-box ty2 show-pc">
          <h2 className="title-t ty2">공지사항</h2>
        </div>
        <div className="tbl-list-box">
          <div className="top">
            <p className="cate show-pc">{noticeData?.noticePre}</p>
            {/* <!-- 모바일 카테고리 [] 추가 --> */}
            <p className="cate show-mo">[{noticeData?.noticePre}]</p>
            <p className="title">{noticeData?.noticeTitle}</p>
          </div>
          <div className="bottom">
            <p className="date">
              {dateStringFormat(noticeData?.createDt, 'YYYY-MM-DD')}
            </p>
          </div>
        </div>
        <div className="notice-detail-box">
          {parse(noticeData?.contents || '')}
        </div>
        <div className="btn-box center">
          <Link to={`/${userNoticePath}`} className="btn ty1 bd-ty1">
            <span>목록</span>
          </Link>
        </div>
      </article>
    </section>
  );
}
