import Button from '../components/button.js'// //Funcao ir para pagina de criar evento

const logOut = () => {
  firebase.auth().signOut();
}
const myEvents = () => {
  window.location = '#event';
}

const myProfile = () => {
  window.location = '#profile';
};

function Home() {
  const template = `
  <header class='header'>
  ${Button({
    type: 'button',
    class: 'btn profile-btn hide-mobile',
    dataId: 'btn-profile',
    onClick: myEvents,
    title: 'MEUS EVENTOS',
  })}
  <div class='header-title'>
  <label for='toggle-side-menu'>
  <div class='fa fa-bars hide-desktop menu-icon'></div>
  </label>
  <p> liveinSampa </p> 
  <div class='header-img'>
  <img src="./images/logo.png">
  </div>
  </div>
    ${Button({
    type: 'button',
    class: 'btn logout-btn hide-mobile',
    id: 'btn-log-out',
    onClick: logOut,
    title: 'SAIR'
  })}
    <input 
      type='checkbox'
      id='toggle-side-menu' 
      class='toggle-side-menu hide-desktop'
    />
    <div class='side-menu hide-desktop'>
    ${Button({
    type: 'button',
    class: 'btn profile-btn ',
    dataId: 'btn-profile',
    onClick: myEvents,
    title: 'MEUS EVENTOS',
  })}
    ${Button({
    type: 'button',
    class: 'btn logout-btn ',
    dataId: 'btn-log-out',
    onClick: logOut,
    title: 'SAIR'
  })}
    </div>
    </header>
    <div class='profile'></div>
      <section id="printpost" class="print-post">
      <ul class='post-list'></ul>
      </section>
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