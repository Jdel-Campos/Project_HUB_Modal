import React, { createContext, useState } from "react";
import { IModalContext, IModalProviderProps } from "./type";

export const ModalContext = createContext( {} as IModalContext)

export const ModalProviders = ( { children } : IModalProviderProps ) => {
    const [ openModalBurger, setOpenModalBurger ] = useState(true)
   
    return(
        <ModalContext.Provider value={{ openModalBurger, setOpenModalBurger }}>
          { children }
        </ModalContext.Provider>
      )
    }