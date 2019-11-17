import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';
import Event from './pages/event.js';
import Profile from './pages/profile.js';

const locationHashChanged = () => {
  switch (location.hash) {
    case '#login':
      if (firebase.auth().currentUser) {
        window.location = '#home';
      } else {
        document.querySelector('main').innerHTML = Login();
      }
      break;
    case '#register':
      if (firebase.auth().currentUser) {
        window.location = '#home';
      } else {
        document.querySelector('main').innerHTML = Register();
      }
      break;
    case '#home':
      if (!firebase.auth().currentUser) {
        window.location = '#login';
      } else {
        firebase.firestore().collection('events').orderBy('addedAt', 'desc')
          .onSnapshot((snap) => {
            document.querySelector('main').innerHTML = Home({ events: snap });
          })
      }
      break;
    case '#profile':
      if (!firebase.auth().currentUser) {
        window.location = '#login';
      } else {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
          .get().then((snap) => {
            document.querySelector('main').innerHTML = Profile({ users: snap.data() });
          })
      }
      break;
    case '#event':
      if (!firebase.auth().currentUser) {
        window.location = '#login';
      } else {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
          .get()
          .then((snap) => {
            document.querySelector('main').innerHTML = Event({ users: snap.data() });
          });
      }
      break;
    default:
      window.location = '#login';
  }
};

const init = (user) => {
  if (!user) {
    window.location = '#login';
  } else {
    window.location = '#home';
    locationHashChanged();
  }
};

firebase.auth().onAuthStateChanged(init);

window.addEventListener('hashchange', locationHashChanged, false);