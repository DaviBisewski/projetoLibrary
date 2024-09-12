import { createRouter, createWebHistory } from 'vue-router';
import SistemaLogin from '../views/SistemaLogin.vue';
import FamiliaView from '../views/FamiliaView.vue';
import EmprestimosView from '../views/EmprestimosView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
    // Página de login
    { path: '/', name: 'Login', component: SistemaLogin },
    
    // Página principal (HomeView) após o login
    { path: '/home', name: 'Home', component: HomeView },
    
    // Outras páginas
    { path: '/familia', name: 'Familia', component: FamiliaView },
    { path: '/emprestimos', name: 'Emprestimos', component: EmprestimosView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
