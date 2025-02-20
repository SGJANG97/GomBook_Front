import { useLocation } from 'react-router';
import { APIGet, APIPost, APIPostFiles } from 'src/lib/api/api';
import { storeAdminAlertModalActions } from 'src/lib/store/adminAlertModalStore';
import { ResponseModel } from 'src/models/response.model';
import { haldleApiCallExpPath } from 'src/utils/commonHandler';

//api call handler
export const useAdminApiCallHandler = () => {
  const { pathname } = useLocation();

  //store: alert modal 상태관리
  const alertModalAction = storeAdminAlertModalActions();

  const adminApiCall = async (
    method: 'GET' | 'POST' | 'FILEPOST',
    apiUrl: string,
    params: {} | FormData
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
        const { code, body } = res;
        if (code === 200) {
          result = body; // 성공 시 body 반환
        } else {
          // api token 만료 처리
          let changePath = haldleApiCallExpPath(code, pathname);

          alertModalAction.setAdminAlertModal({
            modalOpen: true,
            message: body,
            path: changePath ? changePath : '',
          });
        }
      }
    } catch (error) {
      alertModalAction.setAdminAlertModal({
        modalOpen: true,
        message: `Error: ${error}`,
      });
    }

    return result;
  };

  return {
    adminApiCall,
  };
};
