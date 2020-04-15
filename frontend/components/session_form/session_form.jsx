import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="auth-error">
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render () {
    const { navLink, formType, formDescription, demoLogin } = this.props;
    return (
      <>
      <header>
          <div className="page-container">
            <nav className="main-nav-container">
              <Link to="/">
                <img src={window.logoURL} alt="Logo" className="logo" />
              </Link>
              <div className="auth-nav-links">
                {navLink}
                <button onClick={demoLogin} className="btn btn-orange">Demo Login</button>
              </div>
            </nav>
          </div>
      </header>
      <section className="gray-background">
          <div className="auth-form-container">
            <div className="auth-form-box">
              <div className="auth-form">
                <h2 className="auth-title">{formType}</h2>
                <h3 className="auth-message">{formDescription}</h3>
                <form onSubmit={this.handleSubmit}>
                  {this.renderErrors()}
                  <label className="form-input-label">Email
                <input type="email"
                      className="form-input-field"
                      value={this.state.email}
                      onChange={this.update("email")}
                    />
                  </label>
                  <label className="form-input-label">Password
                <input type="password"
                      className="form-input-field"
                      value={this.state.password}
                      onChange={this.update("password")}
                    />
                  </label>
                  <input type="submit" className="auth-submit" value={formType} />
                </form>
              </div>
            </div>
        </div>
      </section>
      </>
    );
  }
}

export default SessionForm;