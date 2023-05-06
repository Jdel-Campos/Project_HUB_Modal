import React from "react"
import { Item } from "./Item/item"
import { StyledItemList } from "./itemListStyled"
import { dataBase } from "./dataBase"



export const ItemList = () => {
    const itemList = dataBase

    return(
        <StyledItemList>
                {itemList.map((item) => ( <Item key={item.id} item = {item} /> ))}
        </StyledItemList>
    )
}