# Injection Dependent

 ![Build Status](https://travis-ci.org/Alastair2D/injection_dependent.svg?branch=master)

This is our final project to finish the course at Makers. The intention of the project is to help those with type 1 diabetes manage the condition by creating a mobile app that tracks and advises on injection sites.

[Team](https://github.com/Alastair2D/injection_dependent/tree/master#team) | [Team Goals](https://github.com/Alastair2D/injection_dependent/tree/master#team-goals) | [Technology](https://github.com/Alastair2D/injection_dependent/tree/master#technology) | [Demo](https://github.com/Alastair2D/injection_dependent/tree/master#demo) | [Install and Use Project](https://github.com/Alastair2D/injection_dependent/tree/master#how-to-install-and-use) | [User Stories](https://github.com/Alastair2D/injection_dependent/tree/master#user-stories) | [Mockup](https://github.com/Alastair2D/injection_dependent/tree/master#mockup) | [Useful Links](https://github.com/Alastair2D/injection_dependent/tree/master#useful-links)

## Team

[Mathilde Ferrand](https://github.com/ChocolatineMathou)   
[Andrew Wood](https://github.com/andrewwood2)   
[James Malvern](https://github.com/jdm79)   
[Alastair Edmonds](https://github.com/Alastair2D)   
[Harry Pugh](https://github.com/hjpugh)

## Demo

![Injection Dependent demo](./images/InjectionDependentDemo.gif)

## Motivation

Those diagnosed with Type 1 diabetes typically have to inject insulin 4 times a day. These injections need to be made in different locations around the body to avoid lipohypertrophy. This is the build up of fatty lumps under the skin, which can interfere with insulin absorption, look unpleasant and be mildly painful.

While there are apps out there to help monitor blood sugar levels, there is nothing to help those new to the condition keep track of where they are injecting.

## Technology

This project was built with Javascript, [React Native](https://facebook.github.io/react-native/) and [Redux](https://redux.js.org/introduction).   
We used [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme) testing frameworks. Jest provides test coverage as well.   
[ESLint](https://github.com/Intellicode/eslint-plugin-react-native) has been set up as a style checking tool and Travis CI for Continuous Integration.

The repo with our backend is [here](https://github.com/andrewwood2/inj_dep_api) and deployed on [heroku](https://guarded-caverns-16437.herokuapp.com/).

## Team Goals

* Create something useful
* Learn React Native
* Learn React Native testing framework (Jest and Enzyme)
* Improve quality of life
* TDD everything
* Write code that's easy to read and change
* Working together: pair programming, ensure knowledge sharing, communication
* Agile rituals: sprint planning, daily stand-up, retro

## How to install and use

### Download the project

1. Cloning this project `git clone https://github.com/Alastair2D/injection_dependent`
2. Change into the directory `cd injection_dependent`
3. Install the dependencies with `npm install`

### Run the tests

1. `npm test` will run the tests and get you the test coverage
2. `npm run lint` will run eslint

### Play with the project

Download the [Expo client](https://expo.io/) on your iOS or Android phone and connect to the same wireless network as your computer. On your computer, run `npm start`. You should see a QR code in your terminal and/or your favourite browser. On Android, use the Expo app to scan the QR code. On iOS, scan the QR code with your camera to open the project in the Expo app.


## User Stories

### MVP

```
As a user,
So I know where to inject,
I want the app to generate a suggestion.

As a user,
So I know the last injection site,
I want to be able to see this.
```
### Version 1

```
As a user,
So I can see previous sites used,
I want to be able to view confirmation history.

As a user,
So I can avoid certain sites,
I want to be able to configure this in settings.

As a user,
In case I accidentally press confirm or change my mind,
I want to be able to cancel.

As a user,
So I can access the whole history after quitting the app,
I want the history to be stored on a database.

As a user,
To ensure I retrieve only my history,
I want to be able to input my username.

As a user,
So I remember the type of medication used,
I want to be able to choose between long and short-acting insulin.
```

### Next steps

1. Authentication
2. Styling and interaction development
3. Instructions on first time app open
4. Sync with your bluetooth enabled blood tester

## Mockup

[MVP Mockup](https://github.com/Alastair2D/injection_dependent/blob/master/images/MVP_D1.png)

## Useful links

[Group diary on Instagram](https://www.instagram.com/injection.dependent/?hl=en)   
[Tickets on Trello](https://trello.com/injectiondependent)
