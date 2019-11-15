

// Funcao para criar eventos
// const createEvent = () => {
//   const imageInput = document.querySelector('.').value;
//   const nameInput = document.querySelector('.').value;
//   const dataInput = document.querySelector('.').value;
//   const adressInput = document.querySelector('.').value;

//         firebase.firestore().collection('events').add({
//           image: imageInput,
//           nome: nameInput,
//           data: dataInput,
//           adress: adressInput,
//           userId: firebase.auth().currentUser.uid,
//           addedAt: (new Date()).toLocaleString('pt-BR'),
//         })
//           .then(() => {
//             imageInput.value = '';
//             nomeInput.value = '';
//             dataInput.value = '';
//           });
//       };

// Funcao para ir pra profile
// const goProfile = () => {
//   window.location = '#profile';
// };

// Funcao para ir pra home
// const goHome = () => {
//   window.location = '#home';
// };

// Funcao para fazer LogOut
// const goOut = () => {
//   firebase.auth().signOut();
// }

const Eventos = () => {
  const template = `
  <section class='card-container>
  
  </section>

 `;

  return template;
};

export default Eventos;