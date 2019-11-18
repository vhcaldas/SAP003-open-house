import Input from '../components/input.js'
import Button from '../components/button.js'
import TitleOne from '../components/h-one.js';
import TitleTwo from '../components/h-two.js';

const createAbout = () => {
  const priceInput = document.querySelector('.price').value;
  const foodInput = document.querySelector('.food').value;
  const notAlcoholicInput = document.querySelector('.input-not-alcoholic').value;
  const drinkInput = document.querySelector('.input-drinks').value;
  const beerInput = document.querySelector('.input-beer').value;
  const lgbtInput = document.querySelector('.input-lgbtq').value;
  const childrenInput = document.querySelector('.input-children').value;
  const accessibilityInput = document.querySelector('.input-accessibility').value;
  const petInput = document.querySelector('.input-pet').value;
  const rockInput = document.querySelector('.input-rock').value;
  const mpbInput = document.querySelector('.input-mpb').value;
  const sambaInput = document.querySelector('.input-samba').value;
  const sertanejoInput = document.querySelector('.input-sertanejo').value;
  const forroInput = document.querySelector('.input-forro').value;
  const pagodeInput = document.querySelector('.input-pagode').value;
  const jazzInput = document.querySelector('.input-jazz').value;
  const bluesInput = document.querySelector('.input-blues').value;
  const funkInput = document.querySelector('.input-funk').value;
  const hiphopInput = document.querySelector('.input-hiphop').value;
  const reggaeInput = document.querySelector('.input-reggae').value;
  const folkInput = document.querySelector('.input-folk').value;
  const alternativatInput = document.querySelector('.input-alternativa').value;
  const salsaInput = document.querySelector('.input-salsa').value;
  const flashbackInput = document.querySelector('.input-flashback').value;
  const popInput = document.querySelector('.input-pop').value;
  const gospelInput = document.querySelector('.input-gospel').value;

  firebase.firestore().collection('profile').add({
    price: priceInput,
    food: foodInput,
    bebidaOne: notAlcoholicInput,
    bebidaTwo: drinkInput,
    bebidaThree: beerInput,
    lgbt: lgbtInput,
    children: childrenInput,
    accessibility: accessibilityInput,
    pet: petInput,
    rock: rockInput,
    mpb: mpbInput,
    samba: sambaInput,
    sertanejo: sertanejoInput,
    forro: forroInput,
    pagode: pagodeInput,
    jazz: jazzInput,
    blues: bluesInput,
    funk: funkInput,
    hiphop: hiphopInput,
    reggae: reggaeInput,
    folk: folkInput,
    alternativa: alternativatInput,
    salsa: salsaInput,
    flashback: flashbackInput,
    pop: popInput,
    gospel: gospelInput,
    //userId: firebase.auth().currentUser.uid,
    addedAt: (new Date()).toLocaleString('pt-BR'),
  })
    .then(() => {
      window.location = '#home';
    });
}

const backToRegister = () => {
  window.location = '#Register';
}

const About = () => {
  const template = `
  <section>
  ${TitleOne({
    text: 'Conte um pouco sobre o seu local:'
  })}
  <form class='form'>
  ${TitleTwo({
    text: 'Gasto médio por pessoa:'
  })}
  <div class='price'>
    <label>
    ${Input({
    value: '$',
    class: 'input-price',
    type: 'radio',
  })} 
      Até R$ 50
    </label>
    <label>
    ${Input({
    value: '$$',
    class: 'input-price',
    type: 'radio',
  })} 
      Até R$ 50 a 100
    </label>
    <label>
    ${Input({
    value: '$$$',
    class: 'input-price',
    type: 'radio',
  })} 
      Até R$ 100 a 150
    </label>
    <label>
    ${Input({
    value: '$$$$',
    class: 'input-price',
    type: 'radio',
  })} 
      + R$ 150
    </label>
    </div>
    ${TitleTwo({
    text: 'Conte um pouco sobre o seu local:'
  })}
    <div class='food'>
    <label>
    ${Input({
    value: 'Meat',
    class: 'input-meat',
    type: 'radio',
  })} 
      Sem opções veggies
    </label>
    <label>
    ${Input({
    value: 'Veggies',
    class: 'input-veggies',
    type: 'radio',
  })} 
      Opções veggies
    </label>
    </div>
    ${TitleTwo({
    text: 'Opções de bebidas:'
  })}
    <label>
    ${Input({
    value: 'Não alcóolicos',
    class: 'input-not-alcoholic',
    type: 'checkbox',
  })} 
      Não alcóolicos
    </label>
    <label>
    ${Input({
    value: 'Drinks',
    class: 'input-drinks',
    type: 'checkbox',
  })} 
      Drinks
    </label>
    <label>
    ${Input({
    value: 'Cerveja',
    class: 'input-beer',
    type: 'checkbox',
  })} 
      Cerveja
    </label>
    ${TitleTwo({
    text: 'Público da casa:'
  })}
    <label>
    ${Input({
    value: 'LGBTQ+',
    class: 'input-lgbtq',
    type: 'checkbox',
  })} 
      LGBTQ+
    </label>
    <label>
    ${Input({
    value: 'Bebês/Criança',
    class: 'input-children',
    type: 'checkbox',
  })} 
      Bebês/Criança
    </label>
    <label>
    ${Input({
    value: 'Acessibilidade',
    class: 'input-accessibility',
    type: 'checkbox',
  })} 
      Acessibilidade
    </label>
    <label>
    ${Input({
    value: 'Pet Friendly',
    class: 'input-pet',
    type: 'checkbox',
  })} 
      Pet Friendly
    </label>
    ${TitleTwo({
    text: 'Gênero musical:'
  })}
    <label>
    ${Input({
    value: 'Rock',
    class: 'input-rock',
    type: 'checkbox',
  })} 
     Rock
    </label>
    <label>
    ${Input({
    value: 'MPB',
    class: 'input-mpb',
    type: 'checkbox',
  })} 
      MPB
    </label>
    <label>
    ${Input({
    value: 'Samba',
    class: 'input-samba',
    type: 'checkbox',
  })} 
      Samba
    </label>
    <label>
    ${Input({
    value: 'Sertanejo',
    class: 'input-sertanejo',
    type: 'checkbox',
  })} 
      Sertanejo
    </label>
    <label>
    ${Input({
    value: 'Forró',
    class: 'input-forro',
    type: 'checkbox',
  })} 
      Forró
    </label>
    <label>
     ${Input({
    value: 'Pagode',
    class: 'input-pagode',
    type: 'checkbox',
  })} 
      Pagode
    </label>
    <label>
     ${Input({
    value: 'Jazz',
    class: 'input-jazz',
    type: 'checkbox',
  })} 
      Jazz
    </label>
    <label>
    ${Input({
    value: 'Blues',
    class: 'input-blues',
    type: 'checkbox',
  })} 
      Blues
    </label>
    <label>
    ${Input({
    value: 'Funk',
    class: 'input-funk',
    type: 'checkbox',
  })} 
      Funk
    </label>
    <label>
    ${Input({
    value: 'Hip Hop/Rap',
    class: 'input-hiphop',
    type: 'checkbox',
  })} 
      Hip Hop/Rap
    </label>
    <label>
    ${Input({
    value: 'Reggae',
    class: 'input-reggae',
    type: 'checkbox',
  })} 
      Reggae
    </label>
    <label>
    ${Input({
    value: 'Folk',
    class: 'input-folk',
    type: 'checkbox',
  })} 
      Folk
    </label>
    <label>
    ${Input({
    value: 'Alternativa',
    class: 'input-alternativa',
    type: 'checkbox',
  })} 
      Alternativa
    </label>
    <label>
    ${Input({
    value: 'Salsa',
    class: 'input-salsa',
    type: 'checkbox',
  })} 
      Salsa/som latino
    </label>
    <label>
    ${Input({
    value: 'Flashback',
    class: 'input-flashback',
    type: 'checkbox',
  })} 
      Flashback
    </label>
    <label>
    ${Input({
    value: 'Pop',
    class: 'input-pop',
    type: 'checkbox',
  })} 
      POP
    </label>
    <label>
    ${Input({
    value: 'Gospel',
    class: 'input-gospel',
    type: 'checkbox',
  })} 
      Gospel
    </label>   
    ${Button({
    class: 'button-back',
    title: 'Voltar',
    onClick: backToRegister,
  })}
    ${Button({
    class: 'button-continue',
    title: 'Continuar',
    onClick: createAbout,
  })}
      </form>
    </section>
    `
  return template;
};

export default About;