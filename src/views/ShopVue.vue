<script setup>
</script>

<template>
    <section id="fixedScreen">
        <div class="mainBook">
            <div class="boxImg">
                <img src="../assets/icon.webp" alt="" />
            </div>
            <div class="boxInfo">
                <div class="boxTitles">
                    <div class="title">
                        <h1>Titulo do Livro</h1>
                    </div>
                    <div class="subtitle">
                        <h3>Autora:</h3>
                    </div>
                </div>
                <div class="bookInfos">
                    <p>Paginas:</p>
                    <p>Editora:</p>
                    <p>Edição:</p>
                    <p>Idioma</p>
                    <p>Codigo</p>
                </div>
                <div class="buttons">
                    <button>Emprestar</button>
                    <button>Reservar</button>
                </div>
            </div>
        </div>
        <div class="mainDesc">
            <div class="title">
                <h2>Descrição:</h2>
            </div>
            <div class="boxText">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quis, vero tenetur at porro ad aut fuga impedit quisquam laboriosam, consectetur officia, rem quae rerum illo placeat necessitatibus. Illo, distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sunt asperiores facere quis consectetur expedita voluptas maiores, provident excepturi minima ipsum in praesentium error omnis qui quas! Quis, adipisci maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet assumenda fuga mollitia atque cum odio? Tenetur exercitationem, dignissimos in praesentium qui, voluptas itaque, reprehenderit esse consectetur officia dolores facilis!</p>
            </div>

        </div>
    </section>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
}


#fixedScreen {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 50px;
}

#fixedScreen .mainBook {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

#fixedScreen .mainBook .boxImg img{
    width: 300px;
    height: 400px;
    border: 1px solid #0d0d0d;
}

#fixedScreen .mainBook .boxInfo {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

#fixedScreen .mainBook .boxInfo .title {
    display: flex;
    justify-content: center;
    align-items: center;
}

#fixedScreen .mainBook .boxInfo .title h1 {
    font-size: 40px;
}

#fixedScreen .mainBook .boxInfo .subtitle {
    display: flex;
    justify-content: start;
    align-items: center;
}

#fixedScreen .mainBook .boxInfo .subtitle h3 {
    font-size: 20px;
}

#fixedScreen .mainBook .boxInfo .bookInfos {
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    flex-wrap: wrap;
}

#fixedScreen .mainBook .boxInfo .bookInfos p {
    font-size: 15px;
}

#fixedScreen .mainBook .boxInfo .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#fixedScreen .mainBook .boxInfo .buttons button {
    width: 90px;
    padding: 10px 0;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
}

#fixedScreen .mainBook .boxInfo .buttons button:hover {
    transform: scale(1.1);
}

#fixedScreen .mainDesc{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

#fixedScreen .mainDesc .title{
    width: 625px;
    display: flex;
    justify-content: start;
    align-items: center;
}

#fixedScreen .mainDesc .boxText{
    width: 625px;
    padding: 30px;
    background-color: #e7e7e7;
    text-align: justify;
    border-radius: 10px;
}
</style>