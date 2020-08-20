# FlighSolution

Flight prices listing app with usage of [SkyScanner API](https://rapidapi.com/skyscanner/api/skyscanner-flight-search) developed under React Native 0.63
An Android APK is available in the repository files with FlightSolution version for testing

## Installation
This instructions consider that the node environment and react native requirements have been fulfilled 

```bash
yarn install
npx pod-install # Only if running for iOS 
```

## Run

```bash
npx run ios # for running iOS
react-native run-android # for running android
```

## External libraries used


[React Navigation](https://reactnavigation.org/),
[React Native Modal Date Picker](https://github.com/mmazzarolo/react-native-modal-datetime-picker),
[React Native Modal Selector](https://github.com/peacechen/react-native-modal-selector),
[React Redux](https://react-redux.js.org/)

## Arquitecture
For the project development the Flux arquitecture was chosen. All the data management and API consuming status were managed thought the redux library, making this arquitecture a perfect fit for matching this requirement. Been able to configure the middleware to add more stores, the scalability is easier to read.

For the folder structures not many layer where used. The files are divided in component files, screen files, redux files, and service files for the API calls.


## Author
Gabriel Eduardo Gutierrez Garcia
Gabrieleduardogg@gmail.com