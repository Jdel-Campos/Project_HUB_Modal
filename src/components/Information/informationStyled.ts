import styled from 'styled-components';

export const StyledInformation = styled.div`
    background-color: #E8E8E8;
    height: 245px;

    padding: 10px 70px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    .cards{
        width: 410px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;  

        div{
            display: flex;
            align-items: center;

            gap: 10px;  

            h4{
                width: 214px;
                height: 50px;
            }
        }
    }
`