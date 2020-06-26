import React from 'react';
import { Link } from 'react-router-dom';

const memoryEmail = JSON.parse(localStorage.getItem('email'));

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  emailInput() {
    const { email } = this.state;
    if (memoryEmail && email !== memoryEmail) this.setState({ email: memoryEmail });
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          id="email"
          onChange={(e) => this.handleChange(e)}
          value={email}
          placeholder={(memoryEmail) ? email : 'email'}
        />
      </div>
    );
  }

  passwordInput() {
    const { password } = this.state;
    return (
      <div>
        <input
          type="password"
          data-testid="password-input"
          id="password"
          onChange={(e) => this.handleChange(e)}
          value={password}
          placeholder="senha"
        />
      </div>
    );
  }

  clickToStartGame() {
    const { email } = this.state;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('email', JSON.stringify({ email: [email] }));
  }

  isDisabled() {
    const { password, email } = this.state;
    const emailTest = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/;
    if (password.length > 7 && email.match(emailTest)) return false;
    return true;
  }

  enterButton() {
    return (
      <Link to="/comidas">
        <button
          type="button"
          className="button-enter"
          data-testid="login-submit-btn"
          onClick={() => this.clickToStartGame()}
          disabled={this.isDisabled()}
        >
          Entrar
        </button>
      </Link>
    );
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.emailInput()}
        {this.passwordInput()}
        {this.enterButton()}
      </div>
    );
  }
}

export default Login;