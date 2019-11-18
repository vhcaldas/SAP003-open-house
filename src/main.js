import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';
import Event from './pages/event.js';
import Profile from './pages/profile.js';


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
      case '#home':
        user ? main.innerHTML = Home() : window.location = '#login';
      break;
      case '#profile':
        user ? main.innerHTML = Profile() : window.location = '#login';
      break;
      case '#event':
        if (user){
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

const init = (user) => {
  if (!user) {
    window.location = '#login';
    locationHashChanged();
  } else {
    window.location = '#home';
    locationHashChanged();
  }
};

firebase.auth().onAuthStateChanged(init);

window.addEventListener('hashchange', locationHashChanged, false);
window.addEventListener('load', locationHashChanged, false);