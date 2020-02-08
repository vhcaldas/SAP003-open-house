import Button from '../components/button.js';
import Input from '../components/input.js';

function resetPassword() {
  const emailAddress = document.querySelector('.fp-input').value;
  firebase.auth().sendPasswordResetEmail(emailAddress)
    .then(() => {
      document.querySelector('.alertMessage').textContent = 'Email enviado. Verifique sua caixa de email';
    });
}

function ForgotPassword() {
  const template = `
    <div class="fp-main">
      <div class="fp-img-container">
        <img class="login-logo" src="./images/logocinza.png" alt="logo autofalante escrito live In Sampa">
      </div>
      <section class= "forgot-password-section">
        <h1 class="text-simple">Redefinição de Senha!</h1>
        <form class="fp-form">
          ${Input({
            class: 'fp-input',
            placeholder: 'exemplo@seudomínio.com',
            value: '',
            type: 'email',
          })}
          ${Button({
            id: 'btnResetpassword',
            class: 'fp-button',
            title: 'Redefinir senha',
            onClick: resetPassword,
          })}
        </form>
        <p class="alertMessage"></p>
      </section>
    </div>
  `
;
  window.location.hash = 'forgot_password';
  return template;
}

export default ForgotPassword;