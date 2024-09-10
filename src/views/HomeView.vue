<template>
  <link rel="stylesheet" href="https://unpkg.com/ionicons/dist/ionicons/ionicons.css">
  <div id="app">
    <section id="shop">
      <div class="banner">
        <img src="../assets/bannerimg.jpg" alt="Banner" class="banner-image" />
        <h1 class="banner-title">ACER<span>VO</span></h1>
      </div>

      <div class="sub-title">
        <div class="select">
        <h3>{{ resultados }} Resultados Exibidos</h3>
        <select v-model="categoriass" name="Categorias:">
          <!-- Definindo a opção padrão 'Categorias:' -->
          <option value="categoriass">Categorias:</option>
          <option v-for="categoria of categorias" :key="categoria.id" :value="categoria.nome">
            {{ categoria.nome }}
          </option>
        </select>
      </div>
        <div class="search-container">
          <input type="text" placeholder="Pesquisar..." id="search-input" />
          <button id="search-button"><img src="../assets/img/search-circle-outline.svg"></button>
        </div>
    </div>

      <div class="catalogo">
        <div class="roupas" v-for="item in itens" :key="item.id">
          <div class="imgRoupa">
            <img src="../assets/icon.webp" alt="Imagem do Produto" />
          </div>
          <div class="sale">
            <p>{{ item.name }}</p>
          </div>
          <div class="bottom">
            <div class="btnSaibaMais">
              <button :class="{ 'hover': item.hover }" @mouseover="item.hover = true" @mouseleave="item.hover = false"
                @click="toggleComponent">
                <img src="../assets/img/exit-outline.svg">
                Saiba Mais
              </button>
            </div>
            <div class="carrinho">
              <button><img src="../assets/img/people-outline.svg"></button>
            </div>
          </div>
          <div class="boxFixedScreen" :class="{ 'show': componenteAtivo }">
            <fixed-screen @close="componenteAtivo = false"></fixed-screen>
          </div>
        </div>
      </div>
    </section>

    <section id="newsletter-backtotop">
      <div class="newsletter-container">
        <p class="noticia">Receber Notícias</p>
        <input type="email" placeholder="Digite seu e-mail" v-model="email" />
        <button @click="enviarEmail">Enviar</button>
      </div>
    </section>
  </div>
</template>

<script>
import FixedScreen from '../components/FixedScreen.vue';


export default {
  name: 'HomeView',
  components: {
    FixedScreen,
  },
  data() {
    return {
      componenteAtivo: false,
      resultados: 12,
      email: '',
      categoriass: 'categoriass', // Define o valor padrão para a seleção
      itens: [
        { id: 1, name: 'Livro A', hover: false },
        { id: 2, name: 'Livro B', hover: false },
        { id: 3, name: 'Livro C', hover: false },
        { id: 4, name: 'Livro D', hover: false },
        { id: 5, name: 'Livro E', hover: false },
        { id: 6, name: 'Livro F', hover: false },
        { id: 7, name: 'Livro G', hover: false },
        { id: 8, name: 'Livro H', hover: false },
        { id: 9, name: 'Livro I', hover: false },
        { id: 10, name: 'Livro J', hover: false },
        { id: 11, name: 'Livro K', hover: false },
        { id: 12, name: 'Livro L', hover: false },
      ],
      categorias: [
        { id: '1', nome: 'Juvenil' },
        { id: '2', nome: 'Adulto' },
        { id: '3', nome: 'infantil' },
      ],
    };
  },
  methods: {
    toggleComponent() {
      this.componenteAtivo = !this.componenteAtivo;
    },
    enviarEmail() {
      if (this.email) {
        alert(`E-mail enviado para ${this.email}`);
      } else {
        alert('Por favor, insira um e-mail válido.');
      }
    }
  },
};
</script>

<style scoped>
#shop {
  background-color: #f6f7fb;
}

#shop .banner {
  position: relative;
  width: 100%;
  height: 80dvh;
  overflow: hidden;
  margin-top: 10px;
}

#shop .banner .banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
}

#shop .banner .banner-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3.5vw;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-align: center;
}

#shop .banner .banner-title span {
  color: rgb(95, 114, 217);
  color: linear-gradient(90deg, rgba(95, 114, 217, 1) 30%, rgba(0, 85, 165, 1) 70%);
}
.select{
  flex-direction: column;
}

#shop .sub-title {
  width: 100%;
  padding: 75px 75px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgb(70, 93, 219)
}

#shop .sub-title h3 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
}

#shop .sub-title select {
  padding: 8px;
  font-size: 16px;
}
.search-container{
  display: flex;
  margin-top: 40px;
}
.search-container input{
  padding: 8px;
  width: 200px;
  border-radius: 10px;
  border: 1px solid rgb(95, 114, 217);
}

.search-container button{
  background-color: transparent;
  cursor: pointer;
}

.search-container button img{
  width: 30px;
}

#shop .catalogo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 40px 150px 75px;
  gap: 25px;
}

#shop .catalogo .roupas {
  width: 350px;
  height: 450px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

#shop .catalogo .roupas .imgRoupa {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  border-bottom: 1.5px solid #0d0d0d;
}

#shop .catalogo .roupas .imgRoupa img {
  width: 200px;
  height: 200px;
}

#shop .catalogo .roupas .bottom {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

#shop .catalogo .roupas .sale {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  left: 45px;
  font-size: 14px;
  transition: all 0.5s ease-in-out;
}

#shop .catalogo .roupas .sale:hover {
  color: var(--rosaclaro-color);
  transform: scale(1.1);
}

#shop .catalogo .roupas .bottom .btnSaibaMais {
  display: flex;
  justify-content: center;
  align-items: center;
}

#shop .catalogo .roupas .bottom .btnSaibaMais button {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: #0d0d0d;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.5s ease;
  padding: 10px 15px;
}

#shop .catalogo .roupas .bottom .btnSaibaMais img {
  width: 15px;
  margin-right: 5px;
}

#shop .catalogo .roupas .bottom .btnSaibaMais button.hover {
  transform: scale(1.1) translateY(-10px);
  ;
  background-color: rgb(70, 93, 219);
  color: var(--bright-color);
  border-radius: 15px;
}

#shop .catalogo .roupas .bottom .carrinho {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: var(--bright-color);
  transition: all 0.5s ease;
}

#shop .catalogo .roupas .bottom .carrinho button {
  background: transparent;
}

#shop .catalogo .roupas .bottom .carrinho img {
  width: 16px;
  transition: all 0.5s ease;
}

#shop .catalogo .roupas .bottom .carrinho:hover {
  transform: scale(1.1) translateY(-10px);
}

#shop .catalogo .roupas .bottom .carrinho:hover ion-icon {
  color: var(--bright-color);
}

.boxFixedScreen {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 20px;
  z-index: 100;
  transition: all 0.3s ease-in-out;
}

.boxFixedScreen.show {
  display: block;
}

#newsletter-backtotop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
}

.newsletter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.noticia {
  font-size: 18px;
  margin-bottom: 10px;
}

.newsletter-container input {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 250px;
}

.newsletter-container button {
  padding: 10px 20px;

  background: rgb(70, 93, 219);
  background: linear-gradient(90deg, rgba(70, 93, 219, 1) 0%, rgba(93, 110, 201, 1) 50%, rgba(70, 93, 219, 1) 100%);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-container button:hover {
  background-color: rgb(70, 93, 219);
  background: linear-gradient(90deg, rgba(70, 93, 219, 1) 0%, rgba(93, 110, 201, 1) 50%, rgba(70, 93, 219, 1) 100%);
}
</style>
