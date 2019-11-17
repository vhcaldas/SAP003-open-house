
const CardEvent = (props) => {
  let template =
    `
  <div style="width: 640px; height: 480px" class='event-map' data-id="mapa-${props.id}"></div>
`;
  return template;
}
export default CardEvent;