import React from 'react';
import { connect } from 'react-redux';

function WalletHeader(prop) {
  const { email, expenses } = prop;
  const tira1 = 0.01;
  return (
    <header>
      <h1 data-testid="email-field">{email}</h1>
      <h2 data-testid="total-field">
        {(expenses.reduce(
          (acc, cur) => acc + Number(cur.value
            * ((Number(cur.exchangeRates[cur.currency].high)
              + Number(cur.exchangeRates[cur.currency].low)) / 2)),
          0,
        ) - tira1).toFixed(2)}

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
