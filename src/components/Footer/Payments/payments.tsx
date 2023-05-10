import React from "react"
import { StyledPayments } from "./paymentsStyled"

export const Payments = () => {

    return(
        <StyledPayments>
                <h3> Forms of Payment </h3>
                <ul>
                    <li> 
                        <figure>
                            <img src="" alt="Amex" />
                        </figure>
                    </li>
                    <li> 
                        <figure>
                            <img src="" alt="Master Card" />
                        </figure>
                    </li>
                    <li> 
                        <figure>
                            <img src="" alt="Visa" />
                         </figure>
                    </li>
                </ul>
        </StyledPayments>
    )
}