import Input from '../components/input.js';
import Button from '../components/button.js';

const createAccount = () => {
  const nameInput = document.querySelector('.input-name').value;
  const cnpjInput = document.querySelector('.input-CNPJ').value;
  const cepInput = document.querySelector('.input-CEP').value;
  const addressInput = document.querySelector('.input-address').value;
  const numberInput = document.querySelector('.input-number').value;
  const additionalInput = document.querySelector('.input-additionalAddress').value;
  const neighborhoodInput = document.querySelector('.input-neighborhood').value;
  const cityInput = document.querySelector('.input-city').value;
  const phoneInput = document.querySelector('.input-phone').value;
  const emailInput = document.querySelector('.input-email').value;
  const passwordInput = document.querySelector('.input-password').value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailInput, passwordInput)
    .then(() => {
      firebase.firestore().collection('users').add({
        name: nameInput,
        cnpj: cnpjInput,
        email: emailInput,
        address: addressInput,
        number: numberInput,
        additional: additionalInput,
        neighborhood: neighborhoodInput,
        city: cityInput,
        phone: phoneInput,
        cep: cepInput,
        password: passwordInput,
        userId: firebase.auth().currentUser.uid,
        addedAt: (new Date()).toLocaleString('pt-BR'),
      })
    })
    .then(() => {
      window.location = '#home';
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        document.querySelector('.error').textContent = 'E-mail já possui uma conta cadastrada!';
      } else if (errorCode === 'auth/invalid-email') {
        document.querySelector('.error').textContent = 'Formato de email inválido!';
      } else if (errorCode === 'auth/weak-password') {
        document.querySelector('.error').textContent = 'Senha deve possuir no mínimo 6 caracteres!';
      }
    });
};

const zipNumber = () => {
  const cep = event.target.value;
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(response => response.json())
      .then(response => {
        document.querySelector('.input-address').value = response.logradouro;
        document.querySelector('.input-neighborhood').value = response.bairro;
        document.querySelector('.input-city').value = response.localidade;
      })

  }

}

const backToLogin = () => {
  window.location = '#Login';
}

const Register = () => {
  const template = `
  <section>
    <img class="logo" src="./images/logo.png" alt="logo autofalante escrito live In Sampa">
    <form class="form">
    ${Input({
    class: 'input-name',
    placeholder: 'Nome do estabelecimento',
    type: 'text',
  })}
    ${Input({
    class: 'input-CNPJ',
    placeholder: 'CNPJ',
    type: 'number',
  })}
    ${Input({
    class: 'input-CEP',
    placeholder: 'CEP - Ex.01234567',
    type: 'number',
    onchange: zipNumber,
  })}${Input({
    class: 'input-address',
    placeholder: 'Endereço - Ex.Rua/Avenida',
    type: 'text',
  })}
    ${Input({
    class: 'input-number',
    placeholder: 'Nº',
    type: 'number',
  })}
    ${Input({
    class: 'input-additionalAddress',
    placeholder: 'Complemento',
    type: 'text',
  })}
    ${Input({
    class: 'input-neighborhood',
    placeholder: 'Bairro',
    type: 'text',
  })}
    ${Input({
    class: 'input-city',
    placeholder: 'Cidade',
    type: 'text',
  })}
    <select>
      <option value="SP">SP</option>
    </select>
    ${Input({
    class: 'input-phone',
    placeholder: 'Telefone',
    type: 'number',
  })}
    ${Input({
    class: 'input-email',
    placeholder: 'email@exemplo.com',
    type: 'email',
  })}
    ${Input({
    class: 'input-password',
    placeholder: 'Senha',
    type: 'password',
  })}
    <p class="error"></p>
    ${Button({
    class: 'button-back',
    title: 'VOLTAR',
    onClick: backToLogin,
  })}
    ${Button({
    class: 'button-continue',
    title: 'CONTINUAR',
    onClick: createAccount,
  })}
    </form>
  </section>
  `;

  return template;
};

export default Register;
