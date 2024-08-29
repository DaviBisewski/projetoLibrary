<template>
  <div class="container">
      <HeaderComponent />

      <section class="content-section">
          <div class="quadradao">
              <PessoaComponent imgSrc="caminho/para/imagem.png" nome="Lorem" />
              <LivroComponent imgSrc="caminho/para/imagem_livro.png" nomeLivro="Nome Livro" />
          </div>
      </section>

      <section class="content-section">
          <div class="quadradao">
              <PessoaComponent imgSrc="caminho/para/imagem.png" nome="Lorem" />
              <LivroComponent imgSrc="caminho/para/imagem_livro.png" nomeLivro="Nome Livro" />
          </div>
      </section>

      <section class="content-section">
          <div class="quadradao">
              <PessoaComponent imgSrc="caminho/para/imagem.png" nome="Lorem" />
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
  gap: 40px;
  padding: 20px;
  background-color: #f6f7fb;
  margin-top: 10px; 
}

.content-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.quadradao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 650px;
  height: 150px;
  background-color: white;
  padding: 20px;
  border-radius: 14px;
}

.footer {
  margin-top: 40px;
  padding: 20px;
  background-color: white;
}
</style>
