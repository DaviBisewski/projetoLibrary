<template>
  <link rel="stylesheet" href="https://unpkg.com/ionicons/dist/ionicons/ionicons.css">
  <div id="app" class="compForm">
    <div v-if="componenteAtivo === 'BookRegView'" class="fixed-container">
      <BookRegView />
    </div>
    <div v-if="componenteAtivo === 'LoanView'" class="fixed-container">
      <LoanView />
    </div>
    <div v-if="componenteAtivo === 'RegisterView'" class="fixed-container">
      <RegisterView />
    </div>
    <div v-if="componenteAtivo === 'RegFamView'" class="fixed-container">
      <RegFamView />
    </div>

    <footer id="bottom">
      <div class="prin-info">
        <a href="https://www.instagram.com/grupolivrariascuritiba/" target="_blank">
          <button class="button"><img src="../assets/img/logo-instagram.svg"></button>
        </a>
        <a href="https://is.gd/cK92I3" target="_blank">
          <button class="button"><img src="../assets/img/tool.svg"></button>
        </a>
        <div class="settings-container">
          <button class="button"><img src="../assets/img/settings-outline.svg"></button>
          <div class="boxForms">
            <div class="title">
              <h2 class="titulo">Registros</h2>
            </div>
            <div class="mainForms">
              <button class="boxForm" @click="componenteAtivo = 'BookRegView'">Registrar Livros</button>
              <button class="boxForm" @click="componenteAtivo = 'LoanView'">Registrar Empréstimo</button>
              <button class="boxForm" @click="componenteAtivo = 'RegisterView'">Registrar Cliente</button>
              <button class="boxForm" @click="componenteAtivo = 'RegFamView'">Registrar Família</button>
            </div>
          </div>
        </div>
      </div>
      <div class="prin-info">
        <div class="prin-social">
          <h4>Instagram</h4>
        </div>
        <div class="prin-social">
          <h4>Suporte</h4>
        </div>
        <div class="prin-social">
          <h4>Config.</h4>
        </div>
      </div>
      <div class="prin-info">
        <h3>Termos de Uso - Política de Privacidade</h3>
      </div>
      <div class="prin-info">
        ©️ 2024 | Livro Amigo
      </div>
    </footer>
  </div>
</template>

<script>

import { ref } from 'vue';
import BookRegView from './BookRegView.vue';
import LoanView from './LoanView.vue';
import RegisterView from './RegisterView.vue';
import RegFamView from './RegFamView.vue';

export default {
  name: 'App',
  components: {
    BookRegView,
    LoanView,
    RegisterView,
    RegFamView,
  },
  setup() {
    const componenteAtivo = ref('');

    return {
      componenteAtivo
    };
  }
}

</script>

<style scoped>
#app {
  position: relative;
}

.fixed-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 20px;
  z-index: 1000;
}

#bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--cinzaescuro-color);
  padding: 75px 50px;
  width: 100%;
  flex-wrap: wrap;
}

.prin-info .prin-social {
  width: 77px;
}

.prin-social h4 {
  color: var(--bright-color);
  transition: 0.55s;
  user-select: none;
  margin-left: -12px;
}



.prin-info {
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 4vh;
  gap: 6vh;
  color: var(--bright-color);
  width: 100%;
}



.settings-container {
  position: relative;
  display: inline-block;
}

.boxForms {
  display: none;
  position: absolute;
  top: -60px;
  right: -150px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
  transition: all .5s ease-in;
}

.settings-container:hover .boxForms {
  display: block;
}

.boxForms .boxForm {
  display: block;
  margin: 10px 0;
  width: 110px;
}

.button {
  padding: 10px 15px;
  background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 23px;
  margin-right: 27px;
}

.button img{
  width: 19.9px;
}

button {
  padding: 10px 15px;
  background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


hr {
  width: 280px;
  margin: 0 auto;
  border: none;
  height: 2px;
  background-color: #e91e63;
}

.title h2 {
  color: rgb(70,93,219)
}
</style>
