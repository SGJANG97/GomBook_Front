import { useLocation } from 'react-router';

import AdminLoginContent from 'src/contents/admin/login/AdminLoginContent';
import UserLoginContent from 'src/contents/user/login/UserLoginContent';

export default function Login() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.startsWith('/admin') || pathname.startsWith('/delivery') ? (
        <AdminLoginContent />
      ) : (
        <UserLoginContent />
      )}
    </>
  );
}
