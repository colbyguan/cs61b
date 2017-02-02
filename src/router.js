import Vue from 'vue';
import Router from 'vue-router';
import QuickReference from './QuickReference/QuickReference.vue';
import Lecture from './Lecture/Lecture.vue';
import Discussion from './Discussion/Discussion.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: null },
    { path: '/dis', component: Discussion },
    { path: '/dis/:id', component: Discussion },
    { path: '/qr', component: QuickReference },
    { path: '/qr/:id', component: QuickReference },
    { path: '/lec', component: Lecture },
    { path: '/lec/:id', component: Lecture }
  ]
});
