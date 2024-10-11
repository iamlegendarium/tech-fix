// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeOkBJQrFzV8Yfw9nQaRb7juqXW4pZ16s",
  authDomain: "tech-fix-9716e.firebaseapp.com",
  projectId: "tech-fix-9716e",
  storageBucket: "tech-fix-9716e.appspot.com",
  messagingSenderId: "599886482522",
  appId: "1:599886482522:web:fb864f834b00cf22591c63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider(); // Initialize Google provider

// Sign in with email and password
signinbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = signinemail.value;
  let password = signinpassword.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Signed in successfully
      alert("Success!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });

  signinemail.value = "";
  signinpassword.value = "";
});

// Google sign-in
mainGoogleBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // If the user is signed in successfully
    alert("Google sign-in successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      alert("You closed the popup without signing in.");
    } else {
      alert("Error during Google sign-in: " + error.message);
    }
  }
});
