import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Michael Jackson',
      categoria: enums.Categoria.PESSOAL,
      email: 'michael.jackson@moonwalk.com',
      telefone: '+1 800 555 1212'
    },
    {
      id: 2,
      nome: 'Popó Freitas',
      categoria: enums.Categoria.PROFISSIONAL,
      email: 'popo@boxing.com',
      telefone: '+55 11 98765 4321'
    },
    {
      id: 3,
      nome: 'The Walt Disney Company',
      categoria: enums.Categoria.OUTROS,
      email: 'contato@disney.com',
      telefone: '+1 800 723 4763'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    alteraCategoria: (
      state,
      action: PayloadAction<{ id: number; categoria: enums.Categoria }>
    ) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato].categoria = action.payload.categoria
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraCategoria } =
  contatosSlice.actions

export default contatosSlice.reducer
