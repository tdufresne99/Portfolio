import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVEsol2JhBRimyPkoa3xx6zVcLwtiOnl8",
    authDomain: "td-portfolio-b4be7.firebaseapp.com",
    projectId: "td-portfolio-b4be7",
    storageBucket: "td-portfolio-b4be7.appspot.com",
    messagingSenderId: "868440410081",
    appId: "1:868440410081:web:45ed507d66d07d9bdaf4a0"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};