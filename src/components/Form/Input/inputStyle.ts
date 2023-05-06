import styled, { css } from 'styled-components';

interface IStyledParagraphProps {
    fontColor?: 'gray' | 'red';
    textAlign?: 'center' | 'left' | 'right';
  }

export const StyledFieldset = styled.div`

`;

export const StyledInputContainer = styled.div`
  width: 100%;
  height: 3.75rem;
  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 0.5rem;

  font-family: ${({ theme }) => theme.fonts.primary};

  input {
    border-radius: 0.5rem;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    padding: 0.9375rem;
  }

  label {
    background-color: ${({ theme }) => theme.colors.white};
    height: 100%;
    position: absolute;
    top: 0px;
    left: 12px;

    display: flex;
    align-items: center;

    font-size: 1rem;
    transition: top 0.5s, left 0.3s ease-out;
  }

  input:is(:focus, :not(:placeholder-shown)) + label {
    top: -10px;
    left: 12px;

    height: fit-content;
    width: fit-content;

    padding: 0.1875rem 0.625rem;
    border-radius: 14px;

    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
  }
`;

export const StyledParagraph = styled.p<IStyledParagraphProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;

  text-align: ${({ textAlign }) => textAlign};

  ${({ fontColor, theme }) => {
    switch (fontColor) {
      case 'gray':
        return css`
          color: ${theme.colors.gray300};
        `;
      case 'red':
        return css`
          color: ${theme.colors.feedback.negative};
        `;
      default:
        return css`
          color: ${theme.colors.gray600};
        `;
    }
  }}

  strong {
    font-weight: 600;
  }
`;