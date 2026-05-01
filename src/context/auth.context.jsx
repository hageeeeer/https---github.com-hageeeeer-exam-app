import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const auth = createContext(null);

export function AuthContextProvider({ children }) {
  const [isLogin, setLogin] = useState(null);
  const [role, setRole] = useState("user");

  function decodeFun() {
    const decoded = jwtDecode(localStorage.getItem("token"));
    setRole(decoded.role);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(localStorage.getItem("token"));
      decodeFun();
    }
  }, []);

  return <auth.Provider value={{ role, setLogin,role ,decodeFun}}>{children}</auth.Provider>;
}
