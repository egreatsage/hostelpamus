import {initializeApp} from 'firebase/app'
import {getFirestore} from "@firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB43o8NIP0omKdDuc_1j5MATiUM5ZBvKN8",
    authDomain: "hostelpamus.firebaseapp.com",
    projectId: "hostelpamus",
    storageBucket: "hostelpamus.appspot.com",
    messagingSenderId: "117671850099",
    appId: "1:117671850099:web:aebec93187a249319eba06",
    measurementId: "G-QER0YM1W38"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export default app;
 
  