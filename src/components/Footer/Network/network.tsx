import React from "react"
import { StyledNetwork } from "./networkStyled"
import { Link } from "react-router-dom"
import Instagram from "../../../assets/Image__Instagram.svg"
import Facebook from "../../../assets/Image__Facebook.svg"
import TikTok from "../../../assets/Image__TikTok.svg"
import Twitter from "../../../assets/Image__Twitter.svg"
import Youtube from "../../../assets/Image__Youtube.svg"

export const Network = () => {

    return(
        <StyledNetwork>
                <h3> Networks </h3>
                <ul>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src={Facebook} alt="Facebook" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src={Instagram} alt="Instagram" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src={TikTok} alt="TikTok" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src={Twitter} alt="Twitter" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src={Youtube} alt="YouTube" />
                            </figure>
                        </Link>
                    </li>
                </ul>
        </StyledNetwork>
    )
}