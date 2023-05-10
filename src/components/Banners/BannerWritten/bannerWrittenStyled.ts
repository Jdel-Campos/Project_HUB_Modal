import styled from 'styled-components';

export const StyledBannerWritten = styled.div`
    padding: 0 15px;

    height: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: unset;
    

    h4{
        font-family: 'EB Garamond', serif;
        font-size: 1rem;
        font-weight: 400;
    }

    span{
        font-family: 'EB Garamond', serif;
        font-size: 1rem;
        font-weight: 700;
    }

    a{
        color: #3d3d3d;
        font-family: 'EB Garamond', serif;
        font-size: 1rem;
        font-weight: 400;
    }

    @media (min-width: 450px){
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        gap: 5px;

        height: 40px;
    }
`