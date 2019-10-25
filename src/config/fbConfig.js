 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDDcE0Vd7o0L_tMQg_t1Tchw2ZFBMgq0XQ",
    authDomain: "marioplan-83c05.firebaseapp.com",
    databaseURL: "https://marioplan-83c05.firebaseio.com",
    projectId: "marioplan-83c05",
    storageBucket: "",
    messagingSenderId: "252812314003",
    appId: "1:252812314003:web:f42ec32c526a352c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;