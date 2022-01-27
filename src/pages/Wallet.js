import React from 'react';
import FormWallet from '../components/FormWallet';
import WalletHeader from '../components/WalletHeader';
import Tabela from '../components/Tabela';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <FormWallet />
        <Tabela />
      </div>
    );
  }
}

export default Wallet;
