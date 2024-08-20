<template>
    <footer id="bottom">
          <div class="prin-info">
             <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
             <a href="#"><ion-icon name="construct-outline"></ion-icon></a>
             <a href="#"><ion-icon name="settings-outline"></ion-icon></a>
          </div>
          <div class="prin-info">
             <div class="prin-social">
                <h4>Instagram</h4>
             </div>
             <div class="prin-social">
                <h4>Suporte</h4>
             </div>
             <div class="prin-social">
                <h4>Config.</h4>
             </div>
          </div>
          <div class="prin-info">
             <h3>Termos de Uso - Política de Privacidade</h3>
          </div>
          <div class="prin-info">
             ©️ 2024 | Livro Amigo
          </div>
 </footer>
</template>
<script>
</script>
<style scoped>
  #bottom {
  display: flex;
align-items: center;
justify-content: center;
  flex-direction: row;
  background-color: var(--cinzaescuro-color);
  padding: 75px 50px 75px 50px;
  width: 100%;
  flex-wrap: wrap;
}

.prin-info .prin-social{
  width: 77px;
}

.prin-social h4{
  color: var(--bright-color);
    transition: .55s;
    user-select: none;
}

.prin-social h4:hover{
  transition: all 0.5s ease-in-out;
    color: var(--rosaclaro-color);
}

.prin-info{
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 4vh;
gap: 6vh;
  color: var(--bright-color);
  width: 100%;
  transition: .55s;
}

.prin-info:hover{
  transition: all 0.5s ease-in-out;
  color: var(--rosaclaro-color);
  user-select: none;
}

#bottom .prin-info a{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--bright-color);
  border-radius: 50%;
  transition: all .5s ease;
}

#bottom .prin-info a:hover{
  transform: scale(1.1);
  background-color: var(--rosaclaro-color);
}

#bottom .prin-info a ion-icon{
    color: #212121;
    transform: scale(1.5);
    transition: all .5s ease;
}

#bottom .prin-info a:hover ion-icon{
  color: var(--bright-color);
}
</style>