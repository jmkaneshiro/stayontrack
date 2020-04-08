import React from "react";
import { Link } from "react-router-dom";

const Home = ({ currentUser }) => (
  <>
    <nav className="header">
      <div className="page-container">
        <div className="header-subcontainer">
          <Link to="/">
            <img src={window.logoURL} alt="Logo" className="logo" />
          </Link>
          <div className="header-links">
            <a className="header-link header-info">Product</a>
            <a className="header-link header-info">Community</a>
            <a href="https://www.pivotaltracker.com/blog" className="header-link header-info">Blog</a>
            <Link id="sign-in-link" className="header-link" to="/signin">Sign In</Link>
            <Link id="sign-up-link" className="header-link" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
      
    </nav>
    <div className="home-container">
      <section className="hero">
        <h1>
          StayOnTrack is changing how teams build software-- one story at a time
        </h1>
        <div className="work-in-progress">
          Work in progress ...
        </div>
      </section>
      <section className="section-md">
        <div>
          <h3>Better organization to get focused</h3>
          <p>
            <strong>Keep your team on the rails.</strong>Tracker's shared backlog makes priorities clear
            so the team can stay organized. Easily visualize scope, focus your teamwork, 
            and stay nimble when circumstances change.
          </p>
        </div>
      </section>
      <section className="section-md">
        <div>
          <h3>Tools to help you adapt and evolve</h3>
          <p>
            <strong>Get more work done, more often.</strong>Tracker's guided iteration planning helps you
          break down and prioritize projects into manageable chunks so the team can keep the momentum
          toward delivering.
        </p>
        </div>

      </section>
      <section className="section-md">
        <div>
          <h3>Team transparency at a glance</h3>
          <p>
            <strong>No more surprises.</strong>With a shared, clear view of your team's work, everyone has a
            real-time, single source of truth. A quick scan explains your team's status, who's responsible
            for what, and what's coming next.
          </p>
        </div>
      </section>
      <section className="section-md">
        <div>
          <h3>Better organization to get focused</h3>
          <p>
            <strong>Keep your team on the rails.</strong>Tracker's shared backlog makes priorities clear
            so the team can stay organized. Easily visualize scope, focus your teamwork,
            and stay nimble when circumstances change.
          </p>
        </div>
      </section>
      <section className="section-md">
        <div>
          <h2>A better way to develop</h2>
          <p>
            Succeeding in an evolving tech landscape requires a time-tested process and a tool your team can 
            rely on. Tracker's modern workflow helps your team keep the pace and adapt when needs change.
          </p>
        </div>
        <a className="text-box-btn">Learn how Tracker can help your team -></a>
      </section>
      <section className="section-md">
        <h2>Ready to get your team on track? Try us free for 30 days.</h2>
        <a className="signup-block-btn">Get started!</a>
      </section>
      <section className="section-md">
        {/* computer image goes here */}
      </section>
    </div>
  </>

);

export default Home;