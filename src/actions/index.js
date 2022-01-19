// Coloque aqui suas actions
// export const setUseState = 'setUseState';

// export const loginInput = (payload) => ({
//   type: setUseState,
//   payload,
// });
export const SOLICITA_EMAIL = 'SOLICITA_EMAIL';
const actionSolicitaEmail = (email) => ({ type: SOLICITA_EMAIL, email });
export default actionSolicitaEmail;
