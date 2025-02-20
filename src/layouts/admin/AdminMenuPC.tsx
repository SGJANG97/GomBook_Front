import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { storeAdminUser } from 'src/lib/store/adminUserStore';
import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { AdminMenus } from 'src/data/menuData';

interface Props {
  menus: AdminMenus[];
}

export default function AdminMenuPC(props: Props) {
  const { menus } = props;

  const { pathname } = useLocation();

  const adminUser = storeAdminUser();

  const cleanPathname = useMemo(() => {
    let cleanedPathname = pathname.replace(/\/\d+$/, ''); // 마지막 /와 그 뒤의 숫자 제거
    cleanedPathname = cleanedPathname.replace(/\/(create|update)$/, ''); // 마지막 /create 또는 /update 제거
    return cleanedPathname;
  }, [pathname]);

  //현재 경로 메뉴 표시
  useEffect(() => {
    // adminMenuListPC 배열을 순회하여 각 메뉴 항목을 확인
    handleMenus(menus);
  }, [pathname, menus]);

  const handleMenus = (menus: AdminMenus[]) => {
    menus.map((one, oneIdx) => {
      // 서브 메뉴가 존재하는 경우
      one.sub?.map((two) => {
        // 현재 경로(cleanedPathname)와 서브 메뉴의 경로가 일치하는 경우
        if (two.menuPath.toString() === cleanPathname) {
          // 해당 메뉴를 열기 위해 handleDepthClick 함수를 호출
          handleDepthClick(oneIdx);
        }
      });
    });
  };

  const useAdminLoginStatus = useLoginStatusHandler();
  //FN: 로그인 상태별 router - 링크 클릭 시 호출되는 함수
  const handleClickLink = handleClickPreventDefault((path: string) => {
    useAdminLoginStatus.handleClickLoginStatus(adminUser, path, pathname);
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  //FN: 메뉴의 1depth 항목 클릭 시 호출되는 함수.
  const handleDepthClick = (index: number | null) => {
    setActiveIndex(index);
  };

  return (
    <>
      <aside className="admin-lnb show-pc">
        <div className="admin-lnb-wrap">
          <ul className="lnb-wrap--list">
            {menus.map((oneDepth, oneIdx) => (
              <li key={oneIdx}>
                {oneDepth.sub && oneDepth.sub.length > 0 ? (
                  <>
                    <div
                      className={`lnb-wrap--list-tit ${activeIndex === oneIdx ? 'active' : ''}`}
                      onClick={() => handleDepthClick(oneIdx)}
                    >
                      {oneDepth.menuName}
                    </div>
                    <ul
                      className="lnb-wrap--dept"
                      style={{
                        display: activeIndex === oneIdx ? 'block' : 'none',
                      }}
                    >
                      {oneDepth.sub.map((twoDepth, twoIdx) => (
                        <li key={twoIdx}>
                          <Link
                            to=""
                            className={`${twoDepth.menuPath === cleanPathname ? 'active' : ''}`}
                            onClick={(e) => {
                              handleClickLink(e, twoDepth.menuPath);
                              handleDepthClick(oneIdx);
                            }}
                          >
                            {twoDepth.menuName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // oneDepth
                  <Link
                    to=""
                    className={`lnb-wrap--list-menu ${oneDepth.menuPath === cleanPathname ? 'active' : ''}`}
                    onClick={(e) => {
                      handleClickLink(e, oneDepth.menuPath);
                      handleDepthClick(oneIdx);
                    }}
                  >
                    {oneDepth.menuName}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
