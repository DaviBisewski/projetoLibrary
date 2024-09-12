<template>
  <div class="header">
    <div class="title">
      <h1>Sua Família no Livro Amigo</h1>

      <p class="password-label">Senha:</p>
    </div>

  </div>
</template>

<style scoped>
.header {
  width: 1105px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: #fff;
  padding: 50px 0 50px 20px;
  border: 1px solid #e0e0e0;
  border-bottom: 0 solid transparent;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 750px;
  height: auto;
  border-bottom: 1px solid #fff;
}

.title h1 {
  font-size: 30px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: #0d0d0d;
}

.password-label {
  font-size: 20px;
  color: #0d0d0d;
  margin-top: 10px;
  letter-spacing: .75px;
}

</style>