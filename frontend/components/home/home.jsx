import React from "react";
import { Link } from "react-router-dom";

const Home = ({ login }) => {
  
  const demoLogin = e => {
    e.preventDefault();
    login({ email: "demo_user@mailinator.com", password: "password" });
  };

  return (
    <>
      <nav className="main-nav">
        <div className="page-container">
          <div className="main-nav-container">
            <Link to="/">
              <img src={window.logoURL} alt="Logo" className="logo" />
            </Link>
            <ul className="main-nav-options">
              <li>
                <div className="main-nav-dropdown menu-lg">
                  <span>Portfolio and Other Projects<img className="dropdown-arrow" src={window.arrowSmallDropdownURL} alt="Dropdown arrow"/> </span>
                  <ul>
                    <li><a href="https://jmkaneshiro.github.io/"
                      target="_blank"
                      className="header-link"
                      name="portfolio">
                      Portfolio</a>
                    </li>
                    <li><a href="https://nstockapp.herokuapp.com/" 
                          target="_blank" 
                          className="header-link" 
                          name="instock">
                          InStock</a>
                    </li>
                    <li><a href="https://jmkaneshiro.github.io/squirrels-of-central-park/" 
                          target="_blank" 
                          className="header-link" 
                          name="squirrels-of-central-park">
                          Squirrels of Central Park</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="https://www.pivotaltracker.com/" target="_blank" className="header-link menu-lg">Cloned Site: Pivotal Tracker</a>
              </li>
              <li><Link className="btn btn-orange" to="/login">Log In</Link></li>
              <li><Link className="btn btn-blue" to="/signup">Sign Up</Link></li>
            </ul>
            <div className="main-nav-dropdown btn btn-white-blue-border menu-md">
                <span>Menu<img className="dropdown-arrow" src={window.arrowSmallDropdownURL} alt="Dropdown arrow" /></span>
              <ul>
                <li><a href="https://jmkaneshiro.github.io/"
                  target="_blank"
                  className="header-link"
                  name="portfolio">
                  Portfolio</a>
                </li>
                <li><a href="https://nstockapp.herokuapp.com/"
                  target="_blank"
                  className="header-link"
                  name="instock">
                  InStock</a>
                </li>
                <li><a href="https://jmkaneshiro.github.io/squirrels-of-central-park/"
                  target="_blank"
                  className="header-link"
                  name="squirrels-of-central-park">
                  Squirrels of Central Park</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="home-container">
        <section className="hero">
          <div className="page-container">
            <div className="text-box">
              <h1 className="hero-heading">
                StayOnTrack is changing how teams build software&mdash;
                <br /> one story at a time
              </h1>
              <div className="signup-form-home-container">
                <div className="signup-form-home-box">
                  <h2>Get Started Today!</h2>
                  <form className="signup-form-home">
                    <button onClick={ demoLogin } className="btn btn-orange demo-login-btn">Demo Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md">
          <div className="page-container">
            <h2 className="banner-msg">
              Proven project management for successful teams
            </h2>
            <h3 className="banner-msg">
              With a shared view of team priorities, a process that fosters collaboration, and dynamic 
              tools to analyze progress, your team will deliver more frequently and consistently.
            </h3>
          </div>
        </section>
        <section className="section-md">
          <div className="page-container">
            <div className="info">
              <div id="info1" className="info-text">
                <h3>Better organization to get focused</h3>
                <p>
                  <strong>Keep your team on the rails.</strong>Tracker's shared backlog makes priorities clear
                  so the team can stay organized. Easily visualize scope, focus your teamwork
                  and stay nimble when circumstances change.
                </p>
              </div>
              <img src={window.workingTogether1URL} alt="Illustration showing how StayOnTrack iterations 
              provide for better organization for agile software teams to get focused" className="info-image"/>
            </div>
          </div>
        </section>
        <section className="section-md">
          <div className="page-container">
            <div className="info">
              <img src={window.workingTogether2URL} alt="Illustration showing how Pivotal Tracker has product 
              management tools to help agile software teams adapt and evolve" className="info-image" />
              <div className="info-text">
                <h3>Tools to help you adapt and evolve</h3>
                <p>
                  <strong>Get more work done, more often.</strong>Tracker's guided iteration planning helps you
              break down and prioritize projects into manageable chunks so the team can keep the momentum
              toward delivering.
              </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md">
          <div className="page-container">
            <div className="info">
              <div className="info-text">
                <h3>Team transparency at a glance</h3>
                <p>
                  <strong>No more surprises.</strong>With a shared, clear view of your team's work, everyone has a
                real-time, single source of truth. A quick scan explains your team's status, who's responsible
                for what, and what's coming next.
              </p>
              </div>
              <img src={window.workingTogether3URL} alt="Illustration showing how StayOnTrack provides agile 
              software teams transparency at a glance for easier collaboration" className="info-image" />
            </div>
          </div>
        </section>
        <section className="section-md">
          <div className="page-container">
            <div>
              <h2 className="banner-msg">A better way to develop</h2>
              <h3 className="banner-msg">
                Succeeding in an evolving tech landscape requires a time-tested process and a tool your team can
                rely on. Tracker's modern workflow helps your team keep the pace and adapt when needs change.
            </h3>
            </div>
            {/* <div className="text-box">
              <a className="text-box-btn" href="https://www.pivotaltracker.com/features" target="_blank">
                Learn how Tracker can help your team
            <span>
                  <img className="arrow-btn" src={window.buttonArrowURL} alt="Arrow pointing to next page" />
                </span>
              </a>
            </div> */}
          </div>
        </section>
        <section className="section-md">
          <div className="page-container">
            <div className="demo-login">
              <h2 className="banner-msg">Ready to get your team on track? Test it out for yourself.</h2>
              <button onClick={demoLogin} className="btn btn-orange demo-login-btn">Demo Login</button>
            </div>
          </div>
        </section>
        <section className="section-md">
          <div className="page-container">
            <img src={window.appPlatformsURL} alt="Illustration showing Pivotal Tracker 
              mobile apps for iOS and Android"/>
          </div>
        </section>
      </div>
    </>
    )
};

export default Home;