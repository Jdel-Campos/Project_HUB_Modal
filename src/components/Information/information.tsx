import React from "react"
import { StyledInformation } from "./informationStyled"
import { Link } from "react-router-dom"
import CreditCard from "../../assets/Image__CreditCard.svg"
import FastClock from "../../assets/Image__FastClock.svg"
import FreeDelivery from "../../assets/Image__FreeDelivery.svg"
import Money from "../../assets/Image__Money.svg"
import MoneyBack from "../../assets/Image__MoneyBack.svg"
import Satisfied from "../../assets/Image__Satisfied.svg"

export const Information = () => {
    return(
        <StyledInformation>
            <div className="cards">
                <div>
                    <figure>
                        <img src={FreeDelivery} alt="Emoji" />
                    </figure>
                    <h4> FREE SHIPPING* ABOVE R$299.99 </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src={Satisfied} alt="Emoji" />
                    </figure>
                    <h4> SATISFACTION GUARANTEE </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src={FastClock} alt="Emoji" />
                    </figure>
                    <h4> EXCLUSIVE OFFERS </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src={Money} alt="Emoji" />
                    </figure>
                    <h4> 15% OFF ON 1st PURCHASE </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src={CreditCard} alt="Emoji" />
                    </figure>
                    <h4> UP TO 6X WITHOUT INTEREST </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src={MoneyBack} alt="Emoji" />
                    </figure>
                    <h4> ORIGINAL PRODUCTS </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
        </StyledInformation>
    )
}