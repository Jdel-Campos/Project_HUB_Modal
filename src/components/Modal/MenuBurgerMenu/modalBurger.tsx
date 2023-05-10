import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledBurgerHeader, StyledBurgerBody, StyledBurgerUser, StyledBurgerContainer } from "../../Modal/MenuBurgerMenu/modalBurgerStyle";
import { ModalContext } from "../../../providers/ModalProviders/modalContext";
import Close__Img from  "../../../assets/Image__Close__.svg";
import Favorite__Img from "../../../assets/Image__Favorite__.svg";
import Person__Img from "../../../assets/Image__Person__.svg";
import Order__Img from "../../../assets/Image__Order__.svg";


export const ModalBurger = ( ) => {
    const { openModalBurger, setOpenModalBurger } = useContext ( ModalContext )

    if( !openModalBurger ){

        return(
            <>
                {/* <StyledBurgerBackground></StyledBurgerBackground> */}
                <StyledBurgerContainer>
                    <StyledBurgerHeader>
                        <div className="user__header">
                            <figure>
                                <img src={Person__Img} alt="P" />
                            </figure>
                            <h3>Hello, Jardel Campos</h3>
                        </div>

                        <div className="onClose" onClick={() => { setOpenModalBurger( !openModalBurger ) }} >
                            <figure>
                                <img src={Close__Img} alt="Close" />
                            </figure>
                        </div>
                    </StyledBurgerHeader>
        
                    <StyledBurgerBody>
                        <ul>
                            <li>
                                <Link to=""> Products </Link>
                            </li>
                            <li>
                                <Link to=""> Accessories </Link>
                            </li>
                            <li>
                                <Link to=""> Male </Link>
                            </li>
                            <li>
                                <Link to=""> Female </Link>
                            </li>
                            <li>
                                <Link to=""> Children's </Link>
                            </li>
                            <li>
                                <Link to=""> Intimate </Link>
                            </li>
                            <li>
                                <Link to=""> Shoes </Link>
                            </li>
                        </ul>
                    </StyledBurgerBody>
        
                    <div className="separation__line"></div>
        
                    <StyledBurgerUser>
                        <ul>
                            <li>
                                <Link to="">
                                    <figure>
                                        <img src={Person__Img} alt="Home" />
                                    </figure>

                                    <h3> My Account </h3>
                                </Link>
                            </li>

                            <li>
                                <Link to="">
                                    <figure>
                                        <img src={Favorite__Img} alt="Like" />
                                    </figure>

                                    <h3> Wish List </h3>
                                </Link>
                            </li>

                            <li>
                                <Link to="">
                                    <figure>
                                        <img src={Order__Img} alt="Orders" />
                                    </figure>

                                    <h3> Requests </h3>
                                </Link>  
                            </li>
                        </ul>

                        <button className="button__exit"> Exit </button>

                    </StyledBurgerUser>
                </StyledBurgerContainer>
            </>
        )

    } else{

        return <></>
    }

}