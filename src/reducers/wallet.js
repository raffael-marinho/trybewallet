// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SALVAR_MOEDAS,
  SOLICITA_FORMWALLET,
  DELETE_BTN,
  EDIT_BTN,
} from '../actions';

const formWalletState = {
  expenses: [],
  currencies: [],
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
      currencies: [...Object.keys(action.moedas)],
    };
  case DELETE_BTN:
    // console.log(action.id);
    // console.log(state.expenses);
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  case EDIT_BTN:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id !== action.payload.id) {
          return expense;
        }
        return { ...expense, ...action.payload };
      }),
    };
  default:
    return state;
  }
};

export default wallet;
