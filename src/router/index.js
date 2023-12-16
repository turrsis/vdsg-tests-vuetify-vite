// Composables
import { createRouter, createWebHistory } from 'vue-router';
import testsRoutes from '../../.designer-tests/routes.js';
const routes = [{
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [{
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    }]
}].concat(testsRoutes);
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;