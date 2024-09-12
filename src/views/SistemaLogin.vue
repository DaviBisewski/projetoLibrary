<template>
  <section v-if="visivel" class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <hr />
      <form @submit.prevent="fazerLogin">
        <div class="form-group">
          <label for="email">Usuário:</label>
          <input type="text" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="senha" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginView',
  setup() {
    const email = ref('');
    const senha = ref('');
    const visivel = ref(true);
    const router = useRouter();

    const fazerLogin = () => {
      if (email.value === 'admin' && senha.value === 'admin') {
        // Login válido, redireciona para a HomeView
        router.push('/home');
      } else {
        alert('Credenciais inválidas!');
      }
    };

    return {
      email,
      senha,
      visivel,
      fazerLogin
    };
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, rgba(93,110,201,1) 0%, #e0e0e0 120%);
  padding: 20px;
}

.login-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.login-form h2 {
  margin-bottom: 24px;
  color: #333;
  font-size: 24px;
}

.login-form hr {
  margin: 24px auto;
  border: none;
  height: 2px;
  background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
  width: 70%;
}

.form-group {
  margin-bottom: 24px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #555;
  font-size: 18px;
}

.form-group input {
  width: 100%;
  padding: 16px;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 18px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #70a1ff;
  outline: none;
}

button {
  padding: 14px 24px;
  background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #5a7aff;
  transform: scale(1.05);
}

</style>