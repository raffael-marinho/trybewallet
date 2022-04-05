import React, { useState } from 'react';
import FormWallet from '../components/FormWallet';
import WalletHeader from '../components/WalletHeader';
import Tabela from '../components/Tabela';

function Wallet() {
  const [payload, setPayload] = useState();
  return (
    <div>
      <WalletHeader />
      <FormWallet payload={ payload } setPayload={ setPayload } />
      <Tabela setPayload={ setPayload } />
    </div>
  );
}

export default Wallet;
