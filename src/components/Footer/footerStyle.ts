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

        padding: 0 50px;

        h4{
            font-size: 0.875rem;
            font-weight: 300;
        }
    }

`

export const StyledFooterInformation = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;


    background-color: #E8E8E8;
`