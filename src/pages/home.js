import Button from '../components/button.js'
import Paragraph from '../components/paragraph.js'
import TitleOne from '../components/h-one.js'

const logOut = () => {
  firebase.auth().signOut();
}
const userEvents = () => {
  window.location = '#event';
}

const userProfile = () => {
  window.location = '#profile';
};

function delet(){
  const id = event.target.dataset.id;
  firebase.firestore().collection('events').doc(id).delete();
  document.querySelector(`ul[data-id='${id}']`).remove();
}

const printCard = () => {
  //const userId = firebase.auth().currentUser.uid;
  const allEvent = firebase.firestore().collection('events');
  allEvent.orderBy('time', 'desc').get().then(snap => {
    let postsLayout = '';
    snap.forEach((doc) => {  
      postsLayout += `
        <ul class="event-post" data-id='${doc.id}' class='post'>
        <div class="div-img">
        <img class="image" src="${doc.data().image}">
        </div>
        <div class="div-text">
        <ul> ${doc.data().bandName} </ul>
        <ul> ${doc.data().date} </ul>
        <ul> ${doc.data().time} </ul>
        <ul> ${doc.data().genres} </ul>
        </div>
          ${Button({class:'button', dataId: doc.id, title: 'Deletar', onClick: delet })}
        </ul>
        `
    });
    document.getElementById('post-layout').innerHTML = postsLayout; 
  });  
}

const Home = () => {
  const template = `
  <header class='header'>
  <div class='header-title'>
  <div>
    <label for='toggle-side-menu'>
      <div class='fas fa-bars'></div>
    </label>
    ${Paragraph({
      class: 'my-home',
      text: 'EVENTOS',
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
  <main class="print-event">
  <ul id='post-layout'></ul>
  </main>
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

 window.printCard = printCard;

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