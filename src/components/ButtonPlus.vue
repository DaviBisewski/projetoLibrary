<!-- ButtonPlus.vue -->
<template>
    <transition name="fade">
      <div v-if="visible" class="button-plus" @animationend="handleAnimationEnd">
        +1
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false,
        animationFinished: false,
      };
    },
    methods: {
      startAnimation() {
        this.visible = true;
        this.animationFinished = false;
        setTimeout(() => {
          this.visible = false;
        }, 10000); // 10 segundos para a bolinha sumir
      },
      handleAnimationEnd() {
        if (!this.animationFinished) {
          this.animationFinished = true;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .button-plus {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: red;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    animation: moveUp 10s forwards;
  }
  
  @keyframes moveUp {
    from {
      bottom: 20px;
      opacity: 1;
    }
    to {
      bottom: 100vh;
      opacity: 0;
    }
  }
  
  /* Transição de desvanecimento */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em <2.1.8 */ {
    opacity: 0;
  }
  </style>
  