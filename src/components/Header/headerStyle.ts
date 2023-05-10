import styled, { css } from 'styled-components';

interface IStyledLink {
    $buttonStyle: "week" | "cart";
  }

export const StyledHeaderContainer = styled.header`
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);

    position: relative;

`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 0 15px;
    height: 60px;

    background-color: #3d3d3d;

    position: relative;

    h1{
        font-family: 'Merienda', cursive;
        color: white;
        font-size: 1rem;
        font-weight: 400;
    }

    .header__fix{
        display: flex;
        align-items: center;
        gap: 150px;

        h4{
            color: white;
            font-size: 0.75rem;
        }
    }

    .line__one{
        width: 90px;

        position: absolute;
        top: 29px;
    }

    .line__two{
        width: 90px;

        position: absolute;
        top: 34px;
        right: 46px;
    }

    @media (min-width: 425px){
        padding: 0 40px;

        .line__two{
            right: 71px;
        }
    }

    @media (min-width: 450px){
        height: 80px;

        padding: 0 100px;

        h1{
            font-size: 2rem;

        }

        .header__fix{
            h4{
                font-size: 1rem;
            }
        }
    }

    @media (min-width: 728px){
        padding: 0 40px;

        .line__two{
            width: 130px;
            right: 71px;
        }
    }
`

export const StyledHeaderMobile = styled.div`
    margin-top: 5px;

/*     position: fixed;
    top: 0;

    z-index: 1;

    width: 100vw;
    height: 110px;

    background-color: white; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    
    a{
        color: #3d3d3d;
        text-decoration: none;
    }

    .container__header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 10px;

        width: 90%;

        .container__menuBurger{
            figure{
                width: 35px;
                height: 35px;

                img{
                    width: 35px;
                    height: 35px;
                }
            }
        }
    }
    
    .user{
        display: flex;
        align-items: center;
        justify-content: space-between;


        figure{
            height: 25px;
            width: 25px;

            img{
                height: 25px;
                width: 25px;
            }
        }
    }

    .user__enter{
        display: flex;
        align-items: center;
        justify-content: space-between;

        figure{
            height: 35px;
            width: 35px;

            img{
                height: 35px;
                width: 35px;
            }
        }
    }

    hr{
        margin: 0 125px; 
    }

    .container__search{
        margin-top: 15px;

        .list__search{
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            padding: 0 150px;

            cursor: pointer;
        }
    }

`

export const StyledLinkCSS = css<IStyledLink>`

    ${({ $buttonStyle }) => {
    switch ($buttonStyle) {
      case "week":
        return css`
            cursor: pointer;
        `;
      case "cart":
        return css`

            display: flex;
            align-items: center;
            justify-content: center;

            height: 30px;
            width: 10rem;

            border-radius: 50px;
            background-color: white;

            cursor: pointer;
        `;
    }
  }}

`

export const StyledHeaderLink = styled.a<IStyledLink>`

    ${StyledLinkCSS}

`