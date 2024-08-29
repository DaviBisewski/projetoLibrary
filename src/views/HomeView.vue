<template>
  <div id="app">
    <section id="shop">
      <div class="banner">
        <img src="../assets/bannerimg.jpg" alt="Banner" class="banner-image" />
        <h1 class="banner-title">ACER<span>VO</span></h1>
      </div>

      <div class="sub-title">
        <h3>{{ resultados }} Resultados Exibidos</h3>
        <select value="categoriass:" v-model="categoriass" name="Categorias:">
                    <option value="categoriass">Categorias:</option>
                    <option v-for="categoria of categorias" :key="categoria.id" :value="categoria.nome">
                        {{ categoria.nome }}
                    </option>
        </select>
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
                <ion-icon name="enter-outline"></ion-icon>
                Saiba Mais
              </button>
            </div>
            <div class="carrinho">
              <button><ion-icon name="people-outline"></ion-icon></button>
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
    { id: '1', nome: 'Romance' },
    { id: '2', nome: 'Mistério' },
    { id: '3', nome: 'Ação' },
    { id: '4', nome: 'Infantil' },
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
#shop .banner {
  position: relative;
  width: 100%;
  height: 80dvh;
  overflow: hidden;
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

#shop .banner .banner-title span{
  color: #e91e63;
}

#shop .sub-title {
  width: 100%;
  padding: 75px 75px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 2px solid #e91e63;
}

#shop .sub-title h3 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
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
  width: calc(25% - 20px);
  height: 450px;
  border-radius: 12px;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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

#shop .catalogo .roupas .bottom .btnSaibaMais ion-icon {
  font-size: 15px;
  margin-right: 5px;
}

#shop .catalogo .roupas .bottom .btnSaibaMais button.hover {
  transform: scale(1.1) translateY(-10px);
  background-color: var(--rosaclaro-color);
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

#shop .catalogo .roupas .bottom .carrinho ion-icon {
  font-size: 16px;
  color: #0d0d0d;
  transition: all 0.5s ease;
}

#shop .catalogo .roupas .bottom .carrinho:hover {
  transform: scale(1.1) translateY(-10px);
  background-color: var(--rosaclaro-color);
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
  flex-direction:column;
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
  background-color: #e91e63;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-container button:hover {
  background-color: #d81b60;
}
</style>
