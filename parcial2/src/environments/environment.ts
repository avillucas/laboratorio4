// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCxxJP5c6x3mjDrnnaL04F5bY3Ow0I8rss',
    authDomain: 'tplaboratorio4-a.firebaseapp.com',
    databaseURL: 'https://tplaboratorio4-a.firebaseio.com',
    projectId: 'tplaboratorio4-a',
    storageBucket: 'tplaboratorio4-a.appspot.com',
    messagingSenderId: '829785658201',
    appId: '1:829785658201:web:4959c2eac3615eef'
  },
  usuarios: [
    { email: 'admin@test.com', password: 'admin13' },
    { email: 'veterinario@test.com', password: 'veterinario' },
    { email: 'cliente@test.com', password: 'client'},
  ],
  db: {
    usuarios: 'usuarios',
    mascotas: 'mascotas',
    turnos: 'turnos'
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
