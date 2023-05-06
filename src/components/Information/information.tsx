import React from "react"
import { StyledInformation } from "./informationStyled"
import { Link } from "react-router-dom"

export const Information = () => {
    return(
        <StyledInformation>
            <div className="cards">
                <div>
                    <figure>
                        <img src="" alt="Emoji" />
                    </figure>
                    <h4> FREE SHIPPING* ABOVE R$299.99 </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src="" alt="Emoji" />
                    </figure>
                    <h4> Satisfaction Guarantee </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src="" alt="Emoji" />
                    </figure>
                    <h4> EXCLUSIVE OFFERS </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src="" alt="Emoji" />
                    </figure>
                    <h4> 15% OFF ON 1st PURCHASE </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src="" alt="Emoji" />
                    </figure>
                    <h4> UP TO 6X WITHOUT INTEREST </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
            <div className="cards">
                <div>
                    <figure>
                        <img src="" alt="Emoji" />
                    </figure>
                    <h4> Original Products </h4>
                </div>
                <Link to="" > Know more </Link>
            </div>
        </StyledInformation>
    )
}