import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBjAKueli5NzYjkV5tpuWRviIoT52KS95o",
  authDomain: "todo-app-801c5.firebaseapp.com",
  projectId: "todo-app-801c5",
  storageBucket: "todo-app-801c5.appspot.com",
  messagingSenderId: "225196679237",
  appId: "1:225196679237:web:d97c5771df9374aa39432c"
}

firebase.initializeApp(firebaseConfig)
export default firebase
