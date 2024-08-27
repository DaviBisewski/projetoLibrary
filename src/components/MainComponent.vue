<template>
  <section>
    <HeaderComponent />
    <div class="quadradao">
      <PessoaComponent imgSrc="" nome="Lorem" />
      <LivroComponent imgSrc="" nomeLivro="Nome Livro" />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
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
</style>