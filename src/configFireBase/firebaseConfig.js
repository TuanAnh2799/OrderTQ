import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCou96SVkdBSXi_Dp0XY0t2kzMFdRwvReE",
  authDomain: "testappproducts.firebaseapp.com",
  databaseURL: "https://testappproducts-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testappproducts",
  storageBucket: "testappproducts.appspot.com",
  messagingSenderId: "11277555817",
  appId: "1:11277555817:web:f4bcdb47aec797eccdaaf8"
};


export const firebaseApp =  firebase.initializeApp(firebaseConfig);
