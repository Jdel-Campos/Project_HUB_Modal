import styled from 'styled-components';

export const StyledSearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    border: 1px solid #3d3d3d;
    border-radius: 50px;
    padding-left: 10px;
    
    height: 40px;
    width: 90%;

    transition: 0.4s;

    margin-bottom: 15px;

    input {
        width: 100%;
        border: none;
    }

    input:focus {
        outline: none;
    }

        :has(input:focus) {

    }

    img{
        margin-right: 22px;
        margin-top: 5px;

        width: 20px;
        height: 20px;
    }

    @media (max-width: 425px){

    }
`;