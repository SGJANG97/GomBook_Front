import { jwtDecode } from 'jwt-decode';
import { UserAuth } from 'src/models/user/UserAuth';

export const setLocalStorage = (name: string, value: string, options?: any) => {
  return localStorage.setItem(name, value);
};

export const getLocalStorage = (name: string) => {
  return localStorage.getItem(name);
};

export const removeStorage = (name: string) => {
  return localStorage.removeItem(name);
};

//user storage
export const setLocalStorageAuth = (
  name: string,
  value: string,
  options?: any
) => {
  setLocalStorage(name, value);

  const userInfo: UserAuth = jwtDecode(value);
  if (name === 'userAuth') {
    setLocalStorage('userInfo', JSON.stringify(userInfo));
  }
  if (name === 'adminAuth') {
    setLocalStorage('adminUserInfo', JSON.stringify(userInfo));
  }
  if (name === 'deliveryAuth') {
    setLocalStorage('deliveryUserInfo', JSON.stringify(userInfo));
  }
};

// //admin storage
// export const setAdminAuth = (name: string, value: string, options?: any) => {
//   setLocalStorage(name, value);

//   const adminUserInfo: AdminUser = jwtDecode(value);
//   setLocalStorage('adminUserInfo', JSON.stringify(adminUserInfo));
// };

// //delivery storage
// export const setDeliveryAuth = (name: string, value: string, options?: any) => {
//   setLocalStorage(name, value);

//   const adminUserInfo: AdminUser = jwtDecode(value);
//   setLocalStorage('deliveryUserInfo', JSON.stringify(adminUserInfo));
// };

//user remove
export const removeAuth = (flag: string) => {
  if (flag === 'user') {
    removeStorage('userAuth');
    removeStorage('userInfo');
  }
  if (flag === 'admin') {
    removeStorage('adminAuth');
    removeStorage('adminUserInfo');
  }
  if (flag === 'delivery') {
    removeStorage('deliveryAuth');
    removeStorage('deliveryUserInfo');
  }
};

//admin remove
// export const removeAdminAuth = () => {
//   removeStorage('adminAuth');
//   removeStorage('adminUserInfo');
// };

// //delivery remove
// export const removeDeliveryAuth = () => {
//   removeStorage('deliveryAuth');
//   removeStorage('deliveryUserInfo');
// };
