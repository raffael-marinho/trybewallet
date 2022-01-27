import React, { useState } from 'react';
import '../style/LoginForm.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import actionSolicitaEmail from '../actions/index';

// feito com ajuda do Vinicios Tanaka, Arthur Procopio, Samanta Below

function LoginForm(prop) {
  const valor6 = 6;

  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  const [email, setEmail] = useState('');

  const [senha, setSenha] = useState('');

  const history = useHistory();

  function usebutton(event) {
    prop.enviaEmail(email);
    event.preventDefault();
    history.push('/carteira');
  }

  return (
    <form className="container" onSubmit={ usebutton }>
      <div className="box">
        <div>
          <img
            className="img"
            src="https://theme.zdassets.com/theme_assets/9633455/9814df697eaf49815d7df109110815ff887b3457.png"
            alt="trybe"
          />
        </div>
        <div className="input1">
          <input
            placeholder="Email"
            value={ email }
            type="email"
            data-testid="email-input"
            onChange={ (event) => setEmail(event.target.value) }
          />
        </div>
        <div className="input2">
          <input
            placeholder="Senha"
            value={ senha }
            type="password"
            data-testid="password-input"
            onChange={ (event) => setSenha(event.target.value) }
            minLength="6"
          />
        </div>
        <div>
          <button
            disabled={ senha.length < valor6 || !email.match(regex) }
            className="button"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </div>
    </form>
  );
}

// const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  enviaEmail: (email) => dispatch(actionSolicitaEmail(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
