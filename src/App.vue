<template>
  <div id="app">
    <div class="container">
      <section class="header">
        <h2 v-on:click="goHome" class="title">Colby's CS 61B Materials</h2>
      </section>
      <div class="spacer">
        <i v-on:click="showPages = !showPages" class="fa fa-2x fa-th" aria-hidden="true"></i>
        <i class="fa fa-2x fa-question" aria-hidden="true"></i>
      </div>
      <transition name="slidedown">
        <div v-if="showPages" class="pages-menu">
          <div v-on:click="showingPage" class="row">
            <page-card
              v-for="page in pages"
              :page="page">
            </page-card>
          </div>
          <div class="row">
            <div class="spacer">
          </div>
        </div>
      </transition>
      <router-view></router-view>
    </div>
    <div class="footer-spacer"></div>
  </div>
</template>


<script>
import PageCard from './PageCard.vue';
import router from './router';

export default {
  name: 'app',
  components: {
    PageCard
  },
  data () {
    return {
      showPages: this.$route.path.length === 1,
      pages: [
        { title: 'Post-Discussion Notes', description: 'Things I didn\'t get to in discussion', color: 'red', route: 'discussion', enabled: true},
        { title: 'Lecture Takeaways', description: 'Summary of things derived in lecture. I use these as a basis for discussion mini-lectures', color: 'red', enabled: false },
        { title: 'Quick Reference', description: 'Pages you can keep open in the background when you do CS61B things', color: 'yellow', route: 'quickreference', enabled: false },
        { title: 'Data Structure Summaries', description: 'Checklist of data structures', color: 'blue', enabled: false }
      ]
    }
  },
  methods: {
    showingPage: function() {
      this.showPages = false;
    },
    goHome: function() {
      router.push('/');
      this.showPages = true;
    }
  }

};
</script>

<style>
.title {
  cursor: pointer;
}
.red {
  background-color: #FB617F;
}
.blue {
  background-color: #4680FF;
}
.yellow {
  background-color: #FEB64D;
}
body {
  background-color: #f6f7fb;
}
.header {
  margin-top: 14rem;
  text-align: center;
  margin-bottom: 6rem;
}
.spacer {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #dedede;
  text-align: center;
  margin-bottom: 6rem;
}
.spacer .fa {
  background-color: #f6f7fb;
  color: #aaa;
  margin: 15px 4px 0px;
  padding: 0 8px;
  cursor: pointer;
}
.six.columns:nth-child(odd) {
  margin-left: 0;
}
.slidedown-enter-active, .slidedown-leave-active {
  transform-origin: 0 -4rem;
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(.2,.38,.72,1.3);
}
.slidedown-enter, .slidedown-leave-to {
  transform: scaleY(0);
  opacity: 0;
}
.card {
  background-color: white;
  position: relative;
  margin: 2rem 0 2rem 0;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.card-line {
  height: 4px;
  width: 40px;
  margin: 8px 0px;
}
.card .card-content {
  padding: 24px;
  border-radius: 0 0 2px 2px;
}
.card .card-content > p {
  margin: 0;
}
.footer-spacer {
  width: 100%;
  height: 12rem;
}
</style>
