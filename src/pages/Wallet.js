import React from 'react';
import FormWallet from '../components/FormWallet';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
