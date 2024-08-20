<script setup>
</script>
<template>
    <section>
        <div class="header">
            <div class="title">
                <h1>Família</h1>
            </div>
            <p>Membros:</p>
        </div>
        <div class="quadradao">
            <div class="pessoa">
                <div class="img">
                    <img src="" alt="imgPessoa">
                </div>
                <div class="nomePessoa">
                    <h1>Nome:</h1>
                    <p>Enzo é um viado</p>
                </div>
            </div>
            <div class="livro">
                <div class="titleLivro">
                    <h2>Status</h2>
                </div>
                <div class="imgLivro">
                    <img src="" alt="imgLivro">
                    <h3>Nome Livro</h3>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}

.header p {
    position: relative;
    right: 250px;
    margin: 20px 0 0 0;
    font-size: 40px;
}

.title {
    justify-content: center;
    align-items: center;
    display: flex;
    min-width: 750px;
    border-radius: 5px;
    height: 250px;
    background-color: rgb(166, 207, 207);
}

.title h1 {
    font-size: 50px;
    text-align: center;
}

.quadradao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 650px;
    height: 150px;
    background-color: rgb(166, 207, 207);
    padding: 20px;
    border-radius: 14px;
}

.quadradao .pessoa {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.quadradao .livro {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.quadradao .livro .titleLivro h2 {
    transform: rotate(270deg);
    border-bottom: 1.4px solid #0d0d0d;
    padding: 0 0 5px 0;
}

.quadradao .livro .imgLivro {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>