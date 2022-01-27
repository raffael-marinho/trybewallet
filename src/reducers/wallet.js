// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SALVAR_MOEDAS, SOLICITA_FORMWALLET } from '../actions';

const formWalletState = {
  expenses: [],
  currencies: {},
};

const wallet = (state = formWalletState, action) => {
  switch (action.type) {
  case SOLICITA_FORMWALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case SALVAR_MOEDAS:
    return {
      ...state,
      currencies: { ...action.moedas },
    };
  default:
    return state;
  }
};

export default wallet;
