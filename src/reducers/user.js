// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SOLICITA_EMAIL } from '../actions';

const loginState = {
  email: '',
  senha: '',
};

const user = (state = loginState, action) => {
  switch (action.type) {
  case SOLICITA_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
