<template>
  <section v-if="visivel">
    <div class="book-form">
      <button class="close-button" @click="fecharComponente">✖</button>
      <h2>Login</h2>
      <hr />
      <form>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email    " required />
        </div>
        <div>
          <label for="senha">Senha:</label>
          <input type="password" id="senha" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RegFamView',
  setup() {
    const visivel = ref(true);

    const fecharComponente = () => {
      visivel.value = false;
    };

    return {
      visivel,
      fecharComponente
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
  background-color: #e91e63;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

@keyframes spin {
  from {
    transform: scale(40) translate(200px) rotate(500deg) translateY(1000px);
  }

  to {
    transform: scale(1) translate(0) rotate(0) translateY(0);
  }
}
</style>
