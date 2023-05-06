import React from "react"
import { StyledHelp, StyledInformation, StyledInstitutional } from "./informationStyled"
import { Link } from "react-router-dom"

export const Information = () => {

    return(
        <StyledInformation>
            <StyledHelp>
                <h3> Help </h3>
                <ul>
                    <li> 
                        <Link to={""} > Delivery </Link>
                    </li>
                    <li>
                        <Link to={""} > Return </Link>
                    </li>
                    <li> 
                        <Link to={""} > Payment </Link>
                    </li>
                    <li>
                        <Link to={""} > Security </Link>
                    </li>
                    <li> 
                        <Link to={""} > My Account </Link>
                    </li>
                    <li>
                        <Link to={""} > My Orders </Link>
                    </li>
                </ul>
            </StyledHelp>

            <StyledInstitutional>
                <h3> Institutional </h3>
                <ul>
                    <li> 
                        <Link to={""} > About HUB Modal </Link>
                    </li>
                    <li>
                        <Link to={""} > Work with us </Link>
                    </li>
                    <li> 
                        <Link to={""} > Privacy Policy </Link>
                    </li>
                    <li>
                        <Link to={""} > Terms and conditions of use </Link>
                    </li>
                </ul>
            </StyledInstitutional>

        </StyledInformation>
    )
}