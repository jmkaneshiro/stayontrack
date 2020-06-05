import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Home from "./home";

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(Home);