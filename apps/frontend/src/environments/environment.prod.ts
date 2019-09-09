import { IdentityProviders } from '@ngx-utility/authentication';

export const environment = {
  production: true,
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
