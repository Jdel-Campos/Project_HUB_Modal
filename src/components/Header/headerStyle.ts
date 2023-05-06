import styled, { css } from 'styled-components';

interface IStyledLink {
    $buttonStyle: "week" | "cart";
  }

export const StyledHeaderContainer = styled.header`
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);

`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 80px;

    padding: 0 100px;
    background-color: #3d3d3d;

    position: relative;

    h1{
        font-family: 'Merienda', cursive;
        color: white;
        font-size: 2rem;
        font-weight: 400;
    }

    .header__fix{
        display: flex;
        align-items: center;
        gap: 150px;

        h4{
            color: white;
        }
    }

    .line__one{
        width: 130px;

        position: absolute;
        top: 42px;
    }

    .line__two{
        width: 130px;

        position: absolute;
        top: 47px;
        right: 440px;
    }
`

export const StyledHeaderMobile = styled.div`

    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .container__header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 100px;
        margin-bottom: 15px;
    }

    .logo{
        height: 60px;
        width: 60px;
    }
    
    .user{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .user__enter{
        display: flex;
        align-items: center;
        justify-content: space-between;
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