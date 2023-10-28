import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { ModalContext } from "./ModalContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [editingTech, setEditingTech] = useState(null);

  const { techList, setTechList } = useContext(UserContext);
  const { handleCloseAddModal, handleCloseEditModal } =
    useContext(ModalContext);

  const notifyCreate = () => {
    toast.success("Tecnologia cadastrada com sucesso!");
  };

  const notifyDelete = () => {
    toast.success("Tecnologia removida com sucesso!");
  };

  const notifyEdit = () => {
    toast.success("Tecnologia editada com sucesso!");
  };

  const notifyError = () => {
    toast.error("Por favor, preencha os campos!");
  };

  const createTech = async (formData, reset) => {
    try {
      const token = JSON.parse(localStorage.getItem("@token"));
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleCloseAddModal();
      reset();
      notifyCreate();
      setTechList([...techList, data]);
    } catch (error) {
      if (
        error.response?.data?.message === "title is required" ||
        "status is required"
      ) {
        notifyError();
      }
    }
  };

  const deleteTech = async (techId) => {
    try {
      const token = JSON.parse(localStorage.getItem("@token"));
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.filter((tech) => tech.id !== techId);
      notifyDelete();
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async (formData) => {
    try {
      const token = JSON.parse(localStorage.getItem("@token"));
      const { data } = await api.put(
        `/users/techs/${editingTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      notifyEdit();
      handleCloseEditModal();
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };

  const selectEditingTech = (tech) => {
    setEditingTech(tech);
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        deleteTech,
        updateTech,
        editingTech,
        selectEditingTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
