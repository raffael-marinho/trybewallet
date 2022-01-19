import React from 'react';
import { connect } from 'react-redux';

function Wallet(prop) {
  const { email } = prop;
  return (
    <header>
      <h1 data-testid="email-field">{email}</h1>
      <h2 data-testid="total-field">0</h2>
      <h2 data-testid="header-currency-field">BRL</h2>
    </header>
  );
}

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps, null)(Wallet);
