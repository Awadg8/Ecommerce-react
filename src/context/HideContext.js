import { createContext, useState } from "react";

const HideHeaderFooterContext = createContext();

const HideHeaderFooterProvider = ({ children }) => {
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

  return (
    <HideHeaderFooterContext.Provider
      value={{ hideHeaderFooter, setHideHeaderFooter }}
    >
      {children}
    </HideHeaderFooterContext.Provider>
  );
};

export { HideHeaderFooterProvider, HideHeaderFooterContext };
