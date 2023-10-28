import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [addIsHidden, setAddIsHidden] = useState(true);
  const [editIsHidden, setEditIsHidden] = useState(true);

  const handleOpenAddModal = () => {
    setAddIsHidden(false);
  };

  const handleCloseAddModal = () => {
    setAddIsHidden(true);
  };

  const handleOpenEditModal = () => {
    setEditIsHidden(false);
  };

  const handleCloseEditModal = () => {
    setEditIsHidden(true);
  };

  const handleClickOutsideModal = (event) => {
    if (!addIsHidden && event.target.id === "addModalOverlay") {
      handleCloseAddModal();
    } else if (!editIsHidden && event.target.id === "editModalOverlay") {
      handleCloseEditModal();
    }
  };

  const handleKeyPress = (event) => {
    if (!addIsHidden && event.keyCode === 27) {
      handleCloseAddModal();
    } else if (!editIsHidden && event.keyCode === 27) {
      handleCloseEditModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideModal);
    document.addEventListener("keydown", handleKeyPress);
  }, [addIsHidden]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideModal);
    document.addEventListener("keydown", handleKeyPress);
  }, [editIsHidden]);

  return (
    <ModalContext.Provider
      value={{
        addIsHidden,
        setAddIsHidden,
        handleOpenAddModal,
        handleCloseAddModal,
        editIsHidden,
        setEditIsHidden,
        handleOpenEditModal,
        handleCloseEditModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
