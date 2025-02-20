import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { handleIsMobile } from 'src/utils/mobile';

import AdminHeader from 'src/layouts/admin/AdminHeader';
import AdminMenuPC from 'src/layouts/admin/AdminMenuPC';
import AdminMenuMo from 'src/layouts/admin/AdminMenuMo';
import { AdminMenus } from 'src/data/menuData';
import { apiGetAdminMenuList } from 'src/lib/api/apiPath';
import { useAdminApiCallHandler } from 'src/hooks/useAdminApiCall';

export default function AdminLayout() {
  //api call
  const apiCall = useAdminApiCallHandler();

  //FN: mobile 여부
  const isMobile = handleIsMobile();

  const [menus, setMenus] = useState<AdminMenus[]>([]);

  useEffect(() => {
    apiGetMenuList();

    // require('src/assets/css/admin_common.css');
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.height = '100%';
    }

    // 컴포넌트 언마운트 시 스타일 복원 (선택 사항)
    return () => {
      if (rootElement) {
        rootElement.style.height = '';
      }
    };
  }, []);

  //FN: 메뉴 목록 조회
  const apiGetMenuList = async () => {
    // API 호출: 목록 조회 ==================================//
    let result: AdminMenus[] = await apiCall.adminApiCall(
      'GET',
      apiGetAdminMenuList(),
      {}
    );

    if (result) {
      // setMenus(result);
      // setMenus(adminMenuListPC);
    }
  };

  return (
    <div className="wrap admin">
      <AdminHeader />

      <div className="container">
        <AdminMenuPC menus={menus} />

        {/* Outlet - children과 같은 효과 */}
        <div className="content">
          <main>
            <Outlet />
          </main>
        </div>

        {/* {isMobile && <AdminMenuMo />} */}
        <AdminMenuMo menus={menus} />
      </div>

      {/* <AdminFooter /> */}
    </div>
  );
}
