import React from 'react';
import { connect } from 'react-redux';

function Tabela(prop) {
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
          {prop.expenses.map((expense, index) => (
            <tr key={ index }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>
                {(Math.round(((Number(expense.exchangeRates[expense.currency].high)
                  + Number(expense.exchangeRates[expense.currency].low)) / 2)
                  * 100) / 100).toFixed(2)}

              </td>
              <td>
                {((Math.floor(((Number(expense.exchangeRates[expense.currency].high)
                  + Number(expense.exchangeRates[expense.currency].low)) / 2)
                  * 100 * (expense.value)) / 100)).toFixed(2)}

              </td>
              <td>Real</td>
              <td>Editar/Excluir</td>
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

export default connect(mapStateToProps, null)(Tabela);
