import React, { createContext } from "react";

export const AuthContext = createContext({
  hasUser: false,
  setUser: () => {
    false;
  },
});
