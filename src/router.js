import Vue from 'vue';
import Router from 'vue-router';
import ga from 'vue-ga';
import QuickReference from './QuickReference/QuickReference.vue';
import Lecture from './Lecture/Lecture.vue';
import Discussion from './Discussion/Discussion.vue';
import Practice from './Practice/Practice.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', component: null },
    { path: '/dis', component: Discussion },
    { path: '/dis/:id', component: Discussion },
    { path: '/qr', component: QuickReference },
    { path: '/qr/:id', component: QuickReference },
    { path: '/lec', component: Lecture },
    { path: '/lec/:id', component: Lecture },
    { path: '/prac', component: Practice },
    { path: '/prac/:id', component: Practice }
  ]
});
ga(router, 'UA-91367213-1');

export default router;
