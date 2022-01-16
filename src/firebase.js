import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFOrBEZXgnyNRXHcMdbnBSl_7VOcPc9Uw",
    authDomain: "idobatakaigi-with-ham-20509.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-20509",
    storageBucket: "idobatakaigi-with-ham-20509.appspot.com",
    messagingSenderId: "1005699203979",
    appId: "1:1005699203979:web:2caaa3eddb206ee62f658e"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('message');

export const pushMessage = ({ name, text }) => {
    messageRef.push({ name, text });
};