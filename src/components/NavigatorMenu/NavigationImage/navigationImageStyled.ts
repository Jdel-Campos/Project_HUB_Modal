import styled from 'styled-components';

export const StyledNavigatorImage = styled.div`
    margin: 20px 70px 36px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    figure{
        width: 280px;
        height: 273px;

        border: 1px solid rgb(61 61 61 / 90%);
        border-radius: 10px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    }

    .cards{
        width: 280px;
        height: 273px;

        border: 1px solid rgb(61 61 61 / 90%);

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 280px;
            height: 273px;

            border: 1px solid rgb(61 61 61 / 90%);
        }
    }

    .card__name{
        height: 50px;
        width: 150px;

        border: 1px solid rgb(61 61 61 / 90%);
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;

        cursor: pointer;
    }

    .card__name--one{
        bottom: 20px;
    }
    .card__name--two{
        bottom: 20px;
    }
    .card__name--tree{
        bottom: 20px;
    }
    .card__name--four{
        bottom: 20px;
    }
`