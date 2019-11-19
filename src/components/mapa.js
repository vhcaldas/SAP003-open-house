const Mapa = (props) => {
  const selector = props.selector;
  selector.innerHTML = '';
  const platform = new H.service.Platform({
    'apikey': 'sejiZ454SdWnhpUHK6NmxGkP_XzhujPQxL3n6WAYvDU'
  });
  const defaultLayers = platform.createDefaultLayers();

  const map = new H.Map(
    selector,
    defaultLayers.vector.normal.map,
    {
      zoom: 14,
      center: { lat: -23.5475, lng: -46.63611 }
    });

  const addressInput = props.users.address + ',' + props.users.number + ',' + props.users.neighborhood + ' São Paulo' + ' Brazil';
  const geocodingParams = {
    searchText: addressInput,
  };

  const ui = H.ui.UI.createDefault(map, defaultLayers, 'pt-BR');

  const onResult = (result) => {
    let locations = result.Response.View[0].Result,
      position,
      marker;
    for (let i = 0; i < locations.length; i++) {
      position = {
        lat: locations[i].Location.DisplayPosition.Latitude,
        lng: locations[i].Location.DisplayPosition.Longitude
      };
      map.setCenter(position)
      marker = new H.map.Marker(position);
      map.addObject(marker);
    }
  };

  const geocoder = platform.getGeocodingService();

  geocoder.geocode(geocodingParams, onResult)
}
export default Mapa;