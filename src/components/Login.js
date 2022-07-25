function Login() {
  return (
    <div className="sign">
      <form className="sign__form" name="register">
        <h2 className="sign__title">Вход</h2>
        <input className="sign__input" name="email" id="email" type="email" placeholder="Email" required />
        <input className="sign__input" name="password" id="password" type="password" placeholder="Пароль" required />
        <button className="sign__submit-button" type="submit">Войти</button>
      </form>
    </div>
  );
}
  
export default Login;