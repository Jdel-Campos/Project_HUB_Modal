import styled from 'styled-components';

export const StyledInformation = styled.div`
    background-color: #E8E8E8;
/*     height: 245px; */

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
        padding-bottom: 15px;
        border-bottom: 3px solid white;

        div{
            display: flex;
            align-items: center;

            gap: 20px;  

            height: 50px;

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

            h4{
                width: 214px;
                height: 50px;

                font-weight: 400;
            }
        }

        a{
            color: #3d3d3d;
            text-decoration: none;

            font-weight: 700;
            font-size: 0.875rem;
        }
    }
`