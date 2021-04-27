import { authUser } from '../database/firebase';

export function registerHandler() {
  const registrationForm = document.getElementById('register-form');
  const registrationBtn = registrationForm.querySelector('#register-btn');

  registrationForm.addEventListener('click', changeAuth);
  registrationBtn.addEventListener('click', registerUser);
}

function registerUser() {
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  const auth = document.querySelector('.auth.active');
  const authMethod = auth.id === 'sign-up' ? 'signUp' : 'signInWithPassword';

  authUser(authMethod, emailValue, passwordValue).then((data) => {
    console.log(data);
  });
}

function changeAuth(e) {
  if (e.target.id === 'sign-up') {
    document.querySelector('#sign-in').classList.remove('active');
    document.querySelector('#sign-up').classList.add('active');
  } else if (e.target.id === 'sign-in') {
    document.querySelector('#sign-up').classList.remove('active');
    document.querySelector('#sign-in').classList.add('active');
  }
}
