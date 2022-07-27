import { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    onLogin(password, email);
  }

  return (
    <div className="sign">
      <form className="sign__form" name="register" onSubmit={handleSubmit}>
        <h2 className="sign__title">Вход</h2>
        <input
          className="sign__input"
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleChangeEmail} />
        <input
          className="sign__input"
          name="password"
          id="password"
          type="password"
          placeholder="Пароль"
          required
          value={password}
          onChange={handleChangePassword} />
        <button className="sign__submit-button" type="submit">Войти</button>
      </form>
    </div>
  );
}
  
export default Login;