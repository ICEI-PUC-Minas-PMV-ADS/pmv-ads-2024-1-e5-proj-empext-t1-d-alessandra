import Logo from "../../img/logo.png";
import "../../Pages/estilo/estoque.css"
import LogoCliente from "../../img/comercial.png"
import LogoConfig from "../../img/configuracao.png"
import LogoFinaceiro from "../../img/orcamento.png"
import LogoEstoque from "../../img/warehouse.png"
import LogoSair from "../../img/sair.png"
import { Link, useNavigate } from "react-router-dom";
import LogoVendas from "../../img/caixa-eletronico.png"

function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <ul className="menu bg-base-200 w-56 min-h-screen rounded-box">
      <li className="menu-title"><img src={Logo} alt="Logo" className="h-20 w-30"/></li>
      <br></br>
      <li>
        <details open>
          <summary><img  class="logoVenda" fill="none" viewBox="0 0 34 34" src={LogoVendas}/>Venda</summary>
          <ul>
            <li><Link to="/vendas">Venda</Link></li>
            <li><Link to="/relatorio-venda">Relatório Venda</Link></li>
            <li><Link to="/mais-vendidos">Mais Vendidos</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to="/estoque"><img  class="logoVenda" fill="none" viewBox="0 0 34 34" src={LogoEstoque}/>Estoque</Link></li>
      <li><Link to="/financeiro"><img  class="logoVenda" fill="none" viewBox="0 0 34 34" src={LogoFinaceiro}/>Financeiro</Link></li>
      <li>
      <details open>
          <summary><img  class="logoVenda" fill="none" viewBox="0 0 34 34" src={LogoCliente}/>Clientes</summary>
          <ul>
            <li><Link to="/cliente">Cliente</Link></li>
            <li><Link to="/clienteDevedores">Clientes Inadimplentes</Link></li>
            <li><Link to="/historico">Historico dos clientes</Link></li>
          </ul>
        </details>

      </li>
      <li><a onClick={handleLogout}><img class="logoVenda" fill="none" viewBox="0 0 34 34" src={LogoSair}/>Sair</a></li>
      <li className="configList"><Link to="/configuracao"><img  class="logoConfig" fill="none" viewBox="0 0 0 0" src={LogoConfig}/>Configurações</Link></li>
    </ul>
  );
}

export default Menu;
