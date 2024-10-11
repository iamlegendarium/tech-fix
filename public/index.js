// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Firebase configuration
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
const db = getFirestore(app);
const auth = getAuth();
const docRef = collection(db, "users");
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Get DOM elements
const emailInputElement = document.getElementById("useremail");
const passwordInputElement = document.getElementById("userpassword");
const getStartedBtn = document.getElementById("getStartedBtn");
const googlebtn = document.getElementById("googlebtn");
const facebookbtn = document.getElementById("facebookbtn");

// Email/Password Sign Up
getStartedBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    // Get input values
    const emailValue = emailInputElement.value;
    const passwordValue = passwordInputElement.value;

    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailValue,
      passwordValue
    );

    // Store user info in Firestore
    await addDoc(docRef, {
      email: emailValue,
      userId: userCredential.user.uid,
      createdAt: new Date(),
    });

    alert("Successfully Signed Up!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }

  // Clear inputs
  emailInputElement.value = "";
  passwordInputElement.value = "";
});

// Rest of the code remains the same

// Google Sign In
googlebtn.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const result = await signInWithPopup(auth, googleProvider);
    window.location.href = "dashboard.html";
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      console.log("User closed the popup window");
    } else {
      console.error("Error during Google sign in:", error);
    }
  }
});

// Facebook Sign In
facebookbtn.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const result = await signInWithPopup(auth, facebookProvider);
    window.location.href = "dashboard.html";
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      console.log("User closed the popup window");
    } else {
      console.error("Error during Facebook sign in:", error);
    }
  }
});
