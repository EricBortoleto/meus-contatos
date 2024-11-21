import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.azulClaroHover};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${variaveis.azulEscuro};
    transform: translateY(-4px);
  }
`
