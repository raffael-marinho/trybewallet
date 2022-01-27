import React from 'react';

function Tabela() {
  return (
    <div>
      <table border="1">
        <tr>
          <td>Descrição</td>
          <td>Tag</td>
          <td>Método de pagamento</td>
          <td>Valor</td>
          <td>Moeda</td>
          <td>Câmbio utilizado</td>
          <td>Valor convertido</td>
          <td>Moeda de conversão</td>
        </tr>
      </table>
    </div>
  );
}

export default Tabela;
