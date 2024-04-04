import Logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <ul className="menu bg-base-200 w-56 min-h-screen rounded-box">
      <li className="menu-title"><img src={Logo} alt="Logo" className="h-20 w-30"/></li>
      <li>
        <details>
          <summary>Venda</summary>
          <ul>
            <li><Link to="/vendas">Venda</Link></li>
            <li><Link to="/cliente">Cliente</Link></li>
            <li><a>Relatório Venda</a></li>
            <li><a>Mais Vendidos</a></li>
          </ul>
        </details>
      </li>
      <li><Link to="/estoque">Estoque</Link></li>
      <li><Link to="/financeiro">Financeiro</Link></li>
      <li><a onClick={handleLogout}>Sair</a></li>
    </ul>
  );
}

export default Menu;
