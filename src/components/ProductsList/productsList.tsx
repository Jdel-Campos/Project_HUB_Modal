import React from "react"
import { StyledProductsList } from "./productsListStyle"
import { Product } from "./Products/products"

export const ProductsList = () => {
    const productsList = []

    return(
        <StyledProductsList>
            {productsList.map((product) => ( <Product key={product} product = {product} />))}
        </StyledProductsList>
    )
} 