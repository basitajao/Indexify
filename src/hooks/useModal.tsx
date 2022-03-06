import { useState, useCallback } from "react";

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = useCallback(() => {
    setIsModalVisible((isModalVisible) => true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalVisible((isModalVisible) => false);
  }, []);

  console.log(isModalVisible);
  return {
    isModalVisible,
    openModal,
    closeModal,
  };
};
