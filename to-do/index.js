import { AuthForm } from './scripts/registration/AuthForm';
import './styles/main.scss';

const app = document.getElementById('app');

const authForm = new AuthForm(app);
authForm.init();
