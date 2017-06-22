import firebase from 'firebase';

// TODO: replace with your project's customized code snippet
const config = {
  apiKey: "AIzaSyAgGI4-SAg79IDae_CvmeyUjp6NZ_cHCP4",
    authDomain: "dronedb-5d3c5.firebaseapp.com",
    databaseURL: "https://dronedb-5d3c5.firebaseio.com",
    projectId: "dronedb-5d3c5",
    storageBucket: "",
    messagingSenderId: "654336657760"
};

// initialize firebase app with config information
firebase.initializeApp(config);

const auth = firebase.auth();
export { firebase, auth }
