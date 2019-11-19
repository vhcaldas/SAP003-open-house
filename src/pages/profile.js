import Button from '../components/button.js'
import Paragraph from '../components/paragraph.js'
import TitleOne from '../components/h-one.js';
import TitleTwo from '../components/h-two.js';


const logOut = () => {
  firebase.auth().signOut();
}
const userEvents = () => {
  window.location = '#event';
}

const userHome = () => {
  window.location = '#home';
}


  // const platform = new H.service.Platform({
  //   'apikey': '7o5DscZtaNdUTcuhP0bfaFbumfCTmHIoa_sx8s3XzI4'
  // });
  // const defaultLayers = platform.createDefaultLayers();

  // const map = new H.Map(
  //   document.querySelector('.mapa'),
  //   defaultLayers.vector.normal.map,
  //   {
  //     zoom: 14,
  //     center: { lat: -23.5475, lng: -46.63611 }
  //   });

  // const geocodingParams = {
  //   searchText: document.querySelector('.my-address').textContent,
  // };

  // const onResult = (result) => {
  //   let locations = result.Response.View[0].Result,
  //     position,
  //     marker;
  //   for (let i = 0; i < locations.length; i++) {
  //     position = {
  //       lat: locations[i].Location.DisplayPosition.Latitude,
  //       lng: locations[i].Location.DisplayPosition.Longitude
  //     };
  //     map.setCenter(position)
  //     marker = new H.map.Marker(position);
  //     map.addObject(marker);
  //   }
  // };

  // const geocoder = platform.getGeocodingService();

  // geocoder.geocode(geocodingParams, onResult)


const Profile = (props) => {
  const template = `
  <header class='header'>
  <div class='header-title'>
    <label for='toggle-side-menu'>
      <div class='fas fa-ellipsis-v'></div>
    </label>
    ${Paragraph({
      class: 'my-event',
      text: props.users.name,
    })}
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
  ${TitleOne({
    class: 'my-data',
    text: 'Meus Dados',
  })}
  ${Paragraph({
    class: 'my-address',
    text: props.users.address + ',' + props.users.number + ',' + props.users.city,
  })}
  <div style="width: 100px; height: 100px" class='mapa'></div>
  ${TitleTwo({
    class: 'my-local',
    text: 'Meu Estabelecimento',
  })}
  <footer class="footer">
  </footer>
  `;
  return template;
}

export default Profile;