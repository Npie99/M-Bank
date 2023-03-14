// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB3jR_pw0hSzARJaEVMUzNdiZe5zKROaPk',
  authDomain: 'psu-banking-16.firebaseapp.com',
  databaseURL: 'https://console.firebase.google.com/u/0/project/psu-banking-16/database/psu-banking-16-default-rtdb/data/~2F',
  projectId: 'psu-banking-16',
  storageBucket: 'psu-banking-16.appspot.com',
  messagingSenderId: '1058339793157',
  appId: '1:1058339793157:web:8c76f6075d21cfe1506f6c',
  measurementId: 'G-FPRYW0N8GS'
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
console.log(firebase)
export default firebase
