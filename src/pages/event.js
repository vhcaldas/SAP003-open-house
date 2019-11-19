import Input from '../components/input.js';
import Button from '../components/button.js';
// import TitleOne from '../components/h-one.js';

// Funcao para criar eventos
const saveEvent = () => {
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

const logOut = () => {
  firebase.auth().signOut();
}

const userHome = () => {
  window.location = '#home';
}

const userProfile = () => {
  window.location = '#profile';
};

const createEvent = (props) => {
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
    onClick: saveEvent,
  })}
  </form>
  </section>

 `;
  return template;
};

const Event = () => {
  const template = `
  <header class='header'>
  <div class='header-title'>
    <label for='toggle-side-menu'>
      <div class='fas fa-ellipsis-v'></div>
    </label>
    <div class='header-img'>
    </div>
  </div>
    <input 
      type='checkbox'
      id='toggle-side-menu' 
      class='toggle-side-menu'
    />
    <div class='side-menu hide-desktop'>
    ${Button({
    type: 'button',
    class: 'btn profile-btn ',
    onClick: userHome,
    title: 'HOME',
  })}
    ${Button({
    type: 'button',
    class: 'btn logout-btn ',
    onClick: logOut,
    title: 'SAIR'
  })}
    </div>
  </header>
    <section id="create-event" class="create-event">${createEvent()}</section>
  <footer class="footer">
    <div class='menu-icon'></div>
    ${Button({
    type: 'button',
    class: 'btn logout-btn fas fa-user menu-icon',
    onClick: userProfile,
    title: '',
  })}
  </footer>
  `;
  return template;
}

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