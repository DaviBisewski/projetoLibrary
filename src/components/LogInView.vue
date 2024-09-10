<template>
  <section v-if="visivel">
    <div class="book-form">
      <button class="close-button" @click="fecharComponente">✖</button>
      <h2>Login</h2>
      <hr />
      <form>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" required />
        </div>
        <div>
          <label for="senha">Senha:</label>
          <input type="password" id="senha" required />
        </div>
        <button type="submit">Entrar</button>
        <!-- Botão de Cadastro -->
        <button type="button" @click="mostrarCadastro">Cadastrar</button>
      </form>
    </div>
  </section>

  <!-- Exibir RegisterView.vue -->
  <RegisterView v-if="mostrarRegistro" @fechar="fecharRegistro" />
</template>

<script>
import { ref } from 'vue';
import RegisterView from './RegisterView.vue'; // Importando o componente de cadastro

export default {
  name: 'LoginView',
  components: {
    RegisterView
  },
  setup() {
    const visivel = ref(true);
    const mostrarRegistro = ref(false);

    const fecharComponente = () => {
      visivel.value = false;
    };

    const mostrarCadastro = () => {
      visivel.value = false;
      mostrarRegistro.value = true;
    };

    const fecharRegistro = () => {
      mostrarRegistro.value = false;
      visivel.value = true;
    };

    return {
      visivel,
      fecharComponente,
      mostrarCadastro,
      mostrarRegistro,
      fecharRegistro
    };
  }
}
</script>




<style scoped>
.book-form {
  position: relative;
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
  background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button + button{
  margin-left: 20px;
}

hr {
  width: 280px;
  margin: 0 auto;
  border: none;
  height: 2px;
  background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
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
  from {
    transform: translateY(-1000px);
  }

  to {
    transform: translateY(0);
  }
}
</style>
