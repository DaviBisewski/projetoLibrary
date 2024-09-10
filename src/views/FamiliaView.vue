<template>
  <div class="container">
      <HeaderComponent />
    <main>
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
    </main>
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
  padding: 20px;
  background-color: #f6f7fb;
  margin-top: 10px; 
}

main{
  background-color: rgb(95, 114, 217);
  border-radius:0 0 10px 10px;
  padding: 20px 0;
}

.content-section {
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-color: rgb(95, 114, 217);
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
