import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.cinzaClaro};
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const FiltroCard = styled.div`
  padding: 12px;
  background-color: #fff;
  border: 1px solid ${variaveis.azulClaroHover};
  border-radius: 8px;
  color: ${variaveis.azulClaroHover};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${variaveis.azulClaro};
  }
`
