
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
//   import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
//   import {getFirestore,setDoc, doc} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyAV3By2TBg0V9DJSO0yHF000hUJgQ99xVA",
//     authDomain: "little-shield-49ee9.firebaseapp.com",
//     projectId: "little-shield-49ee9",
//     storageBucket: "little-shield-49ee9.firebasestorage.app",
//     messagingSenderId: "399522702930",
//     appId: "1:399522702930:web:50d5b862d85e16ada4618b"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   function showMessage(message,divId){
//     var messageDiv=document.getElementById(divId);
//     messageDiv.style.display="block";
//     messageDiv.innerHTML=message;
//     messageDiv.style.opacity=1;
//     setTimeout(function(){
//         messageDiv.style.opacity=0;
//     },5000); 

    
//   }

//   function showMessage(message,divId){
//     var messageDiv=document.getElementById(divId);
//     messageDiv.style.display="block";
//     messageDiv.innerHTML=message;
//     messageDiv.style.opacity=1;
//     setTimeout(function(){
//         messageDiv.style.opacity=0;

//     },5000);
//   }

//   const signUp=document.getElementById('signUp');
//   signUp.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email=document.getElementById('email').value;
//     const password=document.getElementById('password').value;
//     const phone=document.getElementById('phone').value;
//     const username=document.getElementById('username').value;
    
//     const auth=getAuth();
//     const db=getFirestore();

//     createUserWithEmailAndPassword(auth,email,password)
//     .then((userCredential)=>{
//         const user=userCredential.user;
//         const userData={
//             email:email,
//             username:username,


//         };

//         showMessage('Account Created Succesfully','signUpMessage');
//         const docRef=doc(db,"users",user.uid);
//         setDoc(docRef,userData)
//         .then(()=>{
//             window.location.href='Home.html';

//         })
//         .catch((error)=>{
//             console.error("error writing space document",error)
//         });
//     })
//     .catch((error)=>{
//         const errorCode=error.code;
//         if(errorCode=='auth/email-already-in-use')
//         {
//             showMessage('email address already exists!!','signUpMessage');
    
//         }
//         else{
//             showMessage('Enable to Create User','signUpMessage');
//         }
//     })

//   })


// // Import the necessary Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAV3By2TBg0V9DJSO0yHF000hUJgQ99xVA",
//   authDomain: "little-shield-49ee9.firebaseapp.com",
//   projectId: "little-shield-49ee9",
//   storageBucket: "little-shield-49ee9.appshot.com",
//   messagingSenderId: "399522702930",
//   appId: "1:399522702930:web:50d5b862d85e16ada4618b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore();

// function showMessage(message, divId) {
//   var messageDiv = document.getElementById(divId);
//   messageDiv.style.display = "block";
//   messageDiv.innerHTML = message;
//   messageDiv.style.opacity = 1;
//   setTimeout(function () {
//     messageDiv.style.opacity = 0;
//   }, 5000);
// }

// const signUp = document.getElementById('signup');
// signUp.addEventListener('click', (event) => {
//   event.preventDefault();
  
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const username = document.getElementById('username').value;
  
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       const userdata = {
//         email: email,
//         username: username,
//         phone:phone,
//       };

//       showMessage('Account Created Successfully', 'signUpMessage');
      
//       const docRef = doc(db, "users", user.uid);
//       setDoc(docRef, userdata)
//         .then(() => {
//           window.location.href = 'Home.html';
//         })
//         .catch((error) => {
//           console.error("Error writing document", error);
//         });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       if (errorCode === 'auth/email-already-in-use') {
//         showMessage('Email address already exists!', 'signUpMessage');
//       } else {
//         showMessage('Unable to create user', 'signUpMessage');
//       }
//     });
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV3By2TBg0V9DJSO0yHF000hUJgQ99xVA",
  authDomain: "little-shield-49ee9.firebaseapp.com",
  projectId: "little-shield-49ee9",
  storageBucket: "little-shield-49ee9.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "399522702930",
  appId: "1:399522702930:web:50d5b862d85e16ada4618b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

document.getElementById('signup').addEventListener('click', (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;
  const username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userdata = {
        email: email,
        username: username,
        phone: phone, // Fixed missing phone field
      };

      showMessage('Account Created Successfully', 'signUpMessage');
      
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userdata)
        .then(() => {
          window.location.href = 'Home.html';
        })
        .catch((error) => {
          console.error("Error writing document", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') { // Fixed extra space
        showMessage('Email address already exists!', 'signUpMessage');
      } else {
        showMessage('Unable to create user', 'signUpMessage');
      }
    });
});
