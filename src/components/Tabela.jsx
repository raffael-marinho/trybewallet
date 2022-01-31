import React from 'react';
import { connect } from 'react-redux';
import { deleteButton, editButton } from '../actions';
// a questao 8 foi feita com ajuda do Arthur Procopio
function Tabela(prop) {
  const funcBtnExclui = (id) => {
    prop.excluiBtn(id);
  };

  const funcBtnEdit = (expense) => {
    prop.setPayload(expense);
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {prop.expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              {/* <td><input type="text" value={ expense.description } /></td> */}
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
              <td>
                {(Math.round((Number(expense.exchangeRates[expense.currency].ask)
                  + Number.EPSILON) * 100) / 100).toFixed(2)}

              </td>
              <td>
                {((Math.floor(((Number(expense.exchangeRates[expense.currency].ask)
                  + Number.EPSILON))
                  * 100 * (expense.value)) / 100)).toFixed(2)}

              </td>
              <td>Real</td>
              <td>
                <button
                  onClick={ () => funcBtnEdit(expense) }
                  type="button"
                  data-testid="edit-btn"
                >
                  Editar
                </button>

                <button
                  onClick={ () => funcBtnExclui(expense.id) }
                  type="button"
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  excluiBtn: (id) => dispatch(deleteButton(id)),
  editBtn: (id) => dispatch(editButton(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
