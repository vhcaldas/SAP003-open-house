
// Funcao de criar conta na pagina Register - adiciona ao firebase a colecao de usuario
// const createAccount = () => {
//   const nameInput = document.querySelector('.').value;
//   const cnpjInput = document.querySelector('.').value;
//   const emailInput = document.querySelector('.').value;
//   const cepInput = document.querySelector('.').value;
//   const streetInput = document.querySelector('.').value;
//   const numberInput = document.querySelector('.').value;
//   const adjunctInput = document.querySelector('.').value;
//   const districtInput = document.querySelector('.').value;
//   const cityInput = document.querySelector('.').value;
//   const passwordInput = document.querySelector('.').value;
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(emailInput, passwordInput)
//     .then(() => {
//       firebase.firestore().collection('users').add({
//         name: nameInput,
//         cnpj: cnpjInput,
//         email: emailInput,
//         street: streetInput,
//         number: numberInput,
//         adjunct: adjunctInput,
//         district: districtInput,
//         city: cityInput,
//         cep: cepInput,
//         password: passwordInput,
//         userId: firebase.auth().currentUser.uid,
//         addedAt: (new Date()).toLocaleString('pt-BR'),
//       })
//     })
//     .then(() => {
//       window.location = '#home';
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       if (errorCode === 'auth/email-already-in-use') {
//         document.querySelector('.error').textContent = 'E-mail já possui uma conta cadastrada!';
//       } else if (errorCode === 'auth/invalid-email') {
//         document.querySelector('.error').textContent = 'Formato de email inválido!';
//       } else if (errorCode === 'auth/weak-password') {
//         document.querySelector('.error').textContent = 'Senha deve possuir no mínimo 6 caracteres!';
//       }
//     });
// };

// Funcao para usar a API de Cep
// const cepApi = () => {
//   const cep = event.target.value;

// }

const Register = () => {
  const template = `
  <section>
   
    <form class="form">
    
    <p class="error"></p>
  
    </form>
  </section>
  `;

  return template;
};

export default Register;
