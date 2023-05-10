import React, { useContext } from "react";
import { StyledHeaderContainer, StyledHeader, StyledHeaderMobile, StyledHeaderLink } from "./headerStyle";
import { BannerWritten } from "../Banners/BannerWritten/bannerWritten";
import { Search } from "./SearchForm/search";
import Logo__Img from "../../assets/Image__Logo__.svg"
import Favorite__Img from "../../assets/Image__Favorite__.svg"
import Person__Img from "../../assets/Image__Person__.svg"
import ShoppingCart__Img from "../../assets/Image__ShoppingCart__.svg"
import Menu__Img from  "../../assets/Image__Menu__.svg"
import { Link } from "react-router-dom";
import { ModalContext } from "../../providers/ModalProviders/modalContext";
import { ModalBurger } from "../../components/Modal/MenuBurgerMenu/modalBurger"


export const Header = () => {
    const { openModalBurger, setOpenModalBurger } = useContext ( ModalContext )

    return(
        <>
            <ModalBurger />
            <StyledHeaderContainer>
                <BannerWritten/>
                <StyledHeader>
                    <h1>HUB Modal</h1>
                    <div className="header__fix">
                        <StyledHeaderLink $buttonStyle={"week"}>
                            <div>
                                <h4>Deals of the week</h4>
                                <hr className="line__one" />
                                <hr className="line__two" />
                            </div>
                        </StyledHeaderLink>
                        
    {/*                     <div>
                            <StyledHeaderLink $buttonStyle={"cart"}> Buy Now </StyledHeaderLink>
                        </div> */}

                    </div>
                </StyledHeader>
                <StyledHeaderMobile>
                    <div className="container__header">

                        <div className="container__menuBurger" onClick={() => { setOpenModalBurger( !openModalBurger ) }}>
                            <figure>
                                <img src={Menu__Img} alt="Menu" />
                            </figure>
                        </div>

                        <div className="user">
                            <Link to={""} >
                                <figure>
                                    <img src={Favorite__Img} alt="Favorito" />
                                </figure>
                            </Link>

                            <Link to={""} className="user__enter">
                                <figure>
                                    <img src={Person__Img} alt="Login" />
                                </figure>
                            </Link>

                            <Link to={""} >
                                <figure>
                                    <img src={ShoppingCart__Img} alt="Carrinho" />
                                </figure>
                            </Link>
                        </div>

                    </div>

                    <Search />
                {/*  <hr />
                    <div className="container__search" >
                        <ul className="list__search">
                            <li>Products</li>
                            <li>Accessories</li>
                            <li>Male</li>
                            <li>Female</li>
                            <li>Children's</li>
                            <li>Intimate</li>
                            <li>Shoes</li>
                        </ul>
                    </div> */}
                </StyledHeaderMobile>

            </StyledHeaderContainer>
        </>
    );
};