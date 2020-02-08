// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAwbjIZk3bV_900Xi7mvcVv8hzKlFBP7zo',
    authDomain: 'wide-game.firebaseapp.com',
    databaseURL: 'https://wide-game.firebaseio.com',
    projectId: 'wide-game',
    storageBucket: 'wide-game.appspot.com',
    messagingSenderId: '459505349782',
    appId: '1:459505349782:web:3b3ca7ce2d795fcafbbeb7',
    measurementId: 'G-4S3JJFHKRN'
  },
  globals: {
    title: 'Moonlight 2020',
    game: 'moonlight',
    year: '2020'
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
