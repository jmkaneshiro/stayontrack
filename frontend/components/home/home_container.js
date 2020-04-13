import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Home from "./home";

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(login({ email: "demo_user@mailinator.com", password: "password" }))
});

export default connect(null, mapDispatchToProps)(Home);