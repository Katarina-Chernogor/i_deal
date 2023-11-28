import "./Header.css";
import logo from "../../image/Logo-white.png";

const Header = () => (
  <div>
    <header>
      <div className="logo-wrapper">
      </div>
      <div className="wrapper-menu">

        <div className="menu pointer">
        <img src={logo} alt="logo"></img>
          <h2 className="item">Знайомство</h2>
          <h2 className="item">Послуги</h2>
          <h2 className="item">Кейси</h2>
          <h2 className="item">Етапи роботи</h2>
          <h2 className="item">Контакти</h2>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
