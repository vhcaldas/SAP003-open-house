
//Funcao para fazer login

// const signIn = () => {
//   const email = document.querySelector('.').value;
//   const password = document.querySelector('.').value;
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => {
//       window.location = '#home';
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       if (errorCode === 'auth/wrong-password') {
//         document.querySelector('.error').textContent = 'Senha Incorreta';
//       } else if (errorCode === 'auth/user-not-found') {
//         document.querySelector('.error').textContent = 'Email não registrado!';
//       } else if (errorCode === 'auth/invalid-email') {
//         document.querySelector('.error').textContent = 'Formato de email inválido';
//       }
//     });
// };

// Funcao ir pagina de registro - chamar no botao registar-se

// const register = () => {
//   window.location = '#register';
// }

const Login = () => {
  const template = `
  <section>
   
    <form class="form">
   
    <p class="error"></p>
    
    </form>
  </section>
  `;

  return template;
};

export default Login;