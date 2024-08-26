<script setup>
</script>

<template>
    <section>
    <div class="center">
        <div class="livroimg">
            <img src="../assets/icon.webp" alt="" />
        </div>
        <div class="mainInfos">
        <div class="title">
            <h1>Título</h1>
            <h3>autora:</h3>
        </div>
        <div class="info">
            <h3>páginas: x</h3>
            <h3>editora: x</h3>
            <h3>edição: x</h3>
            <h3>idioma: x</h3>
            <h3>código: x</h3>
        </div>
        <div class="buttons">
            <button>Emprestar</button>
            <button>Reservar</button>
        </div>
    </div>
    </div>
    <div class="desc">
        <div class="title">
        <h1>Descrição:</h1>
    </div>
        <div class="resumo">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti, in facere mollitia fugit, ut quibusdam distinctio eveniet magni sed, optio aliquid voluptate natus corrupti autem officia fugiat corporis rerum?</p>

        </div>
        <div class="disclaimer">

        </div>
    </div>
</section>
</template>

<style scoped>
    *{
  box-sizing: border-box;
  margin: 0;
  border: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;

}


section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 750px;
}
.desc{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.resumo{
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
}



.buttons{
    display: flex;
    gap: 50px;
}

.buttons button{
    display: flex;
    justify-content: center;
    align-items: center;
    width:  100px;
    height: 50px;
    border-radius: 10px;
}

.center {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 0 0 10px 0;
    border: 1px solid black;
}

.mainInfos{
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    gap: 100px;
}

.livroimg, img{
    width: 300px;
    height:450px;
    border: 1px solid black;

}

.title{
    width: 100%;
    display: flex;
    gap: 30px;
    font-size: 20px;
    align-items: left;
    flex-direction: column;
}


.info{
    display: flex;
    justify-content: right;
    align-items: center;
    flex-direction: column;
    height: 95px;
    width: 200px;
    gap: 10px;
    flex-wrap: wrap;
}

</style>