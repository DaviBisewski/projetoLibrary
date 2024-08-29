
import { createRouter, createWebHistory } from 'vue-router';
import FamiliaView from '../views/FamiliaView.vue';
import EmprestimosView from '../views/EmprestimosView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/familia', component: FamiliaView },
    { path: '/emprestimos', component: EmprestimosView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
