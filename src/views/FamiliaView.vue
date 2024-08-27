<template>
    <div class="container">
      <!-- Importando e utilizando o componente de cabeçalho -->
      <HeaderComponent />
  
      <!-- Seções repetidas -->
      <section class="content-section">
        <div class="quadradao">
          <!-- Importando e utilizando o componente de pessoa -->
          <PessoaComponent imgSrc="caminho/para/imagem.png" nome="Lorem" />
    
          <!-- Importando e utilizando o componente de livro -->
          <LivroComponent imgSrc="caminho/para/imagem_livro.png" nomeLivro="Nome Livro" />
        </div>
      </section>
  
      <section class="content-section">
        <div class="quadradao">
          <!-- Importando e utilizando o componente de pessoa -->
          <PessoaComponent imgSrc="caminho/para/imagem.png" nome="Lorem" />
    
          <!-- Importando e utilizando o componente de livro -->
          <LivroComponent imgSrc="caminho/para/imagem_livro.png" nomeLivro="Nome Livro" />
        </div>
      </section>
  
      <section class="content-section">
        <div class="quadradao">
          <!-- Importando e utilizando o componente de pessoa -->
          <PessoaComponent imgSrc="caminho/para/imagem.png" nome="Lorem" />
    
          <!-- Importando e utilizando o componente de livro -->
          <LivroComponent imgSrc="caminho/para/imagem_livro.png" nomeLivro="Nome Livro" />
        </div>
      </section>

    </div>
  </template>
  
  <script setup>
  import HeaderComponent from '../components/HeaderComponent.vue';
  import PessoaComponent from '../components/PessoaComponent.vue';
  import LivroComponent from '../components/LivroComponent.vue';
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px; /* Espaçamento entre as seções */
    padding: 20px; /* Adiciona um pouco de espaço ao redor da página */
    background-color: whitesmoke;
  }
  
  .content-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px; /* Espaço entre as seções e o próximo elemento */
  }
  
  .quadradao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 650px;
    height: 150px;
    background-color: #D9D9D9;
    padding: 20px;
    border-radius: 14px;
  }
  
  .footer {
    margin-top: 40px; /* Espaço acima do footer */
    padding: 20px; /* Espaço interno do footer */
    background-color: #f1f1f1; /* Cor de fundo do footer */
  }
  </style>
  