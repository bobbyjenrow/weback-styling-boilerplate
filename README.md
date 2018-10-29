# Webpack Styling Boilerplate

TODO:: Add styles files

This is a boilerplate with a basic filestructure and webpack config file to generate most css + js projects.

To remove the index.html file, simply comment out HTMLWebpackPlugin under webpack.config.js > plugins

### Build
`npm run build`

note: also generates a styleguide through [KSS](https://github.com/kneath/kss).

### Run Dev Server
`npm start`

### Convert SCSS to CSS
`sudo sh ./scripts/cscc-css.sh`

### Convert CSS to SCSS
`sudo sh ./scripts/css-scss.sh`
