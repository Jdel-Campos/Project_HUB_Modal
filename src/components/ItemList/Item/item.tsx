import React from "react"
import { StyledItem } from "./itemStyled"
import { Link } from "react-router-dom"

export const Item= ({ item }) => {
    
    return(
        <StyledItem>
            <Link to={""} > {item} </Link>
        </StyledItem>
    )
}