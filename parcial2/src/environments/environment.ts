// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    type: 'service_account',
    project_id: 'tplaboratorio4-a',
    private_key_id: '3005b3e4ab34bf85e0e5188552b4dc24d8788f01',
    // tslint:disable-next-line: max-line-length
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCnrCTvd6XEBLVP\n5h0qThjzhRO2DjQ1RLIdx5lUAR7l+lMZOaj5LVfkXLKlC2BB9/OHHAjrGsnDMn7/\nO/thHjSs9PevMGqqHNP9JJlMNoSjxa79r1czGMEuGwd7/9+vVovWHVwZWQNhLm8u\nZZJzqf+hpJFoLuGiQw5OL0bxYAPqOng8FPMxatdZxMiCmE3o4FWZjUDpbMmOvLVj\nOeG2WP4eqFSZQIRo+cPgIMslMY8gMGBpOy6bQl3ksQO9hhVoF8FP3j+boGT1A2RZ\nvwgiNs1NiE4YeTa4ULHqk7cqyy7A0qaTWAbxjEIcLO86yXM/ox4b+IH/42fUCNZh\nYxjfR/4bAgMBAAECggEAEJeHHiU7rjkoYfbWRantwSdBiz8+PlPaa6T6kLv9p+n3\nUCSLCoFIqcHchwV9qc7UoTbj0QlZFCuf3TeSdAqjpsZ6PgfvU38VISnT0PKyJGyl\nmNfsK+kUBgZ0XU+1fanK86NQdPerJHI5BqEpdrBIqguuvIhVw+iZIUvUsYJRUNuo\nR/TyL79Ish9JDKNKBrq7RpYgkaeiGr3yXYW5KTvZDK/vYt9EYtgXMhQRMG/KmC8Y\nPhnJGrvIlr5JohVYVb+Pf6ksW1hjCLWcAA/bACBzMEMXhZP9w0d1gmBtIl7oXVyW\nFQtD6t9xPM98lBsFylGRj+UJ5LaGoNET88uE2fHYVQKBgQDZwE1a5h9fUmH2Sw8Y\nYFsb9fkSroDTWOZiRhTwyGonCDlua29NxN6hevqANGUmi4aiWZeUxnnMwfV8azCJ\n4sA+bEouQZaTy6pgP66pcXgmu4v0t9uoUpakOG5eBbf5t6W6F0BS1SONnGkp2Obo\nPjFRGdqF8/jYV53RH6Tmze49pwKBgQDFH+7M/5Vf0/biTKDf0d+73dqY6Z2YIJWq\n3giu49O8d5ZuHiIWP2Z/Hv/OuF0TUqrD3Nw+3hjrCcoWI7wyEvfQmx2kmtHi2wSG\net/wRGiLPSMQBtYYzFNvKKh2h1G+25IsCKsC8W01GQDUYQ1OBgQZSArme8IBqoyc\nBbP8T64SbQKBgQCGHLaIAavY3biQJPKLJO14byqUov2dLefXJyrGkekvWRVmOK04\nzMQB2OhoBd02vECTxXJio0tpHRzBIJOomQumZrPZgXPoW0v4M8Czg7tov6IXexXC\nufsl8cuoBQWmu8FKt/9aBQP8uBTdPUYaTBO7y5yXXAgr1urQXhkGPlc5iQKBgEw0\nHwXCnAUylNNA2kQMBxjCF/pa/WBM4G7wbJznV/gYpt+k6Hp/QelMm4lXfiu1Hmyf\nGcl35FwgKa5LXDpjWMec32W9r/upvWMbZyyj1WJWXRKaAfQOMQbcydsgTrqgeS5q\nn2mA2T3Yj5iKeDE8ZCM91XDqUMKCIt9B2SVlzB41AoGAV9fJBdcQYtut133kLlIf\nUfKCcDYl9GhjrD1hgx6ARdJ8ziDiULre0Rg8TQ7OZbdFrgAOTNqmtTe+//2XW0C5\n595zCLlQ3SPwiFkbHiAUrasxps2zEFf4ijeqWW+cje3Mghm129UJC7FIaljM/L3K\nX0m/7Uwprwfo5HgNRah3qOM=\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-xwc47@tplaboratorio4-a.iam.gserviceaccount.com',
    client_id: '106143599116226660385',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    // tslint:disable-next-line: max-line-length
    client_x509_cert_url:'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xwc47%40tplaboratorio4-a.iam.gserviceaccount.com'
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
