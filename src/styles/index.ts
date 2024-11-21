import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${variaveis.cinzaClaro};
    color: ${variaveis.cinzaEscuro};
    font-size: 14px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  gap: 16px;
  height: 100vh;
`

export const MainContainer = styled.main`
  padding: 20px 40px;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 16px;
`

export const Titulo = styled.h2`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${variaveis.azulClaro};
`

export const Campo = styled.input`
  border-radius: 8px;
  font-weight: bold;
  background-color: #fff;
  padding: 12px 16px;
  color: ${variaveis.cinzaEscuro};
  border: 1px solid ${variaveis.cinzaClaro2};
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${variaveis.azulClaroHover};
  }
`

export const Botao = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulClaro};
  border-radius: 8px;
  margin-right: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${variaveis.azulClaroHover};
  }

  &:disabled {
    background-color: ${variaveis.cinzaClaro2};
    cursor: not-allowed;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
  &:hover {
    background-color: ${variaveis.verdeEscuro};
  }
`

export default EstiloGlobal
