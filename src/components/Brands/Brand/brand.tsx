import React from "react"
import { StyledBrand } from "./brandStyled"
import { Link } from "react-router-dom"

export const Brand = ({ brand }) => {
    
    return(
        <StyledBrand>
            <Link to={""}> 
                <figure>
                    <img src={brand.img} alt={brand.title} />
                </figure>
            </Link>
        </StyledBrand>
    )
}