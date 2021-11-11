import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3qOPg3EnZZgIKyvKo60mCf0SzVIkf3o4",
    authDomain: "vue-tech-1429b.firebaseapp.com",
    projectId: "vue-tech-1429b",
    storageBucket: "vue-tech-1429b.appspot.com",
    messagingSenderId: "363786958400",
    appId: "1:363786958400:web:e874421b5de787d15f91a5",
    measurementId: "G-R0PKSR8DSD"
}

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();