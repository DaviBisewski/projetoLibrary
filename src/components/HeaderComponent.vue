<template>
  <div class="header">
    <div class="title">
      <h1>Família</h1>

      <p class="password-label">Senha:</p>
    </div>

  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(95, 114, 217);
  border-radius: 15px 15px 0 0;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 750px;
  border-radius: 15px;
  height: auto;
  padding: 60px;
  text-align: center;
  border: 1px solid #fff;
}

.title h1 {
  font-size: 70px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: #fff;
}

.password-label {
  font-size: 20px;
  color: #fff;
  margin-top: 10px;
  letter-spacing: .75px;
}

</style>