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
    return (
      <>
      <header>
        <Link to="/">StayOnTrack</Link>
        <div>{this.props.navLink}</div>
      </header>
      <section className="login-form">
        <h1>{this.props.formType}</h1>
        <h2>Sign in to continue to StayOnTrack</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Sign in as
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
          <input type="submit" value={this.props.formType} />
        </form>
      </section>
      </>
    );
  }
}

export default SessionForm;