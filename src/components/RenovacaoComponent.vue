<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <h3>Renovação de Empréstimo</h3>
        <p>Livro: {{ livro.nome }}</p>
        <label for="renovacaoDias">Dias para renovação:</label>
        <input type="number" id="renovacaoDias" v-model="diasRenovacao" min="1" />
        
        <div class="modal-actions">
          <button @click="confirmarRenovacao">Confirmar</button>
          <button @click="$emit('fechar')">Cancelar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      livro: Object,
    },
    data() {
      return {
        diasRenovacao: 7,
      };
    },
    methods: {
      confirmarRenovacao() {
        alert(`Empréstimo do livro ${this.livro.nome} renovado por ${this.diasRenovacao} dias.`);
        this.$emit('fechar');
      }
    }
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
  }
  
  .modal-actions {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .modal-actions button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .modal-actions button:first-of-type {
    background-color: #4caf50;
    color: white;
  }
  
  .modal-actions button:last-of-type {
    background-color: #f44336;
    color: white;
  }
  </style>
  