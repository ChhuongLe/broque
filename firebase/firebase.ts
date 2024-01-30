// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASU2ZzXtgQJeER3zD_Vpt7gNEh9cu2pEg",
  authDomain: "broque-f8aa7.firebaseapp.com",
  projectId: "broque-f8aa7",
  storageBucket: "broque-f8aa7.appspot.com",
  messagingSenderId: "868056948830",
  appId: "1:868056948830:web:d24e9b763eaa1d23e354cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export function to init firebase
export const initFirebase = () => {
  return app;
}