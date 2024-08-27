<template>
    <div class="header">
      <div class="title">
        <h1>Família</h1>
        <!-- Adicionando o texto "Senha" abaixo do título -->
        <p class="password-label">Senha</p>
      </div>
      <!-- Texto "Membros" posicionado à esquerda -->
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
    height: auto; /* Ajustado para se adaptar ao conteúdo */
    background-color: #D9D9D9;
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
    margin-top: 10px; /* Ajusta o espaçamento entre o título e o texto "Senha" */
  }
  
  .members-label {
    width: 100%; /* Faz com que o texto "Membros" ocupe a largura total do contêiner */
    text-align: left; /* Alinha o texto à esquerda */
    margin: 20px 0 0 20px; /* Ajusta o espaçamento */
    font-size: 40px;
  }
  </style>
  