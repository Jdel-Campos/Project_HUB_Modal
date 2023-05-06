import React from "react"
import { StyledNavigatorImage } from "./navigationImageStyled"
import { Link } from "react-router-dom"

export const NavigatorMenuImage = () => {
    return(
        <StyledNavigatorImage>
            <div className="card">
                <figure>
                    <img src="" alt="Mais vendidos" />
                    <div className="card__name card__name--one">
                        <Link to={""}> Best Sellers </Link>
                    </div>
                </figure>
            </div>
            <div className="card">
                <figure>
                    <img src="" alt="Homems" />
                    <div className="card__name card__name--two">
                        <Link to={""}> Shop Men </Link>
                    </div>
                </figure>
            </div>
            <div className="card">
                <figure>
                    <img src="" alt="Mulheres" />
                    <div className="card__name card__name--tree">
                        <Link to={""}> Shop Women </Link>
                    </div>
                </figure>
            </div>
            <div className="card">
                <figure>
                    <img src="" alt="Acessorios" />
                    <div className="card__name card__name--four">
                        <Link to={""}> Accessories </Link>
                    </div>
                </figure>
            </div>
        </StyledNavigatorImage>
    )
}