# Extreme Feedback Carousel
The extreme feedback carousel provides a quick visual into the most up-to-date state of the project. In other words, it is a DevOps tool for cycling through different screens that are important to the health of the project.

# Dependencies
* A modern browser (tested on latest chrome)
* Node.js - [Node.js Official Website](http://nodejs.org/) for server side packages (via NPM) and application execution runtime
* Bower - [Bower Package Manager](http://bower.io/) for front end packages

# Install Bower & Packages
```
npm install -g bower
npm install
```

# Configure 
Create `local/dashboards.json` file containing an array of configurations:

```
[
  {
    "title": "Foo", /* required */
    "url": "http://foo", /* required */
    "seconds": 10  /* optional; default 15 */
  },
  {
    "url": "http://bar"
  }
]
```

# Run
```
npm run start
```

# How it Works
jQuery + ajax + iframe
Currently, pages displayed must not set the X-Frame-Options header.

# Todo
- Add support for gulp
- Add support for SASS or LESS
- Add support for uglify & minify
- Add a template engine so that views can use server side variables, conditionals, and loops
- Add request logging / winston
- Add ability to proxy a webpage to prevent origin & frame restrictions
- Add ability to login with github 
- Add a persistence layer for configuration & other state (typicode/lowdb?)
- Add a lightweight carousel to animate the "upcoming" view
- Add ability to set a notification
