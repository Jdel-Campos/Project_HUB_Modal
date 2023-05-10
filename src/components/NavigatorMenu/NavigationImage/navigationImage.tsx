import React from "react"
import { StyledNavigatorImage } from "./navigationImageStyled"
import { Link } from "react-router-dom"
import Best__Sellers__Img from "../../../assets/Best__Sellers__.jpg"
import Shop__Mens__Img from "../../../assets/Shop__Mens__.jpg"
import Shop__Women__Img from "../../../assets/Shop__Women__.jpg"
import Accessories from "../../../assets/Accessories__.jpg"

export const NavigatorMenuImage = () => {
    return(
        <StyledNavigatorImage>
            <div className="card">
                <figure>
                    <img src={Best__Sellers__Img} alt="Mais vendidos" />
                    <div className="card__name card__name--one">
                        <Link to={""}> Best Sellers </Link>
                    </div>
                </figure>
            </div>
            <div className="card">
                <figure>
                    <img src={Shop__Mens__Img} alt="Homems" />
                    <div className="card__name card__name--two">
                        <Link to={""}> Shop Men </Link>
                    </div>
                </figure>
            </div>
            <div className="card">
                <figure>
                    <img src={Shop__Women__Img} alt="Mulheres" />
                    <div className="card__name card__name--tree">
                        <Link to={""}> Shop Women </Link>
                    </div>
                </figure>
            </div>
            <div className="card">
                <figure>
                    <img src={Accessories} alt="Acessorios" />
                    <div className="card__name card__name--four">
                        <Link to={""}> Accessories </Link>
                    </div>
                </figure>
            </div>
        </StyledNavigatorImage>
    )
}