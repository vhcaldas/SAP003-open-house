import Input from '../components/input.js'
import Login from './login.js';
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

const backToLogin = () => {
  window.location='#Login';
}

const Register = () => {
  const template = `
  <section>
    <img class="logo" src="./images/logo.png" alt="logo autofalante escrito live In Sampa">
    <form class="form">
    ${Input({
      class: 'input-name',
      placeholder: 'Nome do estabelecimento',
      type:'text',
    })}
    ${Input({
      class: 'input-CNPJ',
      placeholder: 'CNPJ',
      type:'number',
    })}
    ${Input({
      class: 'input-CEP',
      placeholder: 'CEP',
      type:'number',
    })}${Input({
      class: 'input-address',
      placeholder: 'Endereço - Ex.Rua/Avenida',
      type:'text',
    })}
    ${Input({
      class: 'input-number',
      placeholder: 'Nº',
      type:'number',
    })}
    ${Input({
      class: 'input-additionalAddress',
      placeholder: 'Complemento',
      type:'text',
    })}
    ${Input({
      class: 'input-neighborhood',
      placeholder: 'Bairro',
      type:'text',
    })}
    ${Input({
      class: 'input-city',
      placeholder: 'Cidade',
      type:'text',
    })}
    <select>
      <option value="SP">SP</option>
    </select>
    ${Input({
      class: 'input-phone',
      placeholder: 'Telefone',
      type:'number',
    })}
    ${Input({
      class: 'input-email',
      placeholder: 'email@exemplo.com',
      type:'email',
    })}
    ${Input({
      class: 'input-password',
      placeholder: 'Senha',
      type:'password',
    })}
    <p class="error"></p>
    ${Button({
      class: 'button-back',
      title: 'Voltar',
      onClick: backToLogin,
    })}
    ${Button({
      class: 'button-continue',
      title: 'Continuar',
    })}
    </form>
  </section>
  `;

  return template;
};

export default Register;
