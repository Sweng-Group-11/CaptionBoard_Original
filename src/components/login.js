import firebase from "firebase/compat/app";

const auth = firebase.auth();
//const whenSignIn = document.getElementById('whenSignedIn');
//const whenSignedOut = document.getElementById('whenSignedOut');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
//const userDetails = document.getElementById('userDetails');
//const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup();
signOutBtn.onclick = () => auth.signOut();