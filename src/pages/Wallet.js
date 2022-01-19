import React from 'react';
import { connect } from 'react-redux';

function Wallet(prop) {
  return (
    <header>
      <h1 data-testid="email-field">{prop.email}</h1>
    </header>
  );
}

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps, null)(Wallet);
