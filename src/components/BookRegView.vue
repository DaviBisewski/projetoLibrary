<template>
  <section>
  <div class="book-form">
    <h2>Cadastro de Livro</h2>
    <hr>
    <form >
      <div>
        <label for="codigo">Código:</label>
        <input type="text"  id="codigo" required />
      </div>
      <div>
        <label for="titulo">Título:</label>
        <input type="text"  id="titulo" required />
      </div>
      <div>
        <label for="autor">Autor:</label>
        <input type="text"  id="autor" required />
      </div>
      <div>
        <label for="categoria">Categoria:</label>
        <input type="text"  id="categoria" required />
      </div>
      <div>
        <label for="localizacao">Localização:</label>
        <input type="text"  id="localizacao" required />
      </div>
      <button type="submit">Cadastrar</button>
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
}

button:hover {
  background-color: rgb(233, 132, 149);
}
hr{
  width: 280px;
  margin: 0 auto;
  border-color: #e91e63;
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