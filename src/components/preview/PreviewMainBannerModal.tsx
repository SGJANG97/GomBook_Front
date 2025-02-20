import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { APIPost } from 'src/lib/api/api';
import { apiPostUserMainBannerPopup } from 'src/lib/api/apiPath';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { MainBannerPopup } from 'src/models/main/MainBannerPopup';
import { ResponseModel } from 'src/models/response.model';
import { haldleApiCallExpPath } from 'src/utils/commonHandler';

import noImage from 'src/assets/images/temp/brand_img0.png';
import ButtonBox from 'src/components/form/ButtonBox';

interface Props {
  viewType: 'main' | 'preview';
  viewData?: MainBannerPopup;
}

export default function PreviewMainBannerModal(props: Props) {
  const { viewType, viewData } = props;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  //store: modal 상태관리
  const userModalAction = storeUserModalActions();

  const [open, setOpen] = useState<boolean>(false);
  const [images, setImages] = useState<string>('');

  useEffect(() => {
    // const today = dayjs().format('YYYYMMDD');

    // if (slides.length > 0 && today !== mainPopToday) {
    setOpen(true);
    // }
  }, [viewData?.id]);

  //FN: 오늘 그만보기
  const handleClickWeekTodayClose = async (showWeekDay: 'today' | 'week') => {
    const params = {};

    // API 호출: 노출 여부 등록 ==================================//
    await APIPost(
      apiPostUserMainBannerPopup(viewData?.id?.toString() || ''),
      params
    )
      .then((res: ResponseModel<MainBannerPopup>) => {
        if (res.code === 200) {
          setOpen(false);
        } else {
          //api token 만료
          let changePath = haldleApiCallExpPath(res.code, pathname);
          userModalAction.setUserModal({
            type: 'alert',
            headerTitle: '알림',
            modalOpen: true,
            content: `${res.body}`,
            path: changePath ? changePath : '',
          });
        }
      })
      .catch((error) => {
        userModalAction.setUserModal({
          type: 'alert',
          headerTitle: '알림',
          modalOpen: true,
          content: `Error: ${error}`,
        });
      });
  };

  console.log(viewData?.img?.filePath);

  return (
    <>
      {open && (
        <div className={`popup-wrap popup-main-wrap ${open && 'active'}`}>
          <div className="popup-layer">
            <div className="popup-content pdr-0">
              <div className="inner">
                <ButtonBox
                  className="btn remove-s20 close"
                  onClickCallback={() => setOpen(false)}
                />
                <div className="sw-box">
                  {viewType === 'main' ? (
                    <div
                      className="txt-box"
                      style={{
                        // backgroundImage: `url(${viewData?.img?.filePath || noImage})`,
                        backgroundImage: `url(${require('src/assets/images/temp/main_popup_01.png')})`,
                        // backgroundImage: `url(${require(`${viewData?.img?.filePath}`)})`,
                      }}
                    >
                      <h6 className="title" style={{ color: '#fff' }}>
                        {viewData?.title}
                      </h6>
                      <p className="desc" style={{ color: '#fff' }}>
                        {viewData?.desc}
                      </p>
                    </div>
                  ) : (
                    <img src={noImage} alt="" />
                  )}
                </div>
              </div>
            </div>

            {viewType === 'main' && (
              <div className="popup-btn-area txt-type">
                <button
                  type="button"
                  className="btn"
                  onClick={() => handleClickWeekTodayClose('today')}
                >
                  일주일간 그만보기
                </button>
                <div className="chkbox">
                  <label>
                    <input
                      type="checkbox"
                      onClick={() => handleClickWeekTodayClose('week')}
                    />
                    <span>오늘 그만보기</span>
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="popup-bg"></div>
        </div>
      )}
    </>
  );
}
