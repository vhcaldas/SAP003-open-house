import Button from '../components/button.js'
import Paragraph from '../components/paragraph.js'
import TitleOne from '../components/h-one.js';
import TitleTwo from '../components/h-two.js';

const logOut = () => {
  firebase.auth().signOut();
}
const userEvents = () => {
  window.location = '#event';
}

const userHome = () => {
  window.location = '#home';
}

const aboutUs = () => {
  firebase.firestore()
    .collection('profile')
    .where('userId', '==', firebase.auth().currentUser.uid)
    .get().then((content) => {
      content.docs.forEach((item) => {
        document.querySelector('.about-us').innerHTML = `
          <p>${item.data().price}</p>
          <p>${item.data().drinks.join(', ')}</p>
          <p>${item.data().food}</p>
          <p>${item.data().features.join(', ')}</p>
          <p>${item.data().music.join(', ')}</p>
        `;
      })
    }
  )
}

const Profile = (props) => {
  const template = `
    <header class='header'>
    <div class='header-title'>
      <div class="text-header">
        <label for='toggle-side-menu'>
          <div class='fas fa-bars'></div>
        </label>
        ${Paragraph({
          class: 'my-home',
          text: props.users.name,
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
        onClick: userHome,
        title: 'HOME',
      })}
      ${Button({
        type: 'button',
        class: 'btn profile-btn menu-options',
        onClick: userEvents,
        title: 'MEUS EVENTOS',
      })}
      ${Button({
        type: 'button',
        class: 'btn logout-btn menu-options',
        onClick: logOut,
        title: 'SAIR'
      })}
    </div>
  </header>
  <main>
    <section class="user-profile">
      ${TitleOne({
        class: 'my-home',
        text: 'Meus Dados',
      })}
      ${Paragraph({
        class: 'my-address',
        text: props.users.address + ', ' + props.users.number + ', ' + props.users.neighborhood + ', ' + props.users.city +'.',
      })}
      <div class='mapa'></div>
      ${TitleTwo({
        class: 'my-local',
        text: 'Meu Estabelecimento',
      })}
      <div class="about-us">${aboutUs() || 'Carregando ...'}</div>
    </section>
  </main>
  <footer class="footer">
  </footer>
  `;
  return template;
}

export default Profile;