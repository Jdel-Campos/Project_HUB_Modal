import styled from 'styled-components';

export const StyledSearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    border: 1px solid #3d3d3d;
    border-radius: 50px;
    padding-left: 10px;
    
    height: 50px;
    width: 800px;

    transition: 0.4s;

    input {
        width: 100%;
        border: none;
    }

    input:focus {
        outline: none;
    }

    :has(input:focus) {

  }
`;