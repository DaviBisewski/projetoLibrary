<template>
    <div class="fundo">
    <section class="emprestimos">
        <h1 class="titulo">Meus Empréstimos</h1>
        <div class="lista-emprestimos">
            <div class="emprestimo" v-for="(livro, index) in emprestimos" :key="index">
                <div class="info-livro">
                    <h2>{{ livro.nome }}</h2>
                    <p>Data de devolução: {{ livro.dataDevolucao }}</p>
                    <p>Status: <span :class="livro.status === 'Emprestado' ? 'emprestado' : 'devolvido'">{{ livro.status
                            }}</span></p>
                </div>
                <div v-if="livro.status === 'Emprestado'" class="acoes">
                    <button @click="abrirRenovacao(livro)">Renovar Empréstimo</button>
                </div>
            </div>
        </div>
        <RenovacaoComponent v-if="mostrarRenovacao" :livro="livroSelecionado" @fechar="fecharRenovacao" />
    </section>
    </div>
</template>

<script>
import RenovacaoComponent from '../components/RenovacaoComponent.vue';

export default {
    name: 'EmprestimosView',
    components: {
        RenovacaoComponent
    },
    data() {
        return {
            emprestimos: [
                { nome: 'Livro A', dataDevolucao: '2024-09-05', status: 'Emprestado' },
                { nome: 'Livro B', dataDevolucao: '2024-07-15', status: 'Devolvido' },
                { nome: 'Livro C', dataDevolucao: '2024-08-01', status: 'Devolvido' },
                { nome: 'Livro D', dataDevolucao: '2024-08-15', status: 'Devolvido' },
                { nome: 'Livro E', dataDevolucao: '2024-08-25', status: 'Devolvido' },
            ],
            mostrarRenovacao: false,
            livroSelecionado: null,
        };
    },
    methods: {
        abrirRenovacao(livro) {
            this.livroSelecionado = livro;
            this.mostrarRenovacao = true;
        },
        fecharRenovacao() {
            this.mostrarRenovacao = false;
            this.livroSelecionado = null;
        }
    }
}
</script>

<style scoped>
.titulo{
align-items: center;
text-align: center;
padding: 20px;
}

.fundo{
    width: 100%;
    margin-top: 10px;
    background-color: #f6f7fb;
}
.emprestimos {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.lista-emprestimos {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.emprestimo {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
}

.info-livro h2 {
    margin: 0;
    font-size: 1.2em;
}

.info-livro p {
    margin: 5px 0;
}

.emprestado {
    color: #e91e63;
    font-weight: bold;
}

.devolvido {
    color: #4caf50;
    font-weight: bold;
}

.acoes {
    margin-top: 10px;
}

.acoes button {
    padding: 8px 12px;
    background: rgb(70,93,219);
background: linear-gradient(90deg, rgba(70,93,219,1) 0%, rgba(93,110,201,1) 50%, rgba(70,93,219,1) 100%);
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}

.acoes button:hover {
    background-color: #e9487d;;
}
</style>