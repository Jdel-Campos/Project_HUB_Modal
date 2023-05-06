import React from "react";
import { StyledHeaderContainer, StyledHeader, StyledHeaderMobile, StyledHeaderLink } from "./headerStyle";
import { BannerWritten } from "../Banners/BannerWritten/bannerWritten";
import { Search } from "./SearchForm/search";


export const Header = () => {
    return(
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
                    
                    <div>
                        <StyledHeaderLink $buttonStyle={"cart"}> Buy Now </StyledHeaderLink>
                    </div>

                </div>
            </StyledHeader>
            <StyledHeaderMobile>
                <div className="container__header">
                    <figure>
                        <img className="logo" src="" alt="Logo" />
                    </figure>
                    <Search />
                    <div className="user">
                        <figure>
                            <img src="" alt="Favorito" />
                        </figure>
                        <div className="user__enter">
                            <figure>
                                <img src="" alt="Login" />
                            </figure>
                            <div>
                                <p>Login /</p>
                                <p>Cadastro</p>
                            </div>
                        </div>
                        <figure>
                            <img src="" alt="Carrinho" />
                        </figure>
                    </div>
                </div>
                <hr />
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
                </div>
            </StyledHeaderMobile>

        </StyledHeaderContainer>
    );
};