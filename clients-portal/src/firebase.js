// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCcPJHR67MtN-kyWWRU0vugvQqG9HhCcqU',
  authDomain: 'clients-portal-omm.firebaseapp.com',
  projectId: 'clients-portal-omm',
  storageBucket: 'clients-portal-omm.appspot.com',
  messagingSenderId: '841911928899',
  appId: '1:841911928899:web:e374c71454f380eb5d6cf6',
  measurementId: 'G-7XMC1D007S',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage();

export { auth };
export default db;

//storage
export async function upload(file, user, setLoading) {
  const fileRef = ref(storage, user.uid + '.png');

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);

  setLoading(false);
  alert('Uploaded file!');
}
