<template>
  <div class="livro">
    <div class="titleLivro">
      <h2>Status</h2>
    </div>
    <div class="imgLivro">
      <img :src="imgSrc" alt="imgLivro">
      <h3>{{ nomeLivro }}</h3>
    </div>
  </div>
</template>

<script setup>
const defineProps = defineProps({
  imgSrc: String,
  nomeLivro: String
});
</script>

<style scoped>
.livro {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.titleLivro h2 {
  transform: rotate(270deg);
  border-bottom: 1.4px solid var(--rosaclaro-color);
  padding: 0 0 5px 0;
}

.imgLivro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>