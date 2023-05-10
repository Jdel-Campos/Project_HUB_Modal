import React from "react"
import { StyledSearchForm} from "./searchStyle"
import Search__Img from "../../../assets/Image__Lupa__.png"

export const Search = () => {
    return(
        <StyledSearchForm>
            <input type='text' placeholder='What can we help you with?' onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event) /* setEnteredValue(event.target.value) */} />
            <div>
                <figure>
                    <img src={Search__Img} alt="Lupa" />
                </figure>
            </div>
        </StyledSearchForm>
    )
}