const onButtonClicked = () => {
  alert(`El input tiene como valor: ${inputValue}`)
};

const onInputChanged = (event) => {
  inputValue = event.target.value;


  const inputTextH3 = document.querySelector('#input-text');
  inputTextH3.inneText = input.value;
};

const buttomElement = document.querySelector('button')
buttomElement.addEventListener('click', onButtonClicked);

const inputElement = document.querySelector('input[type="text]"');
inputElement.addEventListener('input', onInputChanged)

