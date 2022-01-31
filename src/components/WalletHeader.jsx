import React from 'react';
import { connect } from 'react-redux';

// requisito 9 consegui entender com ajuda do Vinicius Dionysio - Turma 13 - Tribo C e do Arthur Procópio;

function WalletHeader(prop) {
  const { email, expenses } = prop;
  return (
    <header>
      <h1 data-testid="email-field">{email}</h1>
      <h2 data-testid="total-field">
        {(expenses.reduce(
          (acc, cur) => acc + Number(cur.value
            * ((Number(cur.exchangeRates[cur.currency].ask)))),
          0,
        )).toFixed(2)}

      </h2>
      <h2 data-testid="header-currency-field">BRL</h2>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletHeader);
