const TitleTwo = (props) => {
    const template = `
      <h2 data-id="${props.dataId}" class="${props.class}"> ${props.text} </h2>`;
    return template;
  };
  export default TitleTwo;