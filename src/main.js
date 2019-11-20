import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';
import Event from './pages/event.js';
import Profile from './pages/profile.js';
import About from './pages/about.js';
import Mapa from './components/mapa.js';

const locationHashChanged = () => {
  const main = document.querySelector('main');
  firebase.auth().onAuthStateChanged(function (user) {
    switch (location.hash) {
      case '#login':
        user ? window.location = '#home' : main.innerHTML = Login();
        break;
      case '#register':
        main.innerHTML = Register();
        break;
      case '#about':
        user ? main.innerHTML = About() : window.location = '#login';
        break;
      case '#home':
        if (user) {
          firebase
            .firestore()
            .collection('users').doc(firebase.auth().currentUser.uid)
            .get().then((snap) => {
              document.querySelector('main').innerHTML = Home({
                users: snap.data()
              })
            })
        } else {
          window.location = '#login';
        }
        window.printCard();
        break;
      case '#profile':
        if (user) {
          firebase
            .firestore()
            .collection('users').doc(firebase.auth().currentUser.uid)
            .get().then((snap) => {
              document.querySelector('main').innerHTML = Profile({
                users: snap.data()
              })
              Mapa({
                selector: document.querySelector('.mapa'),
                users: snap.data(),
              });
            })
        } else {
          window.location = '#login';
        }
        break;
      case '#event':
        if (user) {
          firebase
            .firestore()
            .collection('users').doc(firebase.auth().currentUser.uid)
            .get().then((snap) => {
              document.querySelector('main').innerHTML = Event({
                users: snap.data()
              })
            })
        } else {
          window.location = '#login';
        }
        break;
      default:
        window.location = '#login';
    }
  })
};

window.addEventListener('hashchange', locationHashChanged, false);
window.addEventListener('load', locationHashChanged, false);
window.Mapa = Mapa;