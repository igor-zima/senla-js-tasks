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
          <h3>Create an account</h3>
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
          <button type="button" class="btn register-btn" id="register-btn">Submit</button>
          <div class="auth-wrapper">
            <span class="auth active" id="sign-in" tabindex="0">Sign In</span>
            <span class="auth" id="sign-up" tabindex="0">Sign Up</span>
          </div>
        </form>
      </div>`;

    return html;
  }

  changeAuth(e) {
    if (e.target.id === 'sign-up') {
      document.querySelector('#sign-in').classList.remove('active');
      document.querySelector('#sign-up').classList.add('active');
    } else if (e.target.id === 'sign-in') {
      document.querySelector('#sign-up').classList.remove('active');
      document.querySelector('#sign-in').classList.add('active');
    }
  }

  registerUser() {
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const auth = document.querySelector('.auth.active');

    if (auth.id === 'sign-up') {
      authUserWithEmailAndPassword(emailValue, passwordValue)
        .then(({ uid }) => {
          writeUserData(uid, emailValue);
          renderToDoPage(uid);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(emailValue, passwordValue)
        .then((user) => {
          renderToDoPage(user.uid);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
