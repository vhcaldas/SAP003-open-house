import Button from '../components/button.js'

const logOut = () => {
  firebase.auth().signOut();
}
const userEvents = () => {
  window.location = '#event';
}

const userProfile = () => {
  window.location = '#profile';
};

const Home = () => {
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

export default Home;

// const Home = (props) => {
//   // let layout = '';
//   // props.events.forEach(snap => {
//   //   const event = snap.data();
//   //   layout += CardEvent({
//   //     id: snap.id,
//   //     event,
//   //   })
//   // });
//   const template =
//     `
//   <section>

//   </section>
//   `;
//   return template;
// };
// export default Home;