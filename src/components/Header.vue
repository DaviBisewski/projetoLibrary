<template>
    <header id="header">
        <div class="redes-sociais">
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
        <div class="container">
            <div class="header-main">
                <div class="titulo">
                    <router-link to="/">
                        <img id="logo" src="../assets/icon.webp" alt="">
                    </router-link>
                </div>
                <nav class="nav">
                    <ul>
                        <li class="list">
                            <span class="indicator"></span>
                            <router-link to="/biografia">
                                <span class="icon"><ion-icon name="ribbon-outline"></ion-icon></span>
                                <span class="text">Biografia</span>
                            </router-link>
                        </li>
                        <li class="list">
                            <button @click="toggleComponent" class="nav-button">Login</button>
                        </li>
                        <li class="list">
                            <span class="indicator"></span>
                            <router-link to="/carrinho">
                                <span class="icon"><ion-icon name="cart-outline"></ion-icon></span>
                                <span class="text">Carrinho</span>
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
        LogInView
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
    }
}
</script>

<style scoped>
#header {
    font-family: 'Raleway', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    width: 100%;
    position: relative;
    left: 0;
    top: 10px;
    z-index: 99;
    padding: 15px;
}

#header .redes-sociais {
    position: relative;
    right: 10px;
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 7.5px;
}

#header .redes-sociais a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6.5px;
    border-radius: 50%;
    background-color: var(--azulnaval-color);
    color: #e7e7e7;
    transition: all.5s ease;
}

#header .redes-sociais a:hover {
    transform: scale(1.1);
    color: var(--rosaclaro-color);
    background-color: #e7e7e7;
}

.header-main {
    background-color: var(--bright-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-radius: 4px;
}

#logo {
    padding-top: 10px;
    width: 75px;
    text-decoration: none;
    color: var(--dark-color);
}

.titulo {
    display: flex;
    align-items: center;
}

#header .logo {
    padding: 0 15px;
}

.nav {
    height: 70px;
    background-color: #e7e7e7;
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
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.nav ul .list {
    position: relative;
    list-style: none;
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
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5rem;
    text-align: center;
    transition: .5s;
    color: #0D0D0D;
}

.nav ul li:hover a .icon,
.nav-button:hover .icon {
    transform: translateY(-32px);
    color: #fff;
}

.nav ul li a .text,
.nav-button .text {
    position: absolute;
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
}

.indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background-color: #e91e63;
    border-radius: 50%;
    border: 6px solid #fff;
    transition: all .5s ease-in-out;
    opacity: 0;
}

.list:hover .indicator {
    opacity: 1;
}

.indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0 -10px 0 0 #fff;
}

.indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0 -10px 0 0 #fff;
}

@media(max-width: 991px) {
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
        width: 100%;
        display: flex;
        justify-content: start;
        gap: 7.5px;
    }

}

@media (max-width:740px) {
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

@media (max-width:380px) {
    #header {
        font-family: 'Raleway', sans-serif;
        line-height: 1.5;
        font-weight: 400;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 99;
        padding: 8px;
    }

    .header-main {
        background-color: var(--bright-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        border-radius: 4px;
    }

    #logo {
        padding-top: 10px;
        text-decoration: none;
        color: var(--dark-color);
    }

    #logo h1 {
        font-size: 3.5vh;
    }

    .titulo {
        display: flex;
        align-items: center;
    }

    .container {
        max-width: 100%;
        margin: 0;
    }
}

.fixed-container {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 100;
    transition: all .5s ease-in;
}

.fixed-container.show {
    display: block;
}

.nav-button {
    background-color: #e7e7e7;
    color: #0D0D0D;
    border: none;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    font-size: 0.75em;
    font-weight: 500;
}

.nav-button:hover {
    background-color: #d1d1d1;
    color: #fff;
}
</style>
