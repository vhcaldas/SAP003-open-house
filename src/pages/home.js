import Button from '../components/button.js'
import Paragraph from '../components/paragraph.js'

const logOut = () => {
  firebase.auth().signOut();
}
const userEvents = () => {
  window.location = '#event';
}

const userProfile = () => {
  window.location = '#profile';
};

function delet() {
  const id = event.target.dataset.id;
  firebase.firestore().collection('events').doc(id).delete();
  document.querySelector(`ul[data-id='${id}']`).remove();
}

const printCard = () => {
  const userId = firebase.auth().currentUser.uid;
  const allEvent = firebase.firestore().collection('events');

  allEvent.orderBy('date').get().then(snap => {
    let postsLayout = '';
    snap.forEach((doc) => {
      let dt = doc.data().date;
      let date = (new Date(dt)).toLocaleDateString('pt-BR');
      postsLayout += `
        <ul class="event-post" data-id='${doc.id}' class='post'>
        <div class="div-img">
          <img class="image" src="${doc.data().image}">
        </div>
        <div class="div-text">
          <ul> Nome da Banda: ${doc.data().bandName} </ul>
          <ul> Data: ${date} </ul>
          <ul> Horário: ${doc.data().time} </ul>
          <ul> Gênero: ${doc.data().genres} </ul>
          <ul> Nome do Bar: ${doc.data().name} </ul>
        </div>`
      if (userId === doc.data().userId) {
        postsLayout += `
          ${Button({ class: 'btn-delete fas fa-trash', dataId: doc.id, title: '', onClick: delet })}</ul>`
      } else {
        postsLayout += `</ul>`
      }
    });
    document.getElementById('post-layout').innerHTML = postsLayout;
  });
}

const Home = () => {
  const template = `
  <header class='header'>
    <div class='header-title'>
      <div class=text-header></div>
        <label for='toggle-side-menu'>
          <div class='fas fa-bars'></div>
        </label>
        ${Paragraph({
        class: 'my-home',
        text: 'Eventos',
        })}
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
      class: 'btn profile-btn menu-options',
      onClick: userEvents,
      title: 'Meus Eventos',
      })}
      ${Button({
      type: 'button',
      class: 'btn logout-btn menu-options',
      onClick: logOut,
      title: 'Sair'
      })}
    </div>
  </header>
  <main class='print-event'>
    <section class='post-layout' id='post-layout'></section>
  </main>
  <footer class="footer">
    <div class='menu-icon'>
      ${Button({
      type: 'button',
      class: 'btn logout-btn fas fa-user menu-icon',
      onClick: userProfile,
      title: '',
      })}
    </div>
  </footer>
  `;

  return template;
}

window.printCard = printCard;

export default Home;