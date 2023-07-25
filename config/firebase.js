import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAfqXP2J8ECsMcv1gw6szVauEd5cqUgz40',
  authDomain: 'bitlabs-contacts.firebaseapp.com',
  projectId: 'bitlabs-contacts',
  storageBucket: 'bitlabs-contacts.appspot.com',
  messagingSenderId: '600812434822',
  appId: '1:600812434822:web:d063828bb633b7d26d6807',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
