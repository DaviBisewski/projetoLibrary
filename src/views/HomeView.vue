<template>
  <section id="shop">
    <div class="title">
      <h1>SHOP</h1>
    </div>
    <div class="sub-title">
      <h3>{{ resultados }} Resultados Exibidos</h3>
    </div>
    <div class="catalogo">
      <div class="roupas">
        <div class="imgRoupa">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="sale">
          <p>R$ {{ sale }}</p>
        </div>
        <div class="bottom">
          <div class="btnSaibaMais">
            <ion-icon name="enter-outline"></ion-icon>
            <button @click="toggleComponent">Saiba Mais</button>
            <div class="boxFixedScreen show" v-if="componenteAtivo" >
             <fixed-screen></fixed-screen>
            </div>
          </div>
          <div class="carrinho">
            <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
        </div>
      </div>
      <div class="roupas">
        <div class="imgRoupa">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="sale">
          <p>R$ {{ sale }}</p>
        </div>
        <div class="bottom">
          <div class="btnSaibaMais">
            <ion-icon name="enter-outline"></ion-icon>
            <button @click="toggleComponent">Saiba Mais</button>
            <div class="boxFixedScreen show" v-if="componenteAtivo" >
             <fixed-screen></fixed-screen>
            </div>
          </div>
          <div class="carrinho">
            <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
        </div>
      </div>
      <div class="roupas">
        <div class="imgRoupa">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="sale">
          <p>R$ {{ sale }}</p>
        </div>
        <div class="bottom">
          <div class="btnSaibaMais">
            <ion-icon name="enter-outline"></ion-icon>
            <button @click="toggleComponent">Saiba Mais</button>
            <div class="boxFixedScreen show" v-if="componenteAtivo" >
             <fixed-screen></fixed-screen>
            </div>
          </div>
          <div class="carrinho">
            <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
        </div>
      </div>
      <div class="roupas">
        <div class="imgRoupa">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="sale">
          <p>R$ {{ sale }}</p>
        </div>
        <div class="bottom">
          <div class="btnSaibaMais">
            <ion-icon name="enter-outline"></ion-icon>
            <button @click="toggleComponent">Saiba Mais</button>
            <div class="boxFixedScreen show" v-if="componenteAtivo" >
             <fixed-screen></fixed-screen>
            </div>
          </div>
          <div class="carrinho">
            <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
        </div>
      </div>
      <div class="roupas">
        <div class="imgRoupa">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="sale">
          <p>R$ {{ sale }}</p>
        </div>
        <div class="bottom">
          <div class="btnSaibaMais">
            <ion-icon name="enter-outline"></ion-icon>
            <button @click="toggleComponent">Saiba Mais</button>
            <div class="boxFixedScreen show" v-if="componenteAtivo" >
             <fixed-screen></fixed-screen>
            </div>
          </div>
          <div class="carrinho">
            <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
        </div>
      </div>
      <div class="roupas">
        <div class="imgRoupa">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="sale">
          <p>R$ {{ sale }}</p>
        </div>
        <div class="bottom">
          <div class="btnSaibaMais">
            <ion-icon name="enter-outline"></ion-icon>
            <button @click="toggleComponent">Saiba Mais</button>
            <div class="boxFixedScreen show" v-if="componenteAtivo" >
             <fixed-screen></fixed-screen>
            </div>
          </div>
          <div class="carrinho">
            <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
        </div>
      </div>
      <div class="roupas">
        <div class="imgRoupa">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="sale">
          <p>R$ {{ sale }}</p>
        </div>
        <div class="bottom">
          <div class="btnSaibaMais">
            <ion-icon name="enter-outline"></ion-icon>
            <button @click="toggleComponent">Saiba Mais</button>
            <div class="boxFixedScreen show" v-if="componenteAtivo" >
             <fixed-screen></fixed-screen>
            </div>
          </div>
          <div class="carrinho">
            <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
        </div>
      </div>
      <div class="roupas">
        <div class="imgRoupa">
          <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="sale">
          <p>R$ {{ sale }}</p>
        </div>
        <div class="bottom">
          <div class="btnSaibaMais">
            <ion-icon name="enter-outline"></ion-icon>
            <button @click="toggleComponent">Saiba Mais</button>
            <div class="boxFixedScreen show" v-if="componenteAtivo" >
             <fixed-screen></fixed-screen>
            </div>
          </div>
          <div class="carrinho">
            <button><ion-icon name="cart-outline"></ion-icon></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  <script>
import FixedScreen from '../components/FixedScreen.vue'

export default {
  name: 'App',
  components: {
    FixedScreen
  },
  data() {
    return {
      componenteAtivo: false
    }
  },
  methods: {
    toggleComponent() {
      this.componenteAtivo = !this.componenteAtivo
    }
  }
}
</script>
  <style scoped>
#shop .title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px;
}

#shop .title h1 {
  font-size: 3.5vw;
  font-weight: 700;
}

#shop .sub-title {
  width: 100%;
  display: flex;
  padding: 75px;
}

#shop .sub-title h3 {
  font-size: 15px;
  font-weight: 700;
}

#shop .catalogo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 150px 75px;
  gap: 25px;
}

#shop .catalogo .roupas {
  width: 350px;
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
  font-size: 12px;
  letter-spacing: 1px;
  gap: 5px;
}

#shop .catalogo .roupas .bottom .btnSaibaMais ion-icon {
  font-size: 15px;
}

#shop .catalogo .roupas .bottom .btnSaibaMais a {
  color: #0d0d0d;
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
    transition: all 0.5s ease-in;
}
.boxFixedScreen.show {
    display: block;
}

/* Responsividade */

@media (max-width: 1000px) {
  #shop .title h1 {
    font-size: 40px;
    font-weight: 700;
  }

  #shop .sub-title {
    width: 100%;
    display: flex;
    padding: 50px;
  }
}

@media (max-width: 600px) {
  #shop .catalogo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0 75px;
    gap: 200px;
  }
}
</style>