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
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render () {
    const { navLink, formType, formDescription } = this.props;
    return (
      <>
      <header>
        <Link to="/">StayOnTrack</Link>
          {navLink}
      </header>
      <section className="login-form">
        <h2>{ formType }</h2> 
        <h3>{formDescription}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input type="text" 
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <label>Password
            <input type="password" 
              value={this.state.password} 
              onChange={this.update("password")}
            />
          </label>
          <input type="submit" value={ formType } />
        </form>
      </section>
      </>
    );
  }
}

export default SessionForm;