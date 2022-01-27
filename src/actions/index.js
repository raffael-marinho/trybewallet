// Coloque aqui suas actions
// export const setUseState = 'setUseState';

import chamaApi from '../services/api';

// export const loginInput = (payload) => ({
//   type: setUseState,
//   payload,
// });
export const SOLICITA_EMAIL = 'SOLICITA_EMAIL';
const actionSolicitaEmail = (email) => ({ type: SOLICITA_EMAIL, email });
export default actionSolicitaEmail;

export const SOLICITA_FORMWALLET = 'SOLICITA_FORMWALLET';
export const actionSolicitaForm = (payload) => ({
  type: SOLICITA_FORMWALLET,
  payload,
});

export const SALVAR_MOEDAS = 'SALVAR_MOEDAS';
export const salvaMoedas = (moedas) => ({
  type: SALVAR_MOEDAS,
  moedas,
});

export const actionSalvaApi = () => async (dispatch) => {
  const retornoApi = await chamaApi();
  dispatch(salvaMoedas(retornoApi));
};
