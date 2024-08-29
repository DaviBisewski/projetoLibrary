
<template>
    <section id="fixedScreen" v-if="visivel">
      <div class="mainBook">
        <button class="close-button" @click="fecharComponente">✖</button>
        <div class="boxImg">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="boxInfo">
          <div class="boxTitles">
            <div class="title">
              <h1>Titulo do Livro</h1>
            </div>
            <div class="subtitle">
              <h3>Autora:</h3>
            </div>
          </div>
          <div class="bookInfos">
            <p>Paginas:</p>
            <p>Editora:</p>
            <p>Edição:</p>
            <p>Idioma:</p>
            <p>Codigo:</p>
          </div>
          <div class="buttons">
            <button>Emprestar</button>
            <button>Reservar</button>
          </div>
        </div>
      </div>
      <div class="mainDesc">
        <div class="title">
          <h2>Descrição:</h2>
        </div>
        <div class="boxText">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'FixedScreen',
    setup(props, { emit }) {
      const visivel = ref(true);
  
      const fecharComponente = () => {
        visivel.value = false;
        emit('close');
      };
  
      return {
        visivel,
        fecharComponente
      };
    }
  }
  </script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
}


#fixedScreen {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 50px;
    background-color: #fff;
    border: 1px solid #0d0d0d;
    border-radius: 12px;
    animation: spin 2s ease;
    animation-iteration-count: 1;
}

#fixedScreen .mainBook {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

#fixedScreen .mainBook .boxImg img{
    width: 300px;
    height: 400px;
}

#fixedScreen .mainBook .boxInfo {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

#fixedScreen .mainBook .boxInfo .title {
    display: flex;
    justify-content: center;
    align-items: center;
}

#fixedScreen .mainBook .boxInfo .title h1 {
    font-size: 40px;
}

#fixedScreen .mainBook .boxInfo .subtitle {
    display: flex;
    justify-content: start;
    align-items: center;
}

#fixedScreen .mainBook .boxInfo .subtitle h3 {
    font-size: 20px;
}

#fixedScreen .mainBook .boxInfo .bookInfos {
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    flex-wrap: wrap;
}

#fixedScreen .mainBook .boxInfo .bookInfos p {
    font-size: 15px;
}

#fixedScreen .mainBook .boxInfo .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#fixedScreen .mainBook .boxInfo .buttons button {
    width: 90px;
    padding: 10px 0;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
}

#fixedScreen .mainBook .boxInfo .buttons button:hover {
    transform: scale(1.1);
}

#fixedScreen .mainDesc{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

#fixedScreen .mainDesc .title{
    width: 625px;
    display: flex;
    justify-content: start;
    align-items: center;
}

#fixedScreen .mainDesc .boxText{
    width: 625px;
    padding: 30px;
    background-color: #e7e7e7;
    text-align: justify;
    border-radius: 10px;
}


@keyframes spin {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e91e63;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.close-button:hover {
  background-color: rgb(233, 132, 149);
}
</style>