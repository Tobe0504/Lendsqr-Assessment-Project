import { createContext, useState } from "react";

// Types
type AppContextProps = {
  children: React.ReactNode;
};

export type AppContextValues = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextValues | null>(null);

const AppContextProvider = ({ children }: AppContextProps) => {
  // State
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
