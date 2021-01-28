# React-gmaps

You can see a live version of this project [here](https://react-gmaps.vercel.app/).

In this app, you can search for places and it will give you suggestions based on your query. You can click on any of them to add a marker to that place. It checks for duplicated markers, so you can't add the same marker twice.

An array of the suggestions is stored in Redux, and persisted in the browser.

The app was built with React 17 with hooks and Redux (also with hooks).

The app is fully tested with jest and enzyme.

## Available Scripts

In your console, first you need to clone the repository

### `git clone https://github.com/nachoiacovino/react-gmaps`

After that, you need install the dependencies with:

### `npm install`

Then, you can launch the server with:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
