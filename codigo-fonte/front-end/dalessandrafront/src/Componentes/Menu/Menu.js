import Logo from "../../img/logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Menu(){
  return(
    <ul class="menu bg-base-200 w-56 min-h-screen rounded-box">
        <li class="menu-title"><img src={Logo} alt="Logo" className="h-20 w-30"/></li>
        <li><a>Vendas</a></li>
        <li><Link to="/">Estoque</Link></li>
        <li><a>Despesas</a></li>
        <li><a>Sair</a></li>
    </ul>
  )
} export default Menu;
