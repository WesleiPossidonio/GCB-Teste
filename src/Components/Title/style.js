import styled, { css } from 'styled-components'

export const ContainerTitle = styled.h1`
  font-size: min(40px, 8vw);
  font-weight: 700;
  margin-bottom: 12px;
  color: #1d164d;

  @media (min-width: 1780px) {
    font-size: max(40px, 2vw);
  }

  ${({ textFont }) =>
    textFont &&
    css`
      font-size: min(30px, 3vw);

      @media (min-width: 1800px) {
        font-size: max(30px, 1.5vw);
        margin-bottom: 15px;
      }

      @media (max-width: 626px) {
        font-size: min(30px, 5.5vw);
      }
    `};
`
