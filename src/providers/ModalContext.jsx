import { createContext, useState } from "react";

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