// Import the Firebase SDK
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import other services as needed
import 'firebase/compat/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access Firestore (or other services) if needed
const firestore = firebase.firestore();

export { firebase, firestore };
