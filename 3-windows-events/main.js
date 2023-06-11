const onCompleteGame = () => {
  alert('Juego completado 🐶');
};


const buttonElement = document.querySelector('#complete-game');
buttonElement.addEventListener('click', onCompleteGame);



const pTextList = []


const onMouseMove = (event) => {
  console.log();

  if (event.target.tagName === 'P') {
    if (!pTextList.includes(event.target.className)) {
      pTextList.push(event.target.className);

      if (pTextList.length === 5) {
        document.body.style.height = '200vh'
      }
    }
  }
  console.log(pTextList);
};

let enteredPassword = false;


const onScroll = () => {
  console.log('Scroll!');

  if (!enteredPassword && window.scrollY > window.outerHeight / 2) {
    console.log('Has escroleado más de la mitad!')
    const password = prompt('Introduce la contraseña');

    if (password === '1234') {
      buttonElement.style.display = 'block';
      enteredPassword = true;
    }
  }
};

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('scroll', onScroll);



