import more from'../../img/more-information.png'
import ModalEditarQuantidade from '../Modal/ModiasEstoque/modalEditarQuantidade';
function SubMenuEstoque({id}) {
  return (
    <div class="dropdown dropdown-left dropdown-hover">
        <div tabindex="0" role="button" class=""><img src={more} width={30} height={20}/></div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><ModalEditarQuantidade id={id}/></li>
        <li><a>Item 1</a></li>
        </ul>
    </div>
  );
} export default SubMenuEstoque;