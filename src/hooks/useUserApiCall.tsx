import { useLocation } from 'react-router';
import { APIGet, APIPost, APIPostFiles } from 'src/lib/api/api';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { ResponseModel } from 'src/models/response.model';
import { haldleApiCallExpPath } from 'src/utils/commonHandler';

//api call handler
export const useUserApiCallHandler = () => {
  const { pathname } = useLocation();

  //store: alert modal 상태관리
  const userModalAction = storeUserModalActions();

  const userApiCall = async (
    method: 'GET' | 'POST' | 'FILEPOST',
    apiUrl: string,
    params: {} | FormData,
    headerTitle?: string,
    redirectUrl?: string
  ): Promise<any> => {
    let result = null;
    // Promise<any>로 반환 타입 지정
    try {
      const res: ResponseModel<any> | null =
        method === 'GET'
          ? await APIGet(apiUrl, params)
          : method === 'POST'
            ? await APIPost(apiUrl, params)
            : method === 'FILEPOST'
              ? await APIPostFiles(apiUrl, params)
              : null;
      if (res) {
        const { code, body, message } = res;
        if (code === 200) {
          result = body; // 성공 시 body 반환
        } else {
          // api token 만료 처리
          let changePath = haldleApiCallExpPath(code, pathname);

          userModalAction.setUserModal({
            type: 'alert',
            headerTitle: headerTitle ? headerTitle : '알림',
            modalOpen: true,
            content: message,
            path: changePath ? changePath : '',
          });
        }
      }
    } catch (error) {
      userModalAction.setUserModal({
        type: 'alert',
        headerTitle: 'System 오류',
        modalOpen: true,
        content: `Error: ${error}`,
        path: '',
      });
    }

    return result;
  };

  return {
    userApiCall,
  };
};
