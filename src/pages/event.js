import Input from '../components/input.js';
import Button from '../components/button.js';
// import TitleOne from '../components/h-one.js';

// Funcao para criar eventos
const createEvent = () => {
  const imageInput = document.querySelector('.input-image').value;
  const bandNameInput = document.querySelector('.input-bandName').value;
  const dateInput = document.querySelector('.input-date').value;
  const timeInput = document.querySelector('.input-time').value;
  const genresInput = document.querySelector('.genres').value;

  firebase.firestore().collection('events').add({
    image: imageInput,
    bandName: bandNameInput,
    date: dateInput,
    time: timeInput,
    genres: genresInput,
    userId: firebase.auth().currentUser.uid,
    addedAt: (new Date()).toLocaleString('pt-BR'),
  })
    .then(() => {
      imageInput.value = '';
      bandNameInput.value = '';
      dateInput.value = '';
    });
};

const cleanForm = () => {
  document.querySelector('.form').reset();
}

// Funcao renderizar o mapa
// const maps = () => {
// 
// }

//Para sair
// const logOut = () => {
//   firebase.auth().signOut();
// }

//Ir para home
// const userHome = () => {
//   window.location = '#home';
// }

//Ir para o perfil
// const userProfile = () => {
//   window.location = '#profile';
// };

const Event = (props) => {
  const template = `
  <section>
  <form class="form">
  ${Input({
    class: 'input-image',
    placeholder: 'Insira a URL de sua imagem',
    type: 'text',
  })}
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
  <select class="genres">
    <option value="rock">Rock</option>
    <option value="mpb">MPB</option>
    <option value="samba">Samba</option>
    <option value="sertanejo">Sertanejo</option>
    <option value="pop">Pop</option>
  </select>
  ${Button({
    class: 'button-back',
    title: 'LIMPAR',
    onClick: cleanForm,
  })}
  ${Button({
    class: 'button-continue',
    title: 'SALVAR',
    onClick: createEvent,
  })}
  </form>
  </section>

 `;
  return template;
};

export default Event;

// ${TitleOne({
//   text: props.users.name,
// })}


{/* <option value="pagode">Pagode</option>
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
    <option value="gospel">Gospel</option> */}