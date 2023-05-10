
export interface IModalProviderProps{
    children: React.ReactNode;
}

export interface IModalContext{
    openModalBurger: boolean,
    setOpenModalBurger: React.Dispatch<React.SetStateAction<boolean>>,
}