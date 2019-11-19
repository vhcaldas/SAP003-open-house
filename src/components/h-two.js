const TitleTwo = (props) => {
    const template = `
      <h3 data-id="${props.dataId}" class="${props.class}"> ${props.text} </h3>`;
    return template;
  };
  export default TitleTwo;