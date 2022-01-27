import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actionSolicitaForm, salvaMoedas } from '../actions';
import chamaApi from '../services/api';

function FormWallet(prop) {
  const Alimentação = 'Alimentação';
  const CartãoDeCrédito = 'Cartão de crédito';

  const [despesas, setDespesas] = useState(0);
  const [descriçao, setDescriçao] = useState('');
  // const [moeda, setMoeda] = useState({});
  const [dinheiro, setDinheiro] = useState('USD');
  const [pagamento, setPagamento] = useState(CartãoDeCrédito);
  const [tag, setTag] = useState(Alimentação);

  const btnDespesas = async (event) => {
    event.preventDefault();
    const exchangeRates = await chamaApi();
    const id = prop.expenses.length;
    const payload = {
      value: despesas,
      description: descriçao,
      currency: dinheiro,
      method: pagamento,
      tag,
      exchangeRates,
      id,
    };
    prop.enviaForm(payload);
    setDespesas(0);
    setDescriçao('');
    setDinheiro('USD');
    setPagamento(CartãoDeCrédito);
    setTag(Alimentação);
  };

  async function chamaUseEffect() {
    const carregaApi = await chamaApi();
    return prop.enviaMoeda(carregaApi);
  }

  useEffect(() => {
    chamaUseEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form action="" onSubmit={ btnDespesas }>

      <input
        value={ despesas }
        type="text"
        data-testid="value-input"
        placeholder="valor da despesa"
        onChange={ (event) => setDespesas(event.target.value) }
      />

      <textarea
        value={ descriçao }
        type="text"
        data-testid="description-input"
        placeholder="descrição da despesa"
        onChange={ (event) => setDescriçao(event.target.value) }

      />

      <label htmlFor="moeda">
        moeda
        <select
          id="moeda"
          value={ dinheiro }
          type="text"
          data-testid="currency-input"
          placeholder="registrada a despesa"
          onChange={ (event) => setDinheiro(event.target.value) }
        >
          {Object.entries(prop.currencies).filter((grana) => grana[0] !== 'USDT')
            .map((grana, index) => (
              <option
                key={ index }
                value={ grana[0] }
                data-testid="USD"
              >
                {grana[1].code}
              </option>))}
        </select>
      </label>

      <label htmlFor="selectMetodo">
        método de pagamento
        <select
          value={ pagamento }
          name="select"
          data-testid="method-input"
          id="selectMetodo"
          onChange={ (event) => setPagamento(event.target.value) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value={ CartãoDeCrédito } selected>Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

      <label htmlFor="selectTag">
        Tag
        <select
          value={ tag }
          name="select"
          data-testid="tag-input"
          id="selectTag"
          onChange={ (event) => setTag(event.target.value) }
        >
          <option value={ Alimentação }>Alimentação</option>
          <option value="Lazer" selected>Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>

      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  enviaForm: (payload) => dispatch(actionSolicitaForm(payload)),
  enviaMoeda: (moedas) => dispatch(salvaMoedas(moedas)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
