import { useState } from 'react';
import { Link } from 'react-router-dom';

import { menuListMapping } from 'src/utils/menuMapping';
import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { storeUser } from 'src/lib/store/userStore';
import { userMenuListMO } from 'src/data/menuData';

import UserLoginLogout from 'src/layouts/user/UserLoginLogout';

import logo from 'src/assets/images/icon_logo.svg';
import { userExhibitionPath } from 'src/routes/path';

interface Props {
  modalOpen: boolean;
  onClickCallback: () => void;
}

export default function UserMenuMO(props: Props) {
  const { modalOpen, onClickCallback } = props;

  const user = storeUser();

  //menu list
  const newMenuList = menuListMapping(userMenuListMO);

  const useLoginStatus = useLoginStatusHandler();
  //FN: 로그인 상태별 router
  const handleClickLink = handleClickPreventDefault((path: string) => {
    useLoginStatus.handleClickLoginStatus(user, path);
  });

  //FN: modal close
  const handleClickModalClose = handleClickPreventDefault(() => {
    onClickCallback();
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  const handleDepth1Click = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveSubIndex(null); // depth1 클릭 시 depth2는 닫힘
  };

  const handleDepth2Click = (index: number | null) => {
    setActiveSubIndex(activeSubIndex === index ? null : index);
  };

  return (
    <>
      <div className={`header-menu ${modalOpen ? 'active' : ''}`}>
        <div className="header">
          <div className="inner-content">
            <div className="top">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div className="right-menu">
                <Link to="" className="close" onClick={handleClickModalClose} />
              </div>
            </div>
          </div>
        </div>

        <div className="inner-content">
          <div className="right-menu">
            <UserLoginLogout />
          </div>

          <div className="left-menu">
            <ul>
              {newMenuList?.map((oneDepth, oneIdx) => (
                <li key={oneIdx}>
                  <div
                    className={`depth1 ${activeIndex === oneIdx ? 'active' : ''}`}
                  >
                    <div
                      className={`depth1-title ${oneDepth.sub && oneDepth.sub.length > 0 ? 'arrow' : ''}`}
                      onClick={() => handleDepth1Click(oneIdx)}
                    >
                      <Link
                        to=""
                        onClick={(e) => handleClickLink(e, oneDepth.path)}
                        className={`${oneDepth.path === `/${userExhibitionPath}` ? 'new' : ''}`}
                      >
                        {oneDepth.name}
                      </Link>
                    </div>

                    {oneDepth.sub &&
                      oneDepth.sub.length > 0 &&
                      activeIndex === oneIdx && (
                        <div className="depth2">
                          {oneDepth.sub.map((twoDepth, twoIndex) => (
                            <div
                              className={`wrap ${twoDepth.sub && twoDepth.sub.length > 0 ? 'arrow' : ''} ${activeSubIndex === twoIndex ? 'active' : ''}`}
                              key={twoIndex}
                              onClick={() => handleDepth2Click(twoIndex)}
                            >
                              <Link
                                to=""
                                onClick={(e) =>
                                  handleClickLink(e, oneDepth.path)
                                }
                              >
                                {twoDepth.name}
                              </Link>

                              {twoDepth.sub &&
                                twoDepth.sub.length > 0 &&
                                activeSubIndex === twoIndex && (
                                  <div className="depth3">
                                    {twoDepth.sub.map(
                                      (threeDepth, threeIndex) => (
                                        <Link
                                          to=""
                                          onClick={(e) =>
                                            handleClickLink(e, oneDepth.path)
                                          }
                                          key={threeIndex}
                                        >
                                          {threeDepth.name}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bot">
            <div className="phone">
              <img src={require('src/assets/images/icon_phone.png')} alt="" />
              대표전화 <a href="tel:1577-6227">1577-6227</a>
            </div>
            <div className="sns">
              <a href="https://www.instagram.com/chefsfoodkr" target="_blank">
                <img
                  src={require('src/assets/images/icon_instar_red.png')}
                  alt="인스타그램"
                />
              </a>
              <a href="https://www.facebook.com/chefsfoodkorea" target="_blank">
                <img
                  src={require('src/assets/images/icon_facebook_red.png')}
                  alt="페이스북"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
