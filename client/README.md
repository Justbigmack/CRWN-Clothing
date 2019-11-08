# CRWN Clothing

Welcome to CRWN Clothing. CRWN Clothing is an e-commerce Progressive Web Application that allows users to purchase clothes easily.

## Demo

You can visit http://crwnclothing.andrewkaras.me for a working demo.

## How to use

Navigate to the homepage, select the clothes you want to purchase and click on the checkout icon in the top-right corner.
To pay for items, use CC data provided at the checkout page. Real credit cards are not supported to avoid real charges for people.

## Built With

- [React](https://reactjs.org) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org) - A predictable state container for JavaScript apps
- [Redux-Saga](https://redux-saga.js.org) - Redux middleware library
- [Firebase](https://firebase.google.com) - Comprehensive app development platform
- [SASS](https://sass-lang.com) - A Style Sheet language

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You will need to have your own Firebase and Stripe account to complete the setup. Firebase account is needed to complete the firebase config file with your information. You will need a Stripe account to have access to a secret API key.

### Installing

First, you need to clone this repo. After you have done that, navigate to the firebase config file /client/src/firebase.firebase.utils.js

You will need to complete the config object with data found in your Firebase account. You will find notes on what information goes where in the file. The object in need can be found in general settings of your Firebase project.

After you have done that, navigate to the root folder of the project and find .env file there. You will need to paste your secret API key you obtained from your Stripe account in that file.

After you do all that, navigate to the root folder and run:

```
npm -i
```

Next, navigate to the client folder and run the same command.

To run the project locally, you will need to rstart the server both in the root folder and the client folder of the project (one to make payment processing work and one for the front-end). To do that, navigate to the respective folder and run the following command:

```
npm start
```
