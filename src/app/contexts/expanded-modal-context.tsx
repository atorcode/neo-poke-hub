import React, { useContext, useState } from "react";

type ExpandedModalContextType = {
  expandedModal: number;
  setExpandedModal: React.Dispatch<React.SetStateAction<number>>;
};

const ExpandedModalContext = React.createContext<
  ExpandedModalContextType | undefined
>(undefined);

const ExpandedModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [expandedModal, setExpandedModal] = useState<number>(-1);
  return (
    <ExpandedModalContext.Provider value={{ expandedModal, setExpandedModal }}>
      {children}
    </ExpandedModalContext.Provider>
  );
};

const useExpandedModalContext = () => {
  const context = useContext(ExpandedModalContext);
  if (!context) {
    throw new Error(
      "useExpandedModalContext must be used within a ExpandedModalProvider"
    );
  }
  return context;
};

export { ExpandedModalProvider, useExpandedModalContext };
