Mobile Map App
=========



Use the App
-----

The app accepts two hash parameter: start and end in a way like
URL/#start/end

The start and end can be in form of 
- 1. "Place, CTITY" (e.g Gatech, ATL/Tech Square, ATL)
- 2. the start can be "your location", in this case, it will use the location data to get your current position.
- 3. the end can be a preset of the following positions:
 
-- EBCHS, SAWK, F15, CBF ...
Design
------

The design is initially inspired by a [Google Maps demo for elevation in San Francisco](https://embed-dot-more-than-a-map.appspot.com/demos/routing/elevation). The rest of the UI is partially inspired by Google's [Material Design](https://www.google.com/design/spec/material-design/introduction.html).

The SVG icon sprite is generated with [Fontastic](http://fontastic.me/).

Development
-----------

Requires [Node.js](http://nodejs.org/) and [gulp.js](http://gulpjs.com/).

- `npm install` to install the dependencies.
- `gulp` to start the server at `localhost:8000`.

License
-------

[MIT](http://cheeaun.mit-license.org/)
