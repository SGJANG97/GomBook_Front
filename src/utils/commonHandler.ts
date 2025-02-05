import { MutableRefObject } from 'react';
import {
  adminLoginPath,
  // deliveryLoginPath,
  userLoginPath,
} from 'src/routes/path';
import { removeAuth } from 'src/utils/localStorage';

//FN: 기본 동작 방지 및 추가 로직 실행
export const handleClickPreventDefault =
  (callback: (data?: any) => void) =>
  (event?: React.MouseEvent<HTMLAnchorElement>, data?: any) => {
    event?.preventDefault(); // 기본 동작 방지
    callback(data); // 추가 로직 실행
  };

//FN: API Call시 token만료시 path
export const haldleApiCallExpPath = (code: number, pathname: string) => {
  let result = '';
  if (code === 498) {
    if (pathname.startsWith('/admin')) {
      removeAuth('admin');
    } else if (pathname.startsWith('/delivery')) {
      removeAuth('delivery');
    } else {
      removeAuth('user');
    }
    result = pathname.startsWith('/admin')
      ? `${adminLoginPath}`
      // : pathname.startsWith('/delivery')
      //   ? `${deliveryLoginPath}`
        : `/${userLoginPath}`;
  }
  return result;
};

//FN: 숫자만 입력
export const handleInputNumberCheck = (val: string) => {
  // 숫자만 남기기
  return val.replace(/[^0-9]/g, '');
};

//FN: 휴대전화번호 체크
export const handleTelNoCheck = (val: string) => {
  const phoneRegex = /^(01[0-9])([0-9]{3,4})([0-9]{4})$/;

  if (phoneRegex.test(val)) {
    return true;
  } else {
    return false;
  }
};

//FN: 자릿수 체크
export const handleLengthCheck = (val: string, cnt: number) => {
  const byteLength = Buffer.byteLength(val);

  if (byteLength <= cnt) {
    return true;
  }

  return false;
};

//FN: 이미지 미리보기
export const handleImagePreview = (
  imgRef: MutableRefObject<HTMLInputElement>
) => {
  const file = imgRef.current.files?.[0];
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      return reader.result;
    };
  }
};

// export const encodeFileToBase64 = (fileBlob: any) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(fileBlob);
//   return new Promise((resolve) => {
//     reader.onload = () => {
//       return reader.result;
//       // resolve();
//     };
//   });
// };

// const handleImageChange = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     const imageUrl = URL.createObjectURL(file);
//     setImage(imageUrl);
//   }
// };
