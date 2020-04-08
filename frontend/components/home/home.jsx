import React from "react";
import { Link } from "react-router-dom";

const Home = ({ currentUser }) => (
    <nav className="login-signup">
      <a className="header-logo">StayOnTrack</a>
      <a className="header-link">Product</a>
      <a className="header-link">Community</a>
      <a href="https://www.pivotaltracker.com/blog">Blog</a>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
);

export default Home;