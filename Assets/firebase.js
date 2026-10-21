// Import SDK Firebase v10 dari CDN Google
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Konfigurasi Firebase proyek ecbt-aipcloud
const firebaseConfig = {
  apiKey: "AIzaSyAS-6MOil0g_vkderxv2hlSO3fu4udFXbo",
  authDomain: "ecbt-aipcloud-10628.firebaseapp.com",
  databaseURL: "https://ecbt-aipcloud-10628-default-rtdb.firebaseio.com",
  projectId: "ecbt-aipcloud-10628",
  storageBucket: "ecbt-aipcloud-10628.firebasestorage.app",
  messagingSenderId: "39120766837",
  appId: "1:39120766837:web:52c97db5dcb3489b97f53c"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor modul database (Firestore) dan auth agar bisa diimpor halaman lain
export const db = getFirestore(app);
export const auth = getAuth(app);
