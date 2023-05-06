import React from "react"
import { Link } from "react-router-dom"
import { StyledPayments } from "./paymentsStyled"

export const Payments = () => {

    return(
        <StyledPayments>
                <h3> Forms of Payment </h3>
                <ul>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src="" alt="Amex" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src="" alt="Master Card" />
                            </figure>
                        </Link>
                    </li>
                    <li> 
                        <Link to={""} > 
                            <figure>
                                <img src="" alt="Visa" />
                            </figure>
                        </Link>
                    </li>
                </ul>
        </StyledPayments>
    )
}