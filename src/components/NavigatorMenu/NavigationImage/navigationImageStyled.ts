import styled from 'styled-components';

export const StyledNavigatorImage = styled.div`
    padding: 25px 20px;
    max-width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    figure{
        width: 100%;

        border-radius: 10px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        box-shadow: 0px 100px 100px rgba(0, 0, 0, 0.1);
    }

    .card{
        width: 22%;

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 80px;
            height: 80px;

            border-radius: 50%;
            background-size: cover;

        }

        :hover{
            box-shadow: 0px 100px 100px rgba(0, 0, 0, 0.1);
            border-radius: 10px;

            img{
                opacity: 40%;
            }
    }
    }

    .card__name{
        margin-top: 10px;
        
        height: 30px;
        width: 90px;

        border: 1px solid #3d3d3d;
        border-radius: 10px;
        background-color: white;

        font-size: 0.75rem;
        font-weight: 400;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        a{
            color: #3d3d3d;
            text-decoration: none;
        }

        :hover{

            border: 1px solid rgb(232 232 232);
            background-color: rgb(232 232 232);
        }
    }


/*     @media(max-width: 800px){ 
        .card{
            height: 103px;

            img{

                height: 103px;
            }
            
        }

        .card__name{
            height: 30px;
            width: 80px;

            font-size: 0.5rem;
            font-weight: 400;
        }
    }

    @media(max-width: 1024px){ 
        .card{
            height: 145px;

            img{

                height: 145px;
            }
            
        }

        .card__name{
            height: 40px;
            width: 100px;

            font-size: 0.8rem;
            font-weight: 400;
        }
    } */

`