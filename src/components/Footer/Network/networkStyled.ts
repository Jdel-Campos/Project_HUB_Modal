import styled from 'styled-components';

export const StyledNetwork = styled.div`
    margin-top: 30px;
    
    h3{
        font-size: 1.125rem;
        font-weight: 600;

        margin-bottom: 15px;
    }

    ul{
        display: flex;
        gap: 10px;
    }

    figure{
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            height: 100px;
            width: 100px;
        }
    }
`