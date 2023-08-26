import { createApp } from "vue";
import App from "./App.vue";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD--O8VVvxRrZ4PEbt6g1LmZuzCkKb-0j0",
  authDomain: "portfolio-website-45a25.firebaseapp.com",
  projectId: "portfolio-website-45a25",
  storageBucket: "portfolio-website-45a25.appspot.com",
  messagingSenderId: "800063386443",
  appId: "1:800063386443:web:5aafc6c8f5f769c0236ece",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
createApp(App).mount("#app");
