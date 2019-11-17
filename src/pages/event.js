

// Funcao para criar eventos
// const createEvent = () => {
//   const imageInput = document.querySelector('.').value;
//   const nameInput = document.querySelector('.').value;
//   const dateInput = document.querySelector('.').value;
//   const addressInput = document.querySelector('.').value;

//         firebase.firestore().collection('events').add({
//           image: imageInput,
//           name: nameInput,
//           data: dataInput,
//           address: addressInput,
//           userId: firebase.auth().currentUser.uid,
//           addedAt: (new Date()).toLocaleString('pt-BR'),
//         })
//           .then(() => {
//             imageInput.value = '';
//             nameInput.value = '';
//             dateInput.value = '';
//           });
//       };

// Funcao renderizar o mapa
// const maps = () => {
// 
// }

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

const Event = (props) => {
  const template = `
  <section>
  
  </section>

 `;

  return template;
};

export default Event;