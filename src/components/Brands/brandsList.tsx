import React from "react"
import { StyledBrandList } from "./brandsListStyle"
import { Brand } from "./Brand/brand"

export const BrandList = () => {
    const brandsList = []

    return(
        <StyledBrandList>
                {brandsList.map((brand) => ( <Brand key={brand} brand = {brand} /> ))}
        </StyledBrandList>
    )
}