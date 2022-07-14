import styled from 'styled-components'

export const ContainerForm = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-areas:
    'name name'
    'date cpf'
    'email email'
    'password confirmPassword'
    'cep cep'
    'street  addressNumber'
    'district district '
    'city uf';

  align-items: center;
  gap: 10px;
  margin-top: 15px;

  .name {
    grid-area: name;
  }

  .date {
    grid-area: date;
  }

  .cpf {
    grid-area: cpf;
  }

  .email {
    grid-area: email;
  }

  .password {
    grid-area: password;
  }

  .confirmPassword {
    grid-area: confirmPassword;
  }

  .cep {
    grid-area: cep;
  }

  .street {
    grid-area: street;
  }

  .addressNumber {
    grid-area: addressNumber;
  }

  .comprement {
    grid-area: comprement;
  }

  .district {
    grid-area: district;
  }

  .city {
    grid-area: city;
  }

  .uf {
    grid-area: uf;
  }

  @media (max-width: 459px) {
    width: 70%;
    align-items: center;
    margin-left: 3em;
    gap: 1em;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 0.5rem;
  border: none;
  border-bottom: ${({ error }) =>
    error ? '1px solid #cc1717' : '1px solid #badc50'};
  color: #5c5c5c;
`

export const TextError = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  padding-bottom: 20px;
  padding-left: 8px;
  color: #cc1717;
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 10em;
  margin-top: 10em;

  @media (max-width: 459px) {
    gap: 5em;
    margin-left: 3em;
    margin-top: 11em;
  }

  @media (max-width: 420px) {
    margin-left: 0;
    padding: 0 2em;
    gap: 5em;
  }
`
