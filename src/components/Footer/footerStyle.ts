import styled from 'styled-components';

export const StyledFooter = styled.div`
    hr{
        margin: 0;
        border: 2px solid white;


    }

    .footer_reserved{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 70px;
        background-color: #E8E8E8;

        h4{
            font-size: 1.25rem;
            font-weight: 300;
        }
    }

`

export const StyledFooterInformation = styled.div`
    display: flex;
    justify-content: space-around;

    height: 350px;

    background-color: #E8E8E8;
`