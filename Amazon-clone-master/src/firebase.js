// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBAPKPTGG36JWv2P5EQ8MqhrXVh1LhZim4",
  authDomain: "fir-eb03f.firebaseapp.com",
  projectId: "fir-eb03f",
  storageBucket: "fir-eb03f.appspot.com",
  messagingSenderId: "1016139805727",
  appId: "1:1016139805727:web:89b0045bc07e97a023512a",
  measurementId: "G-7LJTBVQC5Q"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
