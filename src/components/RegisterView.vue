<template>
    <section>
      <div class="book-form">
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
          <button type="button">Registrar Família</button>
        </form>
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
  @keyframes spin {
  to {
    transform: scale(1) translate(0px) rotate(0deg) translateY(0);
  }

  from {
    transform: scale(250) translate(2000px) rotate(720deg) translateY(1100px);
  }
}
  </style>
  
  