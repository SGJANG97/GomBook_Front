import { useState } from 'react';
import { handleClickPreventDefault } from 'src/utils/commonHandler';

//팝업 오픈 핸들러
export const useOpenModalHandler = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClickModalOpen = handleClickPreventDefault(() => {
    setModalOpen(true);
  });

  const handleClickModalClose = () => {
    setModalOpen(false);
  };

  return {
    modalOpen,
    handleClickModalOpen,
    handleClickModalClose,
  };
};
