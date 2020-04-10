import React from "react";
import { Link } from "react-router-dom";

const Home = ({ currentUser }) => (
  <>
    <a className="global-banner" href="https://content.pivotal.io/blog/pivotal-vmware-transforming-
    how-more-of-the-world-builds-software">StayOnTrack + VMware: <span>Transforming how more of the 
      world builds software -></span></a>
    <nav className="main-nav">
      <div className="page-container">
        <div className="main-nav-container">
          <Link to="/">
            <img src={window.logoURL} alt="Logo" className="logo" />
          </Link>
          <ul className="main-nav-options">
            <li>
              <div className="main-nav-dropdown menu-lg">
                <span>Product <img className="dropdown-arrow" src={window.arrowSmallDropdownURL} alt="Dropdown arrow"/> </span>
                <ul>
                  <li><a href="https://www.pivotaltracker.com/features" target="_blank" className="header-link">Features</a></li>
                  <li><a href="https://www.pivotaltracker.com/pricing" target="_blank" className="header-link">Pricing</a></li>
                  <li><a href="https://www.pivotaltracker.com/integrations" target="_blank" className="header-link">Integrations</a></li>
                  <li><a href="https://www.pivotaltracker.com/enterprise" target="_blank" className="header-link">Enterprise</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="main-nav-dropdown menu-lg">
                <span>Community <img className="dropdown-arrow" src={window.arrowSmallDropdownURL} alt="Dropdown arrow" /></span>
                <ul>
                  <li><a href="https://www.pivotaltracker.com/events" target="_blank" className="header-link">Events</a></li>
                  <li><a href="https://www.pivotaltracker.com/buildtv" target="_blank" className="header-link">BuildTV</a></li>
                  <li><a href="https://www.pivotaltracker.com/customer-stories" target="_blank" className="header-link">Customer Stories</a></li>
                  <li><a href="https://www.pivotaltracker.com/consultancies" target="_blank" className="header-link">Consultancy Directory</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="https://www.pivotaltracker.com/" target="_blank" className="header-link menu-lg">Learn More About: Pivotal Tracker</a>
            </li>
            <li><Link className="btn btn-orange" to="/login">Log In</Link></li>
            <li><Link className="btn btn-blue" to="/signup">Sign Up</Link></li>
          </ul>
            <div className="main-nav-dropdown arrow-down btn btn-white menu-md">
              <span>Menu<img className="dropdown-arrow" src={window.arrowSmallDropdownURL} alt="Dropdown arrow" /></span>
            <ul>
              <li><a href="https://www.pivotaltracker.com/features" target="_blank" className="header-link">Features</a></li>
              <li><a href="https://www.pivotaltracker.com/pricing" target="_blank" className="header-link">Pricing</a></li>
              <li><a href="https://www.pivotaltracker.com/integrations" target="_blank" className="header-link">Integrations</a></li>
              <li><a href="https://www.pivotaltracker.com/enterprise" target="_blank" className="header-link">Enterprise</a></li>
              <li><a href="https://www.pivotaltracker.com/" target="_blank" className="header-link">Learn More About: Pivotal Tracker</a></li>
              <li><a href="https://www.pivotaltracker.com/events" target="_blank" className="header-link">Events</a></li>
              <li><a href="https://www.pivotaltracker.com/buildtv" target="_blank" className="header-link">BuildTV</a></li>
              <li><a href="https://www.pivotaltracker.com/customer-stories" target="_blank" className="header-link">Customer Stories</a></li>
              <li><a href="https://www.pivotaltracker.com/consultancies" target="_blank" className="header-link">Consultancy Directory</a></li>
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
            <div className="work-in-progress">
              Work in progress ...
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
      {/* <section className="section-md">
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
        computer image goes here
      </section> */}
    </div>
  </>

);

export default Home;