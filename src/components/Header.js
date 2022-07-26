import { Route, Link, Switch } from "react-router-dom";
import logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место" />
      <Switch>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__link">Войти</Link>
        </Route>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__link">Регистрация</Link>
        </Route>
        <Route exact path="/">
          <div className="header__container">
            <p className="header__email"></p>
            <Link to="/sign-in" className="header__link header__link_sign-out">Выйти</Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}
  
export default Header;