import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV3By2TBg0V9DJSO0yHF000hUJgQ99xVA",
  authDomain: "little-shield-49ee9.firebaseapp.com",
  projectId: "little-shield-49ee9",
  storageBucket: "little-shield-49ee9.appspot.com",
  messagingSenderId: "399522702930",
  appId: "1:399522702930:web:50d5b862d85e16ada4618b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to Show Messages
function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  if (!messageDiv) return;

  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("signup");
  const signInButton = document.getElementById("submitSign");

  // SIGN UP FUNCTION
  if (signUpButton) {
    signUpButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const email = document.getElementById("email")?.value.trim();
      const password = document.getElementById("password")?.value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const username = document.getElementById("username")?.value.trim();

      if (!email || !password || !phone || !username) {
        showMessage("All fields are required!", "signUpMessage");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userData = { email, username, phone };

        await setDoc(doc(db, "users", user.uid), userData);

        showMessage("Account Created Successfully!", "signUpMessage");

        setTimeout(() => {
          window.location.href = "login.html";
        }, 1000);

      } catch (error) {
        console.error("Error creating user:", error);
        if (error.code === "auth/email-already-in-use") {
          showMessage("Email address already exists!", "signUpMessage");
        } else {
          showMessage("Unable to create user", "signUpMessage");
        }
      }
    });
  } else {
    console.error("Sign-up button not found!");
  }

  // SIGN IN FUNCTION
  if (signInButton) {
    signInButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const email = document.getElementById("email")?.value.trim();
      const password = document.getElementById("password")?.value.trim();

      if (!email || !password) {
        showMessage("Please enter both email and password!", "signInMessage");
        return;
      }

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        showMessage("Login Successful!", "signInMessage");

        localStorage.setItem("loggedInUserId", user.uid);

        setTimeout(() => {
          window.location.href = "Home.html";
        }, 1000);

      } catch (error) {
        console.error("Login Error:", error.code, error.message);

        if (error.code === "auth/user-not-found") {
          showMessage("Account does not exist!", "signInMessage");
        } else if (error.code === "auth/wrong-password") {
          showMessage("Incorrect Password!", "signInMessage");
        } else {
          showMessage("Error: " + error.message, "signInMessage");
        }
      }
    });
  } else {
    console.error("Sign-in button not found!");
  }
});
