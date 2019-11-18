import Login from './pages/login.js';
import Register from './pages/register.js';
// import Home from './pages/home.js';
import Event from './pages/event.js';
// import Profile from './pages/profile.js';

const locationHashChanged = () => {
  switch (location.hash) {
    case '#login':
          
        document.querySelector('main').innerHTML = Login();
      
      break;
    case '#register':
     
     
        document.querySelector('main').innerHTML = Register();
      
      break;
    case '#home':
    
      document.querySelector('main').innerHTML = Event();
       
      break;
  
    // default:
    //   window.location = '#login';
  }
};

// const init = (user) => {
//   if (!user) {
//     window.location = '#login';
//   } else {
//     window.location = '#home';
//     locationHashChanged();
//   }
// };

// firebase.auth().onAuthStateChanged(init);

window.addEventListener('hashchange', locationHashChanged, false);
window.addEventListener('load', locationHashChanged, false);