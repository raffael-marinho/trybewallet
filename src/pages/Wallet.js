import React, { useState } from 'react';
import FormWallet from '../components/FormWallet';
import WalletHeader from '../components/WalletHeader';
import Tabela from '../components/Tabela';

// class Wallet extends React.Component {
//   render() {
//     return (
//       <div>
//         <WalletHeader />
//         <FormWallet />
//         <Tabela />
//       </div>
//     );
//   }
// }
function Wallet() {
  // const [id, setId] = useState();
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
