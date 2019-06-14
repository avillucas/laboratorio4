// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    "type": "service_account",
    "project_id": "tplaboratorio4-a",
    "private_key_id": "b0ff1d017be1bd32986828a408ca5254ffb927a0",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDFJ/KCVR5oCTG4\niF4CUfFbCMYzww0SHY4yKU3WvnmLWoRhk6URrocXRHrQNZ5UOgl4tk/7O27AZV5D\n/Gc4Wh4ySnZfvvtWm121kna4nSCvyqBxZHL2Yus9AMOvgLlhTsiZ6cRKnwTU97mj\njaHzvBOGhb1nduFMoH1bR1UHZQ/74f7Stb1dVq0nzaJOKqp3ti1QQS9UTk5kYUK9\nZRJ4R81fXsR3+2/CXbwK47sw2yQFdfqM5rUmcrrUVKF8zkXtMzA4bbxg4TK8Awqv\n1ThOqS3wQSj9QAyJ7EouaPttbsBt/kQStJz+cVp0kLcPX6fXmI0mN3GLKuYvFK+6\nYsIGQ+mJAgMBAAECggEAXXLnVBZzYJ2HBy//2zqq21rn004PCnie1zDTt8c1xjMj\nzzpTwfNHDeTED59yifquVZyYgXz0rFX/3dqrtD6m1HCN9ikIac8fljozcqLrhNdW\nwBh8E0Pku1f66NtrQu+8TpPKmhIQkL9QqvCthGEvohIPKhTjilYBxPulFmm1L05k\nr2MHg9tZvIZrhPHOlYB7wuDOl9lRF/xgsbXDZtFcmrqL4HTtQXZRDoXf5HSx+31d\nXq+7oDB9ZerBmNrqTaDLec0VihqBLF2fqDCb2WsXb5Rav2OMIJpmtUruLg0pl/bX\nyqbjkEbFPdRkzNuO7veVSH87eIzI3J7fljMKsA/eFwKBgQDrMINX/M84FnsBw4l7\ncOQrd/PJhq39J2nQ5KtZDfTD/TC5NwS5zZN8vyzN8wRD1JpsXHzTTZq2blsR/mhK\n20rHAi5+g9a82gRCsxfTfPp91/hR2vRwleFrl82Xjtuh27+2q6LShmPDfBWrZD9A\npDWZ6WISlWQ+/EaLeHfWRQUhRwKBgQDWmeeKyfKEiqCojIfYj8z1En4mDFNugzCf\n6w7v6/47POEHe7/r79cxqXu6FOm1FXT7kd5uOl54q3rOkAax40yNiLyWVcpSOWlA\nw2qEG0OnD6U3m3zd2kjOwm/EAMO4eW0yAgf2JVeBN5pWFqE+TsnPd1M9Ib2XuOhw\nAoVzyHGGrwKBgCFCdxCWW+eepj6VnHese1f6WquBNFG8pSY5cFHju12MDLvkn/J2\ntAjMMFXfrBa7lisE2VI4g0yRRqfAxpbvdB+4m0Kg+lkyq6+TDCeIYRQy2pcY08Co\nMXy5twVb2ouFPBNlKl2DS9B1V8spHhjSIBJoAsqF/es6We+XVbsjf5o5AoGANs8D\n5dyCBfvp4GJT56mCbS0V7t3DCTyUVKOSIxCg07xOtLyUXcvZqCNjKDljHw6l3AJ7\nTqe1rRgOu2bpbtFgod1EXRj4HVvwV8wRDkBwXOCQD820bGztn3DlXqfbVOgeTWFb\nazBKUwRCdK4+7EzvGf+d0MUnSPK+2qyqLNIKvJ0CgYB4CMymzCR5Y8F2u0Niyg7I\nrgypTGXjAlVsUvg+rQBr+deIJ8GaRoShWhqbCyrJCtEN5L+bP3ds/pbhQRVn/JfY\nAaN7/hEgjvae76g3HQkFhYtYYUYDkzF+Rq6cKrG+49fAI4B3ln0vDeus7tD0qhq8\nIIiOMKuTOblQJXpq3+Dpbg==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-xwc47@tplaboratorio4-a.iam.gserviceaccount.com",
    "client_id": "106143599116226660385",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xwc47%40tplaboratorio4-a.iam.gserviceaccount.com"
  },
  usuarios:[
     { email: 'cliente@test.com', clave: 'client' },
     { email: 'admin@test.com', clave: 'admin13' }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
