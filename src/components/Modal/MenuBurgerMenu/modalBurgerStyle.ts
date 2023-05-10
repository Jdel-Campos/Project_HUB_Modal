import styled from 'styled-components';

export const StyledBurgerContainer = styled.div`
    width: 70vw;
    height: 100vh;

    background-color: white;

    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);

    .separation__line{
        margin: 0 15px;

        border-bottom: 1px solid #3d3d3d2d;
        background-color: #3d3d3d2d;
    }

`
/* 
export const StyledBurgerBackground = styled.div`
    height: 100vh;
    width: 90vw;

    background-color: rgb(61 61 61 / 50%);

    z-index: 1;

`
*/

export const StyledBurgerDialog = styled.dialog`

`

export const StyledBurgerHeader = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    background-color: #3d3d3d;

    .user__header{
        width: 125px;

        display: flex;
        gap: 8px;

        figure{
            height: 35px;
            width: 35px;

            img{
                height: 35px;
                width: 35px;
            }
        }

        h3{
            color: white;
            font-size: 0.75rem;
        }
    }

    .onClose{

        figure{
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            color: white;
            justify-content: center;

            img{
                color: white;

                height: 30px;
                width: 30px;
            }
        }
    }


`

export const StyledBurgerBody = styled.div`

    a{
        color: #3d3d3d;
        text-decoration: none;
    }

    ul{
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        margin: 15px 0 20px;

        li{
            border-bottom: 1px solid #3d3d3d1d;

            width: 90%;
            height: 50px;

            display: flex;
            align-items: center;
        }
    }

`

export const StyledBurgerUser = styled.div`
    padding-left: 15px;
    margin-top: 25px;

    a{
        display: flex;
        align-items: center;
        gap: 5px;

        color: #3d3d3d;
        text-decoration: none;

        figure{
            height: 25px;
            width: 25px;

            img{
                height: 25px;
                width: 25px;
            }
        }

        h3{
            display: flex;
            align-items: center;

            height: 25px;
        }
    }

    ul{
        li{
            height: 40px;
        }
    }

    .button__exit{
        height: 30px;
        width: 100px;

        background-color: transparent;
        border: none;

        display: flex;

        font-size: 18px;
        font-weight: 600;
        color: #3d3d3d;
        
        padding: 0;
        margin-top: 20px;
    }
`

