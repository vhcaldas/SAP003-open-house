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

const Profile = (props) => {
  const template = `
  <header class='header'>
  <div class='header-title'>
    <label for='toggle-side-menu'>
      <div class='fas fa-ellipsis-v'></div>
    </label>
    ${Paragraph({
    class: 'my-event',
    text: props.users.name,
  })}
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
    class: 'btn profile-btn ',
    onClick: userEvents,
    title: 'MEUS EVENTOS',
  })}
    ${Button({
    type: 'button',
    class: 'btn logout-btn ',
    onClick: logOut,
    title: 'SAIR'
  })}
    </div>
  </header>
  ${TitleOne({
    class: 'my-data',
    text: 'Meus Dados',
  })}
  ${Paragraph({
    class: 'my-address',
    text: props.users.address + ', ' + props.users.number + ', ' + props.users.city,
  })}
  <div style="width: 340px; height: 150px" class='mapa'></div>
  ${TitleTwo({
    class: 'my-local',
    text: 'Meu Estabelecimento',
  })}
  <footer class="footer">
  </footer>
  `;
  return template;
}

export default Profile;