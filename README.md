# README [LIVE SITE DEACTIVATED]

![logo](./app/assets/images/marketing/StayOnTrackLogo.svg)

StayOnTrack is a clone of [Pivotal Tracker](https://www.pivotaltracker.com/) -- an agile project management tool. StayOnTrack users should be able to create projects, become members of projects, write user stories, and follow user stories. Stories should be given point values that reflect complexity of work being done.

## Technologies

- React/Redux
- Ruby on Rails
- PostgresSQL
- JavaScript

## Key Features

### User Authentication

- A user can login with existing credentials
- A new user may signup with a unique email address
- On creation, a new user account is automatically assigned with a username, name and initials
- Invalid credentials will trigger frontend and backend errors

### Dashboard

- The dashboard is a place for a user to see all of their projects

### Projects

- A project is generally used to represent a broad feature set
- A project is owned by only one user, but can have many members
- A project can have many stories

## Future Improvements

- Stories (points, types, followers)
- Ability to add members to projects
- Automatic updating of project state as stories are completed
- Ability to graph project velocity over the course of a development sprint

## Developer Instructions

### Set up a self-signed SSL Certificate

Session cookies are configured in `~/app/config/initializers/session_store.rb` to be `SameSite="Strict", Secure`. As a result, you'll need to boot the app in SSL mode.

Original instructions can be viewed at [Rails Local Development over HTTPS using Self-Signed SSL Certificate](https://madeintandem.com/blog/rails-local-development-https-using-self-signed-ssl-certificate/). Note: there are many resources online covering the basics of obtaining a self-signed SSL certificate.

### Start a local environment

1. Start the server by running the with a binding to your self-signed SSL certificate:
   `bundle exec rails s -b 'ssl://localhost:3000?key=path/to/file/localhost.key&cert=path/to/file/localhost.crt'`

2. Start the frontend by running `npm run webpack`
3. Open the app at `https://localhost:3000/`

For additional details, view my [design docs](https://github.com/jmkaneshiro/stayontrack/wiki)
