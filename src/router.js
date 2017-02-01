import Vue from 'vue';
import Router from 'vue-router';
import QuickReference from './QuickReference/QuickReference.vue';
import Discussion from './Discussion/Discussion.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: null },
    { path: '/discussion', component: Discussion },
    { path: '/quickreference', component: QuickReference }
  ]
});
