import React, { createContext, useState } from "react";
import { useContext } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initialUserState =localStorage.getItem("Whatsapp clone");
    console.log(initialUserState);
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
