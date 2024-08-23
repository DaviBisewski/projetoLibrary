<template>
  <transition name="fade">
    <section v-if="visivel">
      <div class="book-form">
        <button class="close-button" @click="fecharComponente">✖</button>
        <h2>Cadastro de Clientes</h2>
        <hr />
        <form>
          <div>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" required />
          </div>
          <div>
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" required />
          </div>
          <div>
            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" required />
          </div>
          <div>
            <label for="telefone">Telefone:</label>
            <input type="text" id="telefone" required />
          </div>
          <div>
            <label for="email">E-mail:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label for="codigo-familia">Código da Família:</label>
            <input type="text" id="codigo-familia" required />
          </div>
          <button type="submit">Cadastrar</button>
          <button type="button" @click="trocarParaFamilia">Registrar Família</button>
        </form>
      </div>
    </section>
  </transition>

  <transition name="fade">
    <RegFamView v-if="!visivel" @fechar="trocarParaClientes"/>
  </transition>
</template>

<script>
import { ref } from 'vue';
import RegFamView from './RegFamView.vue'; // Ajuste o caminho se necessário

export default {
  name: 'CadastroClientesView',
  components: {
    RegFamView
  },
  setup() {
    const visivel = ref(true);

    const fecharComponente = () => {
      visivel.value = false;
    };

    const trocarParaFamilia = () => {
      visivel.value = false;
    };

    const trocarParaClientes = () => {
      visivel.value = true;
    };

    return {
      visivel,
      fecharComponente,
      trocarParaFamilia,
      trocarParaClientes
    };
  }
}
</script> 

<style scoped>
/* Transition classes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Existing styles */
.book-form {
  position: relative; /* Adicionado para que o botão de fechar fique no lugar certo */
  width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #E7E7E7;
  color: #000000;
  border: 1px solid #000000;
  animation: spin 2s ease;
  animation-iteration-count: 1;
}

.book-form h2 {
  color: #000000;
  justify-content: center;
  display: flex;
  align-items: center;
}

.book-form div {
  margin-bottom: 30px;
}

.book-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.book-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  color: #000000;
}

button {
  padding: 10px 15px;
  background-color: #e91e63;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px; 
}

button:hover {
  background-color: rgb(233, 132, 149);
}

hr {
  width: 280px;
  margin: 0 auto;
  border: none;
  height: 2px;
  background-color: #e91e63;
}

.close-button {
  position: absolute;
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

@keyframes spin {
  to {
    transform: scale(1) translate(0px) rotate(0deg) translateY(0);
  }

  from {
    transform: scale(250) translate(2000px) rotate(720deg) translateY(1100px);
  }
}
</style>
