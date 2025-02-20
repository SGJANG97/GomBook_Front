import { Link, useLocation } from 'react-router-dom';
import { storeUser } from 'src/lib/store/userStore';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
import { userQuickOrderPath } from 'src/routes/path';

interface Props {
  footerRef: any;
  isAtBottom: boolean;
}

export default function Floating(props: Props) {
  const { footerRef, isAtBottom } = props;

  const { pathname } = useLocation();
  //store: user 상태관리
  const user = storeUser();

  //FN: 로그인 상태별 router
  const useLoginStatus = useLoginStatusHandler();
  const handleClickLink = handleClickPreventDefault((path: string) => {
    useLoginStatus.handleClickLoginStatus(user, path, pathname);
  });

  // FN: 상단으로 가기
  const handleScrollToTop = handleClickPreventDefault(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <div className={`floating-wrap floating ${isAtBottom ? 'bottom' : ''}`}>
        <ul>
          {/*<li className="quick-order">*/}
          {/*  <Link to="" onClick={(e) => handleClickLink(e, userQuickOrderPath)}>*/}
          {/*    바로*/}
          {/*    <br />*/}
          {/*    주문*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li className="go-top">
            <Link to="" onClick={handleScrollToTop}>
              상단으로 가기
            </Link>
          </li>
          {/*<li className="chatbot">*/}
          {/*  <Link to="">챗봇</Link>*/}
          {/*</li>*/}
        </ul>
      </div>
    </>
  );
}
