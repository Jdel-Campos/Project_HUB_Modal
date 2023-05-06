import React from "react"
import { StyledProduct } from "./productsStyle"
import { ProductsColorList } from "../ColorProductsList/colorProductsList"

export const Product = ({ product }) => {
    return(
        <StyledProduct>
            <div>
                <div>
                    <figure>
                        <img src="" alt="Produto" />
                    </figure>
                </div>
                
                <div>
                    <figure>
                        <img src="" alt="Favorito" />
                    </figure>
                </div>
            </div>
            <div>
                <div>
                    <div> Launch </div>
                    <div> Tag </div>
                </div>
                <div>
                    <h3> Basic Unisex T-Shirt Short Sleeve World - White </h3>
                    <p> R$ 0,00 </p>
                </div>
                <div>
                    <h4> Color </h4>
                    <ProductsColorList />
                </div>
                <div>
                    <button> Add to Cart </button>
                    <button> Buy </button>
                </div>
            </div>
        </StyledProduct>
    )
}