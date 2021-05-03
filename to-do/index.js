import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { firebaseConfig } from './scripts/firebase/config';
import { AuthForm } from './scripts/registration/AuthForm';
import './styles/main.scss';

firebase.initializeApp(firebaseConfig);

const app = document.getElementById('app');

const authForm = new AuthForm(app);
authForm.init();
