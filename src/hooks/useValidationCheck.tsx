//필수 항목 체크 alert message
export const useValidation = () => {
  const handleUserValidationMessage = (
    key: string | number,
    message: string,
    modalAction: any
  ) => {
    console.log(key);
    if (key === '') {
      modalAction.setUserModal({
        type: 'alert',
        headerTitle: '알림',
        modalOpen: true,
        content: message,
      });
      return false;
    }
  };
  return {
    handleUserValidationMessage,
  };
};
