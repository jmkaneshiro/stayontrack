import React from 'react';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { logout } = this.props;

    return (
      <>
        <h1 className="under-construction">Hello World!</h1>
        < button className = "btn btn-blue" onClick = { logout } > Log Out </button>
      </>
    );
  }
}

export default Dashboard;