<template>
  <div class="container">
      <HeaderComponent />
    <main>
      <h1 class="members-label">Membros:</h1>
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
      <div class="mainComentarios">
        <div class="title">
          <h1 class="members-label">Comentários da Família:</h1>
        </div>
        <div class="boxComentarios">
          <div class="infosComentarios">
            <p>Nome:</p>
            <p>Livro:</p>
          </div>
          <div class="comantario">
            <textarea  id="desc" cols="60" rows="5" placeholder="Escreva aqui..."></textarea>
          </div>
        </div>
        <div class="boxComentarios">
          <div class="infosComentarios">
            <p>Nome:</p>
            <p>Livro:</p>
          </div>
          <div class="comantario">
            <textarea  id="desc" cols="60" rows="5" placeholder="Escreva aqui..."></textarea>
          </div>
        </div>
        <div class="boxComentarios">
          <div class="infosComentarios">
            <p>Nome:</p>
            <p>Livro:</p>
          </div>
          <div class="comantario">
            <textarea  id="desc" cols="60" rows="5" placeholder="Escreva aqui..."></textarea>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import PessoaComponent from '../components/PessoaComponent.vue';
import LivroComponent from '../components/LivroComponent.vue';
</script>

<style scoped>

#desc{
  padding: 10px;
  border-radius: 10px;
}

.mainComentarios .boxComentarios {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0;
}

.mainComentarios .boxComentarios:nth-child(3), .mainComentarios .boxComentarios:nth-child(5), .mainComentarios .boxComentarios:nth-child(7){
  position: relative;
  left: -70px;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 20px;
}

.mainComentarios .boxComentarios .infosComentarios{
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  color: #fff;
}

.mainComentarios .boxComentarios .infosComentarios p{
  font-size: 18px;
  font-weight: 600;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(95, 114, 217); ;
  margin-top: 10px; 
  background: linear-gradient(135deg, rgb(81, 104, 235) 0%, #e0e0e0 120%);;
}

main{
  background-color: rgba(93,110,201,1);
  border-radius:0px 10px 10px 10px;
  padding: 20px 0;
}

.members-label {
  width: 100%;
  margin: 20px 0 10px 20px;
  font-size: 40px;
  color: #fff;
}

.content-section {
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background: rgb(95, 114, 217);
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
