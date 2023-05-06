import React from "react"
import { StyledFooter, StyledFooterInformation } from "./footerStyle"
import { Information } from "./Information/information"
import { Network } from "./Network/network"
import { Payments } from "./Payments/payments"

export const Footer = () => {

    return(
        <StyledFooter>
            <StyledFooterInformation>
                <Information />
                <div>
                    <Network />
                    <Payments />
                </div>
            </StyledFooterInformation>
            <hr />
            <div className="footer_reserved">
                <h4> © 2022 HUB Modal - All rights reserved - CNPJ: 47.454.585/0001-83 </h4>
            </div>
        </StyledFooter>
    )
}