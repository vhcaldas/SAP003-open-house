const Mapa = () => {
  const platform = new H.service.Platform({
    'apikey': '7o5DscZtaNdUTcuhP0bfaFbumfCTmHIoa_sx8s3XzI4'
  });
  const defaultLayers = platform.createDefaultLayers();

  const map = new H.Map(
    document.querySelector('.mapa'),
    defaultLayers.vector.normal.map,
    {
      zoom: 14,
      center: { lat: -23.5475, lng: -46.63611 }
    });

  const geocodingParams = {
    searchText: 'blabla',
  };

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