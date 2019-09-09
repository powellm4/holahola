import { IdentityProviders } from '@ngx-utility/authentication';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authentication: IdentityProviders.firebase,
  firebaseConfig: {
    apiKey: 'AIzaSyCHFSSFO43ITMjvNWGr1HP6L1koRCPMnrY',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '179385722481',
    appId: '1:179385722481:web:aa76ab50db2b1200'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
