import { Link } from 'react-router-dom'; 

function Register() {
  return (
    <div className="sign">
      <form className="sign__form" name="register">
        <h2 className="sign__title">Регистрация</h2>
        <input className="sign__input" name="email" id="email" type="email" placeholder="Email" required />
        <input className="sign__input" name="password" id="password" type="password" placeholder="Пароль" required />
        <button className="sign__submit-button" type="submit">Зарегистрироваться</button>
      </form>
      <p className="sign__question">Уже зарегистрированы?<Link to="/sign-in" className="sign__link"> Войти</Link></p>
    </div>
  );
}
  
export default Register;