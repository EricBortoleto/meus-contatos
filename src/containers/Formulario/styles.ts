import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.cinzaEscuro};
  display: flex;
  flex-direction: column;
  gap: 16px;

  textarea {
    resize: none;
    margin: 16px 0;
    height: 183px;
    border: 1px solid ${variaveis.azulClaroHover};
    background-color: #fff;
    padding: 8px;
    border-radius: 8px;
    color: ${variaveis.cinzaEscuro};
    font-family: 'Roboto', sans-serif;
    transition: border-color 0.3s ease;
    width: 100%;

    &:focus {
      border-color: ${variaveis.azulClaro};
    }
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    color: ${variaveis.cinzaEscuro};
    font-weight: bold;
  }

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const Opcao = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: capitalize;
  color: ${variaveis.azulClaroHover};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  label {
    font-weight: 600;
  }

  input {
    margin: 0;
  }
`

// Ajustando o estilo dos campos de input
export const Campo = styled.input`
  padding: 12px 16px;
  font-size: 14px;
  color: ${variaveis.cinzaEscuro};
  border: 1px solid ${variaveis.cinzaClaro2};
  border-radius: 8px;
  margin-bottom: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${variaveis.azulClaro};
  }

  &::placeholder {
    color: ${variaveis.cinzaClaro};
  }
`

export const BotaoSalvar = styled.button`
  padding: 12px 16px;
  background-color: ${variaveis.azulClaro};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${variaveis.azulClaroHover};
  }
`
