import React from "react"
import { StyledNetwork } from "./networkStyled"
import { Link } from "react-router-dom"

export const Network = () => {

    return(
        <StyledNetwork>
                <h3> Networks </h3>
                <ul>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src="" alt="Facebook" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src="" alt="Instagram" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src="" alt="TikTok" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src="" alt="Twitter" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src="" alt="YouTube" />
                            </figure>
                        </Link>
                    </li>
                </ul>
        </StyledNetwork>
    )
}