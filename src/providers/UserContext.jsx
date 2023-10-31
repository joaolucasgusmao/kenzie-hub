import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfos, setUserInfos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [techList, setTechList] = useState([]);

  const navigate = useNavigate();

  const notifyErrorLogin = () => {
    toast.error("Credenciais inválidas!");
  };

  const notifyLogout = () => {
    toast.warning("Deslogando...");
  };

  const notifySuccessRegister = () => {
    toast.success("Conta criada com sucesso!");
  };

  const notifyErrorRegister = () => {
    toast.error("Ops! Algo deu errado");
  };

  const userLogin = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUserInfos(data?.user);
      setTechList(data?.user.techs);
      localStorage.setItem("@token", JSON.stringify(data.token));
    } catch (error) {
      if (
        error.response?.data?.message ===
        "Incorrect email / password combination"
      ) {
        notifyErrorLogin();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@token"));
    const autoLogin = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfos(data);
        setTechList(data?.techs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    autoLogin();
  }, []);

  const userRegister = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      reset();
      notifySuccessRegister();
      setTimeout(() => {
        navigate("/");
      }, 2 * 1000);
    } catch (error) {
      notifyErrorRegister();
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    notifyLogout();
    localStorage.removeItem("@token");
    setUserInfos(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userInfos,
        setUserInfos,
        userLogout,
        userLogin,
        userRegister,
        loading,
        techList,
        setTechList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
