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
            <textarea  class="desc" cols="40" rows="5" placeholder="Escreva aqui..."></textarea>
          </div>
        </div>
        <div class="boxComentarios">
          <div class="infosComentarios">
            <p>Nome:</p>
            <p>Livro:</p>
          </div>
          <div class="comantario">
            <textarea  class="desc" cols="40" rows="5" placeholder="Escreva aqui..."></textarea>
          </div>
        </div>
        <div class="boxComentarios">
          <div class="infosComentarios">
            <p>Nome:</p>
            <p>Livro:</p>
          </div>
          <div class="comantario">
            <textarea  class="desc" cols="40" rows="5" placeholder="Escreva aqui..."></textarea>
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

.desc{
  position: relative;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
}

.mainComentarios .boxComentarios:nth-child(3) .desc{
  left: -70px;
}

.mainComentarios{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mainComentarios .boxComentarios {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  width: 700px;
  gap: 150px;
  padding: 20px;
}

.mainComentarios .boxComentarios:nth-child(3), .mainComentarios .boxComentarios:nth-child(5), .mainComentarios .boxComentarios:nth-child(7){
  position: relative;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 10px;
}

.mainComentarios .boxComentarios:nth-child(3) .infosComentarios{
  position: relative;
  left: -50px;
}

.mainComentarios .boxComentarios .infosComentarios{
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  color: #0d0d0d;
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
  background-color: #fff ;
  margin-top: 10px; 
}

main{
  width: 1105px;
  background-color: #fff ;
  border-radius:0px 0 10px 10px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-top: 0px solid transparent;
}

.members-label {
  width: 205px;
  margin: 20px 0 10px 0;
  font-size: 28px;
  color: #0d0d0d;
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin: auto;
}

 .title .members-label{
  width: 475px;
  margin: 20px 0 10px 0;
  font-size: 28px;
  color: #0d0d0d;
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin: auto;
}

.content-section {
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-color: #fff ;
  border-bottom: 1px solid #e0e0e0;;
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
