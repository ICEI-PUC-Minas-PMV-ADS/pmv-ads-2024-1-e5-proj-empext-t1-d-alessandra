import Logo from "../../img/logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Menu(){
  return(
  <ul class="menu bg-base-200 w-56 min-h-screen rounded-box">
    <li class="menu-title"><img src={Logo} alt="Logo" className="h-20 w-30"/></li>
        <li>
          <details open>
            <summary>Venda</summary>
            <ul>
              <li><Link to="/vendas">Venda</Link></li>
              <li><Link to="/cliente">Cliente</Link></li>
              <li><a>Relatório Venda</a></li>
              <li><a>Mais Vendidos</a></li>
            </ul>
          </details>
        </li>
        <li><Link to="/">Estoque</Link></li>
        <li><Link to ="/financeiro">Financeiro</Link></li>
        <li><a>Sair</a></li>
    </ul>
  )
} export default Menu;
