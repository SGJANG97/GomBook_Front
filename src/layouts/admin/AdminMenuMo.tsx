import { Link, useLocation } from 'react-router-dom';

import { storeAdminUser } from 'src/lib/store/adminUserStore';
import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { adminMenuListMO, AdminMenus } from 'src/data/menuData';

interface Props {
  menus: AdminMenus[];
}

export default function AdminMenuMo(props: Props) {
  const { menus } = props;

  const { pathname } = useLocation();
  const adminUser = storeAdminUser();

  const useLoginStatus = useLoginStatusHandler();
  //FN: 로그인 상태별 router - 링크 클릭 시 호출되는 함수
  const handleClickLink = handleClickPreventDefault((path: string) => {
    useLoginStatus.handleClickLoginStatus(adminUser, path);
  });

  return (
    <div className="admin-mobile-nav show-mo">
      <ul>
        {adminMenuListMO.map((oneDepth, idx) => (
          <li
            className={`${oneDepth.path === pathname ? 'active' : ''}`}
            key={idx}
          >
            <Link to="" onClick={(e) => handleClickLink(e, oneDepth.path)}>
              {oneDepth.name}
            </Link>
          </li>
        ))}
        {/* <!-- 활성화시 active 클래스 추가 --> */}
        {/* <li className={`active`}>
          <Link to="/Linkdmin">홈</Link>
        </li>
        <li>
          <Link to="">거래처</Link>
        </li>
        <li>
          <Link to="">상품</Link>
        </li>
        <li>
          <Link to="">즐겨찾기</Link>
        </li>
        <li>
          <Link to="">문의하기</Link>
        </li> */}
      </ul>
    </div>
  );
}
