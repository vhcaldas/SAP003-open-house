const InputFunction = (props) => {
    const template = `
      <input
      data-id="${props.data}"
      class="${props.class}"
      value="${props.value || ''}"
      placeholder="${props.placeholder}"
      maxlength="${props.maxlength}"
      type="${props.type}" 
      id="${props.id}"
      name="${props.name}"
       onchange="input.handleChange(event, ${props.onchange})" required>
      `;
  
    return template;
  };
  
  window.input = {
    handleChange: (event, callback) => {
      event.preventDefault();
      if(callback){
        callback(event);
      }      
    },
  };
  
  export default InputFunction;