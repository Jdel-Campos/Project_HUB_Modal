/* import React, { useContext } from "react"
import { ModalBurger } from "../../Modal/MenuBurgerMenu/modalBurger"
import { ModalContext } from "../../../providers/ModalProviders/modalContext"
import { StyledBurgerContainer } from "./burgerStyle"

export const MenuBurger = () => {
    const { openModalBurger } = useContext ( ModalContext )

    if( openModalBurger ){
        return(
            <StyledBurgerContainer>

                    <ModalBurger />

            </StyledBurgerContainer>
        )

    } else{

        return <></>
      }
} */
