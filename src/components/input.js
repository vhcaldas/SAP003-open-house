const Input = (props) => {
  const template = `
    <input
    data-id="${props.data}"
    class="${props.class}"
    value="${props.value || ''}"
    placeholder="${props.placeholder}"
    maxlength="${props.maxlength}"
    type="${props.type}" 
    onchange="input.handleChange(event, ${props.onchange})" required>
    `;

  return template;
};

window.input = {
  handleChange: (event, callback) => {
    event.preventDefault();
      callback(event);
  },
};

export default Input;