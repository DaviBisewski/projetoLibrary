<template>
  <div class="pessoa">
    <div class="img">
      <img src="../assets/img/login.svg" alt="imgPessoa">
    </div>
    <div class="nomePessoa">
      <h1>Nome:</h1>
      <p>{{ nome }}</p>
    </div>
  </div>
</template>

<script setup>
const defineProps = defineProps({
  imgSrc: String,
  nome: String
});
</script>

<style scoped>
.pessoa {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>