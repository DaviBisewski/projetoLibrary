<template>
  <div class="header">
    <div class="title">
      <h1>Família</h1>

      <p class="password-label">Senha</p>
    </div>

    <p class="members-label">Membros:</p>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 750px;
  border-radius: 5px;
  height: auto;
  background-color: white;
  padding: 60px;
  text-align: center;
}

.title h1 {
  font-size: 50px;
  margin: 0;
}

.password-label {
  font-size: 20px;
  color: #333;
  margin-top: 10px;
}

.members-label {
  width: 100%;
  margin: 20px 0 0 20px;
  font-size: 40px;
}
</style>