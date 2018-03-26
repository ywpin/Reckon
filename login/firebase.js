import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDKrimCcFfJz17LhBQYo4uc6jvnRV31h34",
    authDomain: "reckon-22a96.firebaseapp.com",
    databaseURL: "https://reckon-22a96.firebaseio.com",
};

export const firebaseApp = Firebase.initializeApp(config);
