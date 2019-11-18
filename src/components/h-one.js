const TitleOne = (props) => {
  const template = `
    <h1 data-id="${props.dataId}" class="${props.class}"> ${props.text} </h1>`;
  return template;
};
export default TitleOne;