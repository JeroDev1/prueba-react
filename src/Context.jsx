import React, { createContext, useState } from 'react';

const TareaContext = createContext();

const TareaProvider = ({ children }) => {
  const [tareaCompletada, setTareaCompletada] = useState([]);

  const handleTareaCompletada = (id) => {
    setTareaCompletada(id);
  };

  return (
    <TareaContext.Provider value={{ tareaCompletada, handleTareaCompletada }}>
      {children}
    </TareaContext.Provider>
  );
};

export { TareaContext, TareaProvider };