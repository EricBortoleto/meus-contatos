import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
  parametro: 'categoria'
}

export const Card = styled.div`
  background-color: ${variaveis.cinzaClaro};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  width: 80%;

  label {
    display: flex;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;

  span {
    margin-left: 12px;
    font-size: 14px;
    color: ${variaveis.azulClaro};
    font-weight: 600;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${variaveis.cinzaEscuro};
    font-size: 16px;
  }

  select {
    background-color: transparent;
    border: none;
    font-size: 14px;
    border-bottom: 1px solid ${variaveis.cinzaEscuro};
  }
`

export const Descricao = styled.textarea`
  color: ${variaveis.cinzaEscuro};
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 50%;
  resize: none;
  border: none;
  background-color: transparent;
  margin-bottom: 12px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
