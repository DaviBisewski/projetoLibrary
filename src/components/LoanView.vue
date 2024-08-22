<template>
    <section>
      <div class="book-form">
        <h2>Registro de Empréstimo</h2>
        <hr />
        <form @submit.prevent="registrarEmprestimo">
          <div>
            <label for="codigo-livro">Código do Livro:</label>
            <input type="text" id="codigo-livro" v-model="codigoLivro" required />
          </div>
          <div>
            <label for="data">Data:</label>
            <input type="date" id="data" v-model="data" required />
          </div>
          <div>
            <label for="nome-cliente">Nome do Cliente:</label>
            <input type="text" id="nome-cliente" v-model="nomeCliente" required />
          </div>
          <div>
            <label for="cpf-cliente">CPF do Cliente:</label>
            <input type="text" id="cpf-cliente" v-model="cpfCliente" required />
          </div>
          <div>
            <label for="data-devolucao">Data de Devolução:</label>
            <input type="date" id="data-devolucao" v-model="dataDevolucao" required />
          </div>
          <button type="submit">Registrar Empréstimo</button>
        </form>
        <div v-if="showReceipt" class="receipt">
          <h2>Receita de Empréstimo</h2>
          <p><strong>Código da Receita:</strong> {{ receitaCodigo }}</p>
          <p><strong>Data:</strong> {{ data }}</p>
          <p><strong>CPF do Cliente:</strong> {{ cpfCliente }}</p>
          <p><strong>Código do Livro:</strong> {{ codigoLivro }}</p>
          <button @click="imprimir">Imprimir</button>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .book-form {
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
  
  .receipt {
    margin-top: 30px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .receipt h2 {
    color: #000000;
  }
  
  .receipt p {
    margin: 10px 0;
  }
  
  .receipt button {
    background-color: #e91e63;
  }
  
  .receipt button:hover {
    background-color: #e91e63;
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
  
  <script>
  export default {
    name: 'LoanForm',
    data() {
      return {
        codigoLivro: '',
        data: '',
        nomeCliente: '',
        cpfCliente: '',
        dataDevolucao: '',
        showReceipt: false,
        receitaCodigo: 'R' + Math.floor(Math.random() * 10000).toString().padStart(4, '0')
      };
    },
    methods: {
      registrarEmprestimo() {
        this.showReceipt = true;
      },
      imprimir() {
        window.print();
      }
    }
  };
  </script>
  