import React from "react"
import { StyledSearchForm} from "./searchStyle"

export const Search = () => {
    return(
        <StyledSearchForm>
            <input type='text' placeholder='What can we help you with?' onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log(event) /* setEnteredValue(event.target.value) */} />
            <div>
                <figure>
                    <img src="" alt="Lupa" />
                </figure>
            </div>
        </StyledSearchForm>
    )
}