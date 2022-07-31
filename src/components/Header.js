import { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import logo from '../images/Logo.svg';

function Header({ email, onSignOut }) {
  const [isHiddenMenuOpen, setHiddenMenuOpen] = useState(false);

  function handleToggleHiddenMenu() {
    setHiddenMenuOpen(!isHiddenMenuOpen);
  }

  return (
    <header className="header">
      <div className={`header__hidden-container ${isHiddenMenuOpen && "header__hidden-container_visible"}`}>
        <p className="header__email">{email}</p>
        <button className="header__link header__button" type="button" onClick={() => {onSignOut(); handleToggleHiddenMenu();}}>Выйти</button>
      </div>
      <div className="header__main-container">
        <img className="header__logo" src={logo} alt="Логотип Место" />
        <Switch>
          <Route path="/sign-up">
            <Link to="sign-in" className="header__link">Войти</Link>
          </Route>
          <Route path="/sign-in">
            <Link to="sign-up" className="header__link">Регистрация</Link>
          </Route>
          <Route exact path="/">
            <div className="header__menu-container">
              <p className="header__email">{email}</p>
              <button className="header__link header__button" type="button" onClick={onSignOut}>Выйти</button>
            </div>
            <button className={`header__menu-button ${isHiddenMenuOpen ? "header__menu-button_type_close" : "header__menu-button_type_open"}`} type="button" onClick={handleToggleHiddenMenu}>
              <div></div>
              <div></div>
              <div></div>
            </button>
          </Route>
        </Switch>
      </div>
    </header>
  );
}
  
export default Header;