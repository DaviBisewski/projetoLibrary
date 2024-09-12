<template>
    <header id="header">
        <div class="redes-sociais">
            <a href="https://www.instagram.com/grupolivrariascuritiba/" target="_blank"><img src="../assets/img/logo-instagram.svg"></a>
            <a href="https://is.gd/cK92I3" target="_blank"><img src="../assets/img/mail-outline.svg"></a>
            <a href="https://api.whatsapp.com/send/?phone=554133305191" target="_blank"><img src="../assets/img/call-outline.svg"></a>
        </div>
        <div class="container">
            <div class="header-main">
                <div class="titulo">
                    <router-link to="/Home">
                        <img id="logo" src="../assets/icon.webp" alt="">
                    </router-link>
                </div>
                <nav class="nav">
                    <ul>
                        <li class="list">
                            <span class="indicator"></span>
                            <router-link to="/familia">
                                <span class="icon"><img src="../assets/img/familia.svg" alt="logo-familia"></span>
                                <span class="text">Família</span>
                            </router-link>
                        </li>
                        <li class="list">
                            <span class="login"></span>
                            <button @click="toggleComponent" class="nav-button">
                                <span class="icon"><img src="../assets/img/person-outline.svg" alt="logo-login"></span>
                                <span class="text">Login</span>
                            </button>
                        </li>
                        <li class="list">
                            <span class="indicator"></span>
                            <router-link to="/emprestimos">
                                <span class="icon"><img src="../assets/img/emprestimos.svg" alt="logo-emprestimos"></span>
                                <span class="text">Empréstimos</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <div v-if="componenteAtivo" class="fixed-container show">
        <LogInView />
    </div>
</template>

<script>
import LogInView from './LogInView.vue';
export default {
    name: 'Header',
    components: {
        LogInView,
    },
    data() {
        return {
            componenteAtivo: false
        };
    },
    methods: {
        toggleComponent() {
            this.componenteAtivo = !this.componenteAtivo;
        }
    },
}
</script>

<style scoped>
#header {
    font-family: 'Raleway', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    width: 100%;
    position: relative;
    top: 10px;
    z-index: 99;
    padding: 15px;
    border-bottom: 2px solid #ddd;
    height: 190px;
}

#header .redes-sociais {
    position: absolute;
    right: 100px;
    top: 70px;
    display: flex;
    gap: 20px;
    z-index: 100;
}

#header .redes-sociais a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px;
    border-radius: 50%;
    background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
    color: #e7e7e7;
    transition: all 0.5s ease;
}

#header .redes-sociais a:hover {
    transform: scale(1.1);
    background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
    background-color: #e7e7e7;
}

#header .redes-sociais a img{
    width: 20px;
}

.header-main {
    background-color: var(--bright-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-radius: 4px;
    position: relative;
}

#logo {
    width: 75px;
    text-decoration: none;
    color: var(--dark-color);
    position: absolute;
    left: 10%;
}

.titulo {
    display: flex;
    align-items: center;
}

.nav {
    top: 40px;
    height: 70px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    border-radius: 10px;
}

.nav ul {
    display: flex;
    gap: 40px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.nav ul .list {
    position: relative;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.nav ul li a,
.nav-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
}

.nav ul li a .icon,
.nav-button .icon {
    line-height: 75px;
    font-size: 2rem; 
    text-align: center;
    transition: .5s;
    color: #0D0D0D;
    content: "";
}

.nav ul li:hover a .icon,
.nav-button:hover .icon {
    transform: translateY(-32px);
    color: #fff;
}

.nav ul li a .text,
.nav-button .text {
    color: #0D0D0D;
    font-weight: 500;
    font-size: .75em;
    letter-spacing: .05em;
    transition: .5s;
    opacity: 0;
    transform: translateY(20px);
}

.nav ul li:hover a .text,
.nav-button:hover .text {
    opacity: 1;
    transform: translateY(10px);
    font-size: 1rem; 
}

.nav ul li a .icon img, .nav ul li button .icon img {
    width: 30px;
}

.indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
    border-radius: 50%;
    border: 6px solid #fff;
    transition: all .5s ease-in-out;
    opacity: 0;
}

.list:hover .indicator {
    opacity: 1;
}

.indicator::before,
.indicator::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 0 -10px 0 0 #fff;
}

.indicator::before {
    top: 50%;
    left: -22px;
    border-top-right-radius: 20px;
}

.indicator::after {
    top: 50%;
    right: -22px;
    border-top-left-radius: 20px;
}

.login {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
    border-radius: 50%;
    border: 6px solid #fff;
    transition: all .5s ease-in-out;
    opacity: 0;
}

.list:hover .login {
    opacity: 1;
}

.login::before,
.login::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 0 -10px 0 0 #fff;
}

.login::before {
    top: 50%;
    left: -22px;
    border-top-right-radius: 20px;
}

.login::after {
    top: 50%;
    right: -22px;
    border-top-left-radius: 20px;
}

.fixed-container {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    padding: 20px;
    z-index: 100;
    transition: all 0.5s ease-in;
}

.fixed-container.show {
    display: block;
}

@media (max-width: 991px) {
    .nav {
        height: auto;
        width: auto;
        background-color: #e7e7e7;
        position: fixed;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 10px 0;
        margin: 20px 40px 0 0;
        border-radius: 10px;
        flex-direction: column;
    }

    .nav ul li:hover a .icon {
        transform: translateY(-22px);
        color: #0D0D0D;
    }

    .nav ul li a .text {
        font-size: .60em;
    }

    .indicator {
        visibility: hidden;
    }

    #header .redes-sociais {
        position: absolute;
        right: 50px;
        top: 15px;
        display: flex;
        gap: 7.5px;
        z-index: 100;
    }
}

@media (max-width: 740px) {
    .nav {
        height: auto;
        width: auto;
        background-color: #e7e7e7;
        position: fixed;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0;
        padding: 5px 0 0 0;
        margin: 20px 20px 0 0;
        border-radius: 10px;
        flex-direction: column;
    }

    .nav ul li a .text {
        font-size: .58em;
    }
}

@media (max-width: 380px) {
    #header {
        padding: 8px;
    }

    .header-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
    }

    #logo {
        padding-top: 10px;
        left: 10%;
    }

    .container {
        max-width: 100%;
        margin: 0;
    }
}
</style>
