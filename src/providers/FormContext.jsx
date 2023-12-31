import { createContext } from "react";
import { useState } from "react";
export const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [moduleOptions, setModuleOptions] = useState("Selecione um módulo");
  const [statusOptions, setStatusOptions] = useState("Selecionar status");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const handleHiddenConfirmPassword = () => {
    setHiddenConfirmPassword(!hiddenConfirmPassword);
  };

  return (
    <FormContext.Provider
      value={{
        moduleOptions,
        setModuleOptions,
        handleHiddenPassword,
        handleHiddenConfirmPassword,
        hiddenPassword,
        setHiddenPassword,
        hiddenConfirmPassword,
        setHiddenConfirmPassword,
        statusOptions,
        setStatusOptions
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
