import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth";

const firebaseConfig = {

apiKey: process.env.REACT_APP_API_KEY,
authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
projectId:process.env.REACT_APP_PROJECT_ID ,
storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
appId:process.env.REACT_APP_APP_ID
 
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebasedb = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);

/*


apiKey: "AIzaSyCW4b7k_fcgNyarGMhdYEUXCbm6bt-aB30",
  authDomain:"react-firebase-2260d.firebaseapp.com" ,
  projectId:"react-firebase-2260d" ,
  storageBucket:"react-firebase-2260d.appspot.com",
  messagingSenderId:"831832999377" ,
  appId:"1:831832999377:web:28349efd65186c3f460cf0"

*/
