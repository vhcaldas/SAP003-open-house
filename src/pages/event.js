import Input from '../components/input.js';
import Button from '../components/button.js';

// Funcao para criar eventos
// const createEvent = () => {
//   const imageInput = document.querySelector('.').value;
//   const nameInput = document.querySelector('.').value;
//   const dateInput = document.querySelector('.').value;
//   const addressInput = document.querySelector('.').value;

//         firebase.firestore().collection('events').add({
//           image: imageInput,
//           name: nameInput,
//           data: dataInput,
//           address: addressInput,
//           userId: firebase.auth().currentUser.uid,
//           addedAt: (new Date()).toLocaleString('pt-BR'),
//         })
//           .then(() => {
//             imageInput.value = '';
//             nameInput.value = '';
//             dateInput.value = '';
//           });
//       };

// Funcao renderizar o mapa
// const maps = () => {
// 
// }

// Funcao para ir pra profile
// const goProfile = () => {
//   window.location = '#profile';
// };

// Funcao para ir pra home
// const goHome = () => {
//   window.location = '#home';
// };

// Funcao para fazer LogOut
// const goOut = () => {
//   firebase.auth().signOut();
// }

const Event = (props) => {
  const template = `
  <section>
  <form class="form">
  ${Input({
    class: 'input-bandName',
    placeholder: 'Nome da banda/artista',
    type: 'text',
  })}
  ${Input({
    class: 'input-date',
    placeholder: 'Selecione a data',
    type: 'date',
  })}
  ${Input({
    class: 'input-time',
    placeholder: 'Selecione a data',
    type: 'time',
    min: '00:00',
    max: '23:00',
  })}
  <select>
    <option value="rock">Rock</option>
    <option value="mpb">MPB</option>
    <option value="samba">Samba</option>
    <option value="sertanejo">Sertanejo</option>
    <option value="forro">Forró</option>
    <option value="pagode">Pagode</option>
    <option value="jazz">Jazz</option>
    <option value="blues">Blues</option>
    <option value="funk">Funk</option>
    <option value="hiphop-rap">Hip hop/Rap</option>
    <option value="reggae">Reggae</option>
    <option value="folk">Folk</option>
    <option value="alternativa">Alternativa</option>
    <option value="ritmos-latinos">Ritmos latinos</option>
    <option value="flashback">Flasback</option>
    <option value="pop">Pop</option>
    <option value="gospel">Gospel</option>
  </select>
  ${Button({
    class: 'button-back',
    title: 'LIMPAR',
    // onClick: cleanForm,
  })}
  ${Button({
    class: 'button-continue',
    title: 'SALVAR',
    // onClick: saveEvent,
  })}
  </form>
  </section>

 `;
  return template;
};

export default Event;


