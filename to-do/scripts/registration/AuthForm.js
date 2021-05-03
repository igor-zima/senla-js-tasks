import { authUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase/auth';
import { writeUserData } from '../firebase/database';
import { renderToDoPage } from '../App/toDoPage';

export class AuthForm {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  init() {
    this.wrapper.insertAdjacentHTML('afterbegin', this.createAuthForm());

    const registrationForm = document.getElementById('register-form');
    const registrationBtn = registrationForm.querySelector('#register-btn');

    registrationForm.addEventListener('click', this.changeAuth);
    registrationBtn.addEventListener('click', this.registerUser);
  }

  createAuthForm() {
    const html = `
      <div class="register">
        <form class="register__form" id="register-form" action="get" autocomplete="off">
          <h3 id="form-title">Log in</h3>
          <div class="register__input-container">
            <label class="input-wrapper" for="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autocomplete="off"
              />
            </label>
            <label class="input-wrapper" for="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                autocomplete="new-password"
              />
            </label>
          </div>
          <button type="button" class="btn register-btn" id="register-btn">Submit</button>
          <div class="auth-wrapper">
            <span class="auth active" id="sign-in" tabindex="0">Sign In</span>
            <span class="auth" id="sign-up" tabindex="0">Sign Up</span>
          </div>
        </form>
      </div>
      <div class="loader__wrapper">
        <div class="loader">Loading...</div>
      </div>`;

    return html;
  }

  changeAuth(e) {
    const title = document.getElementById('form-title');

    if (e.target.id === 'sign-up') {
      document.querySelector('#sign-in').classList.remove('active');
      document.querySelector('#sign-up').classList.add('active');
      title.textContent = 'Create an account';
    } else if (e.target.id === 'sign-in') {
      document.querySelector('#sign-up').classList.remove('active');
      document.querySelector('#sign-in').classList.add('active');
      title.textContent = 'Log in';
    }
  }

  registerUser = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailValue = email.value;
    const passwordValue = password.value;
    const auth = document.querySelector('.auth.active');

    const loader = document.querySelector('.loader__wrapper');

    if (auth.id === 'sign-up') {
      loader.classList.add('show');
      authUserWithEmailAndPassword(emailValue, passwordValue)
        .then(({ uid }) => {
          writeUserData(uid, emailValue);
          renderToDoPage(uid);
          loader.classList.remove('show');
        })
        .catch((error) => {
          loader.classList.remove('show');

          this.errorHandler(error, email, password);
        });
    } else {
      loader.classList.add('show');
      signInWithEmailAndPassword(emailValue, passwordValue)
        .then((user) => {
          renderToDoPage(user.uid);
          loader.classList.remove('show');
        })
        .catch((error) => {
          loader.classList.remove('show');

          this.errorHandler(error, email, password);
        });
    }
  };

  errorHandler(error, email, password) {
    const errors = {
      'auth/email-already-in-use': 'email',
      'auth/invalid-email': 'email',
      'auth/user-not-found': 'email',
      'auth/weak-password': 'password',
      'auth/wrong-password': 'password',
    };

    const emailEl = email;
    const passwordEl = password;

    email.classList.remove('wrong');
    passwordEl.classList.remove('wrong');
    emailEl.value = '';
    passwordEl.value = '';

    if (errors[error.code] === 'email') {
      emailEl.classList.add('wrong');
      emailEl.placeholder = error.code;
      passwordEl.placeholder = 'Enter your password';
    } else {
      passwordEl.classList.add('wrong');
      passwordEl.placeholder = error.code;
      emailEl.placeholder = 'Enter your email';
    }
  }
}
