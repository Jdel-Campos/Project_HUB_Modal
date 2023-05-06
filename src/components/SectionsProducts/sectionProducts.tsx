import React from "react"
import { StyledSectionProducts } from "./sectionProductsStyled"
import { ProductsList } from "../ProductsList/productsList"

export const SectionProducts = ({ title }) => {
    return(
        <StyledSectionProducts>
            <h2>{ title }</h2>
            <div className="cards">
                <ProductsList />
                <ProductsList />
                <ProductsList />
                <ProductsList />
                <ProductsList />

            </div>
        </StyledSectionProducts>
    )
}