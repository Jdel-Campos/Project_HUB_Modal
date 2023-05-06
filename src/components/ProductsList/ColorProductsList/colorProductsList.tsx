import React from "react"
import { StyledColorProductsList } from "./colorProductsListStyled"
import { ProductsColor } from "./ColorProduct/colorProduct"

export const ProductsColorList = () => {
    const productsColorList = []

    return(
        <StyledColorProductsList>
            {productsColorList.map(( color ) => ( <ProductsColor key={ color } color = { color } />))}
        </StyledColorProductsList>
    )
} 