import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNiYmprJyylhmXmcrBZGWnOU8wcJ7aghI",
  authDomain: "react-project-13829.firebaseapp.com",
  databaseURL: "https://react-project-13829.firebaseio.com",
  projectId: "react-project-13829",
  storageBucket: "react-project-13829.appspot.com",
  messagingSenderId: "871690932986",
  appId: "1:871690932986:web:98feec602d7c3d7eba6f43"
};

firebase.initializeApp(firebaseConfig);

// var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account'} );
export const signInwithGoogle = () => {
  console.log("test1")
  return auth.signInWithPopup(provider);
}
export default firebase;

