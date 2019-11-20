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
  <main class="about-main">
  <div class="about-title">    
    ${TitleOne({
      text: 'Conte um pouco sobre o seu local:'
    })}
  </div>
  <form class='form'>
    ${TitleTwo({
    text: 'Gasto médio por pessoa:'
    })}
    <label>
      <div>
        <ul>${Input({
        name: 'price',
        value: '$',
        class: 'input-price',
        type: 'radio',
        })} 
        Até R$ 50 </ul>
        </label>
        <label>
        <ul> ${Input({
          name: 'price',
          value: '$$',
          class: 'input-price',
          type: 'radio',
          })} 
          Até R$ 50 a 100</ul>
        </label>
        <label>
          <ul>${Input({
          name: 'price',
          value: '$$$',
          class: 'input-price',
          type: 'radio',
          })} 
          Até R$ 100 a 150 </ul>
        </label>
        <label>
          <ul>${Input({
          name: 'price',
          value: '$$$$',
          class: 'input-price',
          type: 'radio',
          })} 
          + R$ 150</ul>
        </label>
      </div>
    ${TitleTwo({
    text: 'Conte um pouco sobre o seu local:'
    })}
    <label>
      <ul>${Input({
      name: 'food',
      value: 'Meat',
      class: 'input-food',
      type: 'radio',
    })} 
      Sem opções veggies</ul>
    </label>
    <label>
      <ul>${Input({
      name: 'food',
      value: 'Veggies',
      class: 'input-food',
      type: 'radio',
    })} 
      Opções veggies</ul>
    </label>
    ${TitleTwo({
    text: 'Opções de bebidas:'
  })}
    <label>
      <ul>${Input({
      name: 'drinks',
      value: 'Não alcóolicos',
      class: 'input-not-alcoholic',
      type: 'checkbox',
      })} 
      Não alcóolicos</ul>
    </label>
    <label>
      <ul>${Input({
      name: 'drinks',
      value: 'Drinks',
      class: 'input-drinks',
      type: 'checkbox',
      })} 
        Drinks</ul>
    </label>
    <label>
      <ul>${Input({
      name: 'drinks',
      value: 'Cerveja',
      class: 'input-beer',
      type: 'checkbox',
      })} 
      Cerveja</ul>
    </label>
    ${TitleTwo({
    text: 'Público da casa:'
  })}
    <label>
      <ul>${Input({
      name: 'features',
      value: 'LGBTQ+',
      class: 'input-lgbtq',
      type: 'checkbox',
      })} 
      LGBTQ+</ul>
    </label>
    <label>
      <ul>${Input({
      name: 'features',
      value: 'Bebês/Criança',
      class: 'input-children',
      type: 'checkbox',
      })} 
      Bebês/Criança</ul>
    </label>
    <label>
      <ul>${Input({
      name: 'features',
      value: 'Acessibilidade',
      class: 'input-accessibility',
      type: 'checkbox',
      })} 
      Acessibilidade</ul>
    </label>
    <label>
      <ul>${Input({
      name: 'features',
      value: 'Pet Friendly',
      class: 'input-pet',
      type: 'checkbox',
      })} 
      Pet Friendly</ul>
    </label>
    ${TitleTwo({
    text: 'Gênero musical:'
    })}
    <label>
      <ul>${Input({
      value: 'Rock',
      name: 'genre',
      class: 'input-rock',
      type: 'checkbox',
      })} 
      Rock</ul>
    </label>
    <label>
      <ul>${Input({
      value: 'MPB',
      name: 'genre',
      class: 'input-mpb',
      type: 'checkbox',
      })} 
      MPB</ul>
    </label>
    <label>
      <ul>${Input({
      value: 'Samba',
      name: 'genre',
      class: 'input-samba',
      type: 'checkbox',
      })} 
      Samba</ul>
    </label>
    <label>
      <ul>${Input({
      value: 'Sertanejo',
      name: 'genre',
      class: 'input-sertanejo',
      type: 'checkbox',
      })} 
      Sertanejo</ul>
    </label>
    <label>
      <ul>${Input({
      value: 'Forró',
      name: 'genre',
      class: 'input-forro',
      type: 'checkbox',
      })} 
      Forró</ul>
    </label>
    <label>
      <ul>${Input({
      value: 'Pagode',
      name: 'genre',
      class: 'input-pagode',
      type: 'checkbox',
      })} 
      Pagode</ul>
    </label>
    <label>
      <ul>${Input({
      value: 'Pop',
      name: 'genre',
      class: 'input-pop',
      type: 'checkbox',
      })} 
      POP</ul>
    </label>  
  </form>
  <div class="register-buttons">
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
  </div>
</main>
`
  return template;
};

export default About;