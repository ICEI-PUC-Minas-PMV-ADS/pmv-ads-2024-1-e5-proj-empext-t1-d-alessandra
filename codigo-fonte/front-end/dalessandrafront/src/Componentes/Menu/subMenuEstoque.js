import more from'../../img/more-information.png'
import React from 'react';
import ModalEditarQuantidade from '../Modal/ModiasEstoque/modalEditarQuantidade';
import ModalAtualizarValorVenda from '../Modal/ModiasEstoque/modalAtualizarValorVenda';
import ModalAtualizarValorCompra from '../Modal/ModiasEstoque/modalAtualizarValorCompra';
function SubMenuEstoque({id}) {
  return (
    <div class="dropdown dropdown-left dropdown-hover">
        <div tabindex="0" role="button" class=""><img src={more} class="h-8 w-8" fill="none" viewBox="0 0 34 34"/></div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><ModalEditarQuantidade id={id}/></li>
        <li><ModalAtualizarValorVenda id={id}/></li>
        <li><ModalAtualizarValorCompra id={id}/></li>
        </ul>
    </div>
  );
} export default SubMenuEstoque;