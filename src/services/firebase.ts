import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD0q0dQt_R9DoRg62CLeO-mvOcR5pX0xM8',
  authDomain: 'auth-yt-5605a.firebaseapp.com',
  projectId: 'auth-yt-5605a',
  storageBucket: 'auth-yt-5605a.appspot.com',
  messagingSenderId: '749599140454',
  appId: '1:749599140454:web:fe76ae1cb07afa4a655ba7'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);