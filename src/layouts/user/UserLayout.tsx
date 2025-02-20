import { useEffect, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

import UserHeader from 'src/layouts/user/UserHeader';
import Floating from 'src/layouts/user/Floating';
import UserFooter from 'src/layouts/user/UserFooter';

export default function UserLayout() {
  const navigate = useNavigate();

  const footerRef = useRef<HTMLDivElement>(null);

  //플로팅
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    // require('src/assets/css/common.css');
  }, []);

  const checkScrollPosition = () => {
    const bodyHeight = document.documentElement.scrollHeight;
    const footer = footerRef?.current; //document.getElementById('footer');
    const footerHeight = footer ? footer.offsetHeight : 0;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const valCal = bodyHeight - windowHeight - footerHeight;

    if (scrollTop >= valCal) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, [footerRef?.current]);

  return (
    <>
      <UserHeader />

      <div className="wrap">
        <main>
          {/* Outlet - children과 같은 효과 */}
          <Outlet />

          <Floating footerRef={footerRef} isAtBottom={isAtBottom} />
        </main>
      </div>

      <UserFooter ref={footerRef} />
    </>
  );
}
