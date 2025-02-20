import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  getLocalStorage,
  removeStorage,
  setLocalStorage,
} from 'src/utils/localStorage';

import IMG1 from 'src/assets/images/temp/main_notice_logo.svg';
import { apiGetUserMainNotice } from 'src/lib/api/apiPath';
import { userNoticePath } from 'src/routes/path';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';

interface MainNotice {
  noticeId: string;
  noticeTitle: string;
  noticePre: string;
}

export default function MainNoticeModal() {
  //api call
  const apiCall = useUserApiCallHandler();

  const [open, setOpen] = useState<boolean>(false);

  const [noticeData, setNoticeData] = useState<MainNotice | null>();

  useEffect(() => {
    //메인 공지사항
    apiGetMainNoticeList();
  }, []);

  useEffect(() => {
    const today = dayjs().format('YYYYMMDD');
    //스토리지: 메인 공지사항 오늘 그만 보기
    const notecePopToday = getLocalStorage('noticePopToday') || '';

    if (
      noticeData &&
      (notecePopToday === '' || !today.includes(notecePopToday))
    ) {
      //초기화: 메인 공지사항 오늘 그만 보기
      removeStorage('noticePopToday');
      setOpen(true);
    }
  }, [noticeData]);

  //FN: 메인 공지사항
  const apiGetMainNoticeList = async () => {
    // API 호출: 조회 ==================================//
    let result: MainNotice = await apiCall.userApiCall(
      'GET',
      apiGetUserMainNotice(),
      {}
    );

    if (result) {
      setNoticeData(result);
    }
  };

  //FN: 오늘 그만보기
  const handleClickTodayClose = () => {
    const today = dayjs().format('YYYYMMDD');
    setLocalStorage('noticePopToday', today);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <section
          className="main-notice-wrap"
          style={{ display: `${open ? '' : 'none'}` }}
        >
          <article>
            <div className="main-notice-area">
              <dl>
                <dt>
                  <img src={IMG1} />
                </dt>
                <dd>
                  <p className="cate">Chef’s Food</p>
                  <h6 className="title">
                    <Link to={`${userNoticePath}/${noticeData?.noticeId}`}>
                      {noticeData?.noticePre
                        ? `[${noticeData.noticePre}] `
                        : ''}
                      {noticeData?.noticeTitle}
                    </Link>
                  </h6>
                </dd>
              </dl>
              <button
                type="button"
                className="close"
                onClick={handleClickTodayClose}
              >
                닫기
              </button>
              <Link to={`${userNoticePath}`} className="btn-more">
                더보기
              </Link>
            </div>
          </article>
        </section>
      )}
    </>
  );
}
