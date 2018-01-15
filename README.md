# Vehicle Mapping - NextBus API

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Realtime SF Muni Bus map based on NextBus API.

Stack:
* React 16
* d3.js
* Redux-obrservable
* Webpack 3
* Babel 6 
* SCSS modules
* React Router
* Connected Router (react router + redux)
* Redux DevTools
* Eslint
* Jest & Enzyme
* Express

## Installation

All you need to do is clone this repository
```
git clone https://github.com/manideepbollu/mapbus-with-nextbus
```

## Running

Application is divided into two parts. One is pure React front-end, powered by `webpack-dev-server` in development mode.

### Start application

To start this application run command below and open the app on `http://localhost:8080`

```javascript
npm start
```

### ESLint

To verify the syntax quality, ESLint can be run, `.eslintrc` file is created in the root folder to configure the ESLint settings.

```javascript
npm run eslint
```

## Production

Running `npm run build` will create production ready application into the `dist` folder. All you need to do is make this `dist` folder publicly available.

Included Express server is preconfigured to serve `/dist` folder. All you need to do is run `npm run server` on your production server. The same is happening automatically, when you deploy to Heroku (It executes this command from `Procfile`

This is also good to run on your local computer to ensure, that your application is running as it should.

### Heroku

Just use "deploy to heroku" button to deploy this project as your app on Heroku.


## Tools

This project works with ReduxDevtool extension for chrome. [Read more](https://github.com/zalmoxisus/redux-devtools-extension)