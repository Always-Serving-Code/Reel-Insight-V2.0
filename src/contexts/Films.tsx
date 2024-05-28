import { createContext, useState } from "react";
export const FilmsContext = createContext();

export const FilmsProvider = ({ children }: any) => {
  const [updateFilms, setUpdateFilms] = useState(false);
  return (
    <FilmsContext.Provider value={{ updateFilms, setUpdateFilms }}>
      {children}
    </FilmsContext.Provider>
  );
};
