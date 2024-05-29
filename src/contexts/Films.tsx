import { createContext, useState, ReactNode } from "react";

// interface FilmsContextType {
//   updateFilms: boolean;
//   setUpdateFilms: (value: boolean) => void;
// }

// export const FilmsContext = createContext<FilmsContextType | undefined>(
//   undefined
// );

export const FilmsContext = createContext();

export const FilmsProvider = ({ children }: any) => {
  const [updateFilms, setUpdateFilms] = useState(false);
  return (
    <FilmsContext.Provider value={{ updateFilms, setUpdateFilms }}>
      {children}
    </FilmsContext.Provider>
  );
};
