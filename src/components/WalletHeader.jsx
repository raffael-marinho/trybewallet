import React from 'react';
import '../style/Header.css';
import { connect } from 'react-redux';

// requisito 9 consegui entender com ajuda do Vinicius Dionysio - Turma 13 - Tribo C e do Arthur Procópio;

function WalletHeader(prop) {
  const { email, expenses } = prop;
  return (
    <header className="header">
      <h1 data-testid="email-field" className="color">{email}</h1>
      <div className="money">
        <div>
          <h2 data-testid="total-field" className="color">
            {(expenses.reduce(
              (acc, cur) => acc + Number(cur.value
                * ((Number(cur.exchangeRates[cur.currency].ask)))),
              0,
            )).toFixed(2)}
          </h2>
        </div>
        <div>
          <h2 data-testid="header-currency-field" className="color">BRL</h2>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletHeader);
