import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { actionSolicitaForm, editButton, salvaMoedas } from '../actions';
import chamaApi from '../services/api';

function FormWallet(prop) {
  const Alimentação = 'Alimentação';
  const CartãoDeCrédito = 'Cartão de crédito';

  const [despesas, setDespesas] = useState(0);
  const [descriçao, setDescriçao] = useState('');
  // const [id, setId] = useState();
  const [dinheiro, setDinheiro] = useState('USD');
  const [pagamento, setPagamento] = useState(CartãoDeCrédito);
  const [tag, setTag] = useState(Alimentação);

  const btnDespesas = async (event) => {
    event.preventDefault();
    const exchangeRates = await chamaApi();
    // if (id === undefined) {
    //   console.log(id);
    //   setId(prop.expenses.length);
    //   console.log(id);
    // }
    const id = prop?.payload?.id !== undefined ? prop?.payload?.id
      : prop.expenses[prop.expenses.length - 1]?.id + 1 || 0;
    const payload = {
      value: despesas,
      description: descriçao,
      currency: dinheiro,
      method: pagamento,
      tag,
      exchangeRates,
      id,
    };
    console.log(payload);
    if (prop?.payload?.id !== undefined) {
      prop.editForm(payload);
    } else { prop.enviaForm(payload); }
    setDespesas(0);
    setDescriçao('');
    setDinheiro('USD');
    setPagamento(CartãoDeCrédito);
    setTag(Alimentação);
    prop.setPayload(undefined);
    // console.log(prop.setPayload);
  };

  const Dispatch = useDispatch();

  // useEffect(() => {
  //   if (prop?.payload?.id) {
  //     setId(prop?.payload?.id);
  //   }
  //   console.log(prop.payload);
  // }, [prop.payload]);

  useEffect(() => {
    if (prop.payload) {
      const {
        value,
        description,
        currency,
        method,
      } = prop.payload;
      setDespesas(value);
      setDescriçao(description);
      setDinheiro(currency);
      setPagamento(method);
      setTag(prop.payload.tag);
    }
  }, [prop.payload]);

  useEffect(() => {
    async function chamaUseEffect() {
      const carregaApi = await chamaApi();
      return Dispatch(salvaMoedas(carregaApi));
    }
    chamaUseEffect();
  }, [Dispatch]);

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
          {Object.keys(prop.currencies).filter((grana) => grana !== 'USDT')
            .map((grana) => {
              console.log(grana);
              return (
                <option
                  key={ grana }
                  value={ grana }
                  data-testid="USD"
                >
                  {grana}
                </option>);
            })}
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

      <button type="submit">
        {prop?.payload?.id !== undefined
          ? 'Editar despesa'
          : 'Adicionar despesa'}

      </button>
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
  editForm: (payload) => dispatch(editButton(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
