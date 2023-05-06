import React from 'react';
import { ForwardedRef, forwardRef } from 'react';
import { StyledInputContainer, StyledParagraph } from './inputStyle';
import { IInputProps } from './type';

 
const Input =  forwardRef(({ label, error, ...rest } : IInputProps, ref: ForwardedRef<HTMLInputElement> ) => {
    return(
        <div>
            <StyledInputContainer>
                <input ref = { ref } { ...rest }/>
                {label ? <label>{label}</label>: null}
            </StyledInputContainer>
            { error ? <StyledParagraph fontColor='red'>{error.message}</StyledParagraph> : null }
        </div>
    )
  })
  
  export default Input;