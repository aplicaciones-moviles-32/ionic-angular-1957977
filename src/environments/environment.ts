// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { initializeApp } from "firebase/app";



export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAu22iQTpvYQFOr6NRDAh7uMbyqG2-pBmU",
    authDomain: "misstagram-a8c5e.firebaseapp.com",
    databaseURL: "https://misstagram-a8c5e-default-rtdb.firebaseio.com",
    projectId: "misstagram-a8c5e",
    storageBucket: "misstagram-a8c5e.appspot.com",
    messagingSenderId: "294650209476",
    appId: "1:294650209476:web:2a1709e7414c10ae60d591"
  }
};

const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
