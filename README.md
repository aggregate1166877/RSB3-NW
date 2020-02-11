# RSB3-NW.js

React, Semantic, Browserify, and Babel boilerplate running in node-webkit.

## Using this package

First off, you need to have [NPM](https://www.npmjs.com/get-npm) installed.
Then run:
```shell script
npm install
```

Build the package before first run and after any changes:
```shell script
npm run build
```

Then, start the application:
```shell script
npm start
```

If you get 'Hello, world!' with some clicky buttons, all's working:

![Alt text](preview.png?raw=true "Preview")

## Development vs production builds

The `package.json` file contains both the dev (sdk) and production builds of
nw.js. This is to allow developer tools (F12) along with other stuff useful for
debugging purposes. When setting up for production, remove
`nwjs_build_type=sdk` from `.npmrc`. Then, instead of using `npm install`, use
`npm install --only=prod`. Note that switching between dev and prod requires
that you delete your `node_modules` directory first.

## Notes

If for some reason the build fails, start by remove the carets (^) in front of
the version numbers in `package.json` as an initial troubleshooting step.
Once you're sure it's not a version problem, remove the carets as version
locking often leads to major security issues in production. Remember to check
your project for known issues with `npm audit fix`.
