import Button from '../components/button.js'

const logOut = () => {
  firebase.auth().signOut();
}
const userEvents = () => {
  window.location = '#event';
}

const userHome = () => {
  window.location = '#home';
}

const Profile = () => {
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
  <footer class="footer">
  </footer>
  `;
  return template;
}

export default Profile;