# Projeto Open House | Live In Sampa 

## Índice
- [Índice](#live-in-sampa)
  - [1. Resumo do Projeto.](#1-resumo-do-projeto)
  - [2. Características-Técnicas.](#2-características-técnicas)
  - [3. Histórias de Usuários Implementadas](#3-histórias-de-usuário-implementadas)
  - [4. Tempo do Projeto](#4-tempo-do-projeto)
  - [5. Futuras Implementações](#6-futuras-implementacoes)

## 1. Resumo do Projeto

Neste projeto, criamos a Rede Social **Live In Sampa**, que busca conectar donos de bares e usuários para anúncios de shows locais. 

É possível ter acesso à plataforma de forma temporária por meio do e-mail: olivia@olivia.com, senha _olivia_.

Foram utilizadas duas APIs: 

* A primeira para a busca de CEP do usuário na página de Registro (https://viacep.com.br/ws/${cep}/json).

* A segunda foi a HERE API REST para a disponibilização de um mapa para os usuários.

## 2. Características Técnicas

As **caraterísticas técnicas** da aplicação envolveram:
- Uma *Single-Page Application*;

- CSS: Desenho com enfoque no mobile first;

- Permite a persistência, edição, atualização e exclusão de dados;

### Desenvolvimento FrontEnd

#### Tecnologias 

##### HTML5 
* HTML5 semântico.

##### CSS3
* Implementação de seletores de classe.

* Utilizamos `flexbox` para alcançar o desenho `mobile first`, implementando um layout que se adapte a **mobile e desktop**,conforme modelo proposto.

* Não utilizamos frameworks de CSS (bootstrap), nem estilização com `float`.

##### JavaScript (ES6+)

* Utilizamos módulos do JavaScript ES6 na elaboração do código.
* Uso de Template strings.
* Implementamos um sistema de rotas (sem uso de bibliotecas externas) para trocar de uma tela para outra de maneira dinâmica (SPA).

### Persistência de dados

Neste projeto, utilizamos o `Firestore` do `Firebase` para estruturação dos dados, para que estes possam ser consultados, atualizados, modificados e eliminados segundo os requerimentos do usuário.

#### Ferramentas utilizadas

1. HTML 5
2. CSS
3. *Vanilla* JS
4. Git e GitHub
5. Visual Code Studio
6. Firebase *auth*, *firestore* e *hosting*

## 3. Histórias de Usuário Implementadas
 
* HISTÓRIA DE USUÁRIO 1 - Como dono de estabelecimento, eu preciso logar na minha conta com e-mail e senha para poder iniciar uma sessão no aplicativo.

* HISTÓRIA DE USUÁRIO 2 - Como dono de estabelecimento, desejo incluir informações básicas e contato no cadastro para preenchimento do meu perfil.

* HISTÓRIA DE USUÁRIO 3 - Como dono de estabelecimento, desejo incluir informações sobre o local em meu cadastro para que possam ficar disponíveis em meu perfil.

* HISTÓRIA DE USUÁRIO 4 - Como dono de estabelecimento logado, devo poder criar, visualizar e deletar os meus eventos.

* HISTÓRIA DE USUÁRIO 5 - Como dono de estabelecimento, desejo um feed em que eu possa visualizar os eventos de terceiros.

## 4. Tempo do Projeto
 
O projeto foi elaborado em 2 (dois) dias.

## 5. Futuras Implementações

* Telas de Cadastro para os clientes de bares.

* Possibilidade de edição de dados.

