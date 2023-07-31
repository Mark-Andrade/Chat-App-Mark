// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { firebaseConfig, cometChat  } from 'src/app.config';
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB11KYFs_mdALo870yvck0E16_aj-dK6Mk",
    authDomain: "appchat-da7ab.firebaseapp.com",
    projectId: "appchat-da7ab",
    storageBucket: "appchat-da7ab.appspot.com",
    messagingSenderId: "682571539877",
    appId: "1:682571539877:web:4861bb38aca10ea836f44c",
    measurementId: "G-5Z4REJE72F"
},

  APP_ID: '243226c0c4e68a0d',
  AUTH_KEY: '9bbe044e69e91a3bf5995eeea1f109411a9d5bfb',
  APP_REGION: 'eu',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
