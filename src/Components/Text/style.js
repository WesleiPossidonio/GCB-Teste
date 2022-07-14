import styled, { css } from 'styled-components'

export const ContainerText = styled.p`
  font-size: min(18px, 3.8vw);
  font-weight: 300;
  color: #999db2;
  text-align: center;
  margin-top: none;

  ${({ textAlign }) =>
    textAlign &&
    css`
      font-size: min(18px, 2.2vw);
      text-align: justify;
      margin-top: 15px;

      @media (min-width: 1780px) {
        font-size: max(18px, 0.8vw);
        margin-bottom: 15px;
      }

      @media (max-width: 626px) {
        font-size: min(18px, 3.8vw);
      }
    `};
`
