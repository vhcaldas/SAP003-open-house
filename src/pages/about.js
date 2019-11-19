import Input from '../components/input.js'
import Button from '../components/button.js'
import TitleOne from '../components/h-one.js';
import TitleTwo from '../components/h-two.js';

const createAbout = () => {
  const priceInput = document.querySelector('input[name=price]:checked').value;
  const foodInput = document.querySelector('input[name=food]:checked').value;

  const drinks = [];
  document.querySelectorAll('input[name=drinks]:checked').forEach((elem) => {
    drinks.push(elem.value);
  })

  const features = [];
  document.querySelectorAll('input[name=features]:checked').forEach((elem) => {
    features.push(elem.value);
  })

  const genre = [];
  document.querySelectorAll('input[name=genre]:checked').forEach((elem) => {
    genre.push(elem.value);
  })

  firebase.firestore().collection('profile').add({
    price: priceInput,
    food: foodInput,
    drinks: drinks,
    features: features,
    music: genre,
    userId: firebase.auth().currentUser.uid,
    addedAt: (new Date()).toLocaleString('pt-BR'),
  })
    .then(() => {
      window.location = '#home';
    });
}

const backToRegister = () => {
  window.location = '#register';
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
    <label>
    ${Input({
    name: 'price',
    value: '$',
    class: 'input-price',
    type: 'radio',
  })} 
      Até R$ 50
    </label>
    <label>
    ${Input({
    name: 'price',
    value: '$$',
    class: 'input-price',
    type: 'radio',
  })} 
      Até R$ 50 a 100
    </label>
    <label>
    ${Input({
    name: 'price',
    value: '$$$',
    class: 'input-price',
    type: 'radio',
  })} 
      Até R$ 100 a 150
    </label>
    <label>
    ${Input({
    name: 'price',
    value: '$$$$',
    class: 'input-price',
    type: 'radio',
  })} 
      + R$ 150
    </label>
    ${TitleTwo({
    text: 'Conte um pouco sobre o seu local:'
  })}
    <label>
    ${Input({
    name: 'food',
    value: 'Meat',
    class: 'input-food',
    type: 'radio',
  })} 
      Sem opções veggies
    </label>
    <label>
    ${Input({
    name: 'food',
    value: 'Veggies',
    class: 'input-food',
    type: 'radio',
  })} 
      Opções veggies
    </label>
    ${TitleTwo({
    text: 'Opções de bebidas:'
  })}
    <label>
    ${Input({
    name: 'drinks',
    value: 'Não alcóolicos',
    class: 'input-not-alcoholic',
    type: 'checkbox',
  })} 
      Não alcóolicos
    </label>
    <label>
    ${Input({
    name: 'drinks',
    value: 'Drinks',
    class: 'input-drinks',
    type: 'checkbox',
  })} 
      Drinks
    </label>
    <label>
    ${Input({
    name: 'drinks',
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
    name: 'features',
    value: 'LGBTQ+',
    class: 'input-lgbtq',
    type: 'checkbox',
  })} 
      LGBTQ+
    </label>
    <label>
    ${Input({
    name: 'features',
    value: 'Bebês/Criança',
    class: 'input-children',
    type: 'checkbox',
  })} 
      Bebês/Criança
    </label>
    <label>
    ${Input({
    name: 'features',
    value: 'Acessibilidade',
    class: 'input-accessibility',
    type: 'checkbox',
  })} 
      Acessibilidade
    </label>
    <label>
    ${Input({
    name: 'features',
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
    name: 'genre',
    class: 'input-rock',
    type: 'checkbox',
  })} 
     Rock
    </label>
    <label>
    ${Input({
    value: 'MPB',
    name: 'genre',
    class: 'input-mpb',
    type: 'checkbox',
  })} 
      MPB
    </label>
    <label>
    ${Input({
    value: 'Samba',
    name: 'genre',
    class: 'input-samba',
    type: 'checkbox',
  })} 
      Samba
    </label>
    <label>
    ${Input({
    value: 'Sertanejo',
    name: 'genre',
    class: 'input-sertanejo',
    type: 'checkbox',
  })} 
      Sertanejo
    </label>
    <label>
    ${Input({
    value: 'Forró',
    name: 'genre',
    class: 'input-forro',
    type: 'checkbox',
  })} 
      Forró
    </label>
    <label>
     ${Input({
    value: 'Pagode',
    name: 'genre',
    class: 'input-pagode',
    type: 'checkbox',
  })} 
      Pagode
    </label>
    <label>
    ${Input({
    value: 'Pop',
    name: 'genre',
    class: 'input-pop',
    type: 'checkbox',
  })} 
      POP
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