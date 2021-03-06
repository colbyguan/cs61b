<template>
  <div id="app">
    <div class="container">
      <section class="header">
        <h2 v-on:click="goHome" class="title">Colby's CS 61B Materials</h2>
      </section>
      <div class="spacer">
        <i v-on:click="showPages = !showPages; showBlurb = false" class="fa fa-2x fa-th" aria-hidden="true">
          <span class="tooltip">Menu</span>
        </i>
        <i v-on:click="showBlurb = !showBlurb; showPages = false" class="fa fa-2x fa-question" aria-hidden="true">
          <span class="tooltip">About</span>
        </i>
        <a href="http://bit.do/colby-feedback"><i class="fa fa-2x fa-commenting" aria-hidden="true">
          <span class="tooltip">Feedback</span>
        </i></a>
      </div>
      <div v-if="showPages" style="text-align: center">Last updated with <a href="#" v-on:click.stop.prevent="goToUpdated">solutions to asymptotic analysis practice</a></div>
      <transition name="slidedown">
        <div class="blurb" v-if="showBlurb">
          <div class="blurb-text">
            <p>(Spring 2017) This is a collection of materials I wrote up as an undergraduate student instructor for UC Berkeley's Data Structures and Algorithms course, CS 61B</p>
            <div class="row">
              <div class="spacer">
            </div>
          </div>
        </div>
      </transition>
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
  mounted() {
    if (this.$route.path.length === 1) {
      this.showPages = true;
    }
  },
  data () {
    return {
      showBlurb: false,
      showPages: this.$route.path.length === 1,
      pages: [
        { title: 'Post-Discussion Notes', description: 'Things I didn\'t get to in discussion, or wanted to highlight', color: 'red', route: 'dis', enabled: true },
        { title: 'Lecture Takeaways', description: 'Highlighting things from lectures + additional notes and examples', color: 'red', route: 'lec', enabled: true},
        { title: 'Practice Problems', description: 'Warmups problems to exam-level stuff', color: 'blue', route: 'prac', enabled: true},
        { title: 'Quick Reference', description: 'Cheat sheets for: Git, Intellij, ...', color: 'yellow', route: 'qr', enabled: true },
        { title: 'Data Structure Summaries', description: 'Checklist of data structures', color: 'red', enabled: false }
      ]
    }
  },
  methods: {
    showingPage: function() {
      this.showPages = false;
    },
    goHome: function() {
      this.showPages = true;
      this.showBlurb = false;
      router.push('/');
    },
    goToUpdated: function() {
      this.showPages = false;
      this.showBlurb = false;
      router.push('/prac/15');
    }
  }

};
</script>

<style>
.title {
  cursor: pointer;
}
.blurb-text {
  max-width: 600px;
  margin: 0 auto;
}
.blurb .q {
  margin-bottom: 0.8rem;
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
.spacer i .tooltip {
  width: 120px;
  background-color: transparent;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  /* Override font-awesome */
  font-size: 2rem;
  font-family: "Avenir", "Nunito", sans-serif;

  position: absolute;
  z-index: 1;
  width: 120px;
  bottom: 100%;
  left: 50%; 
  margin-left: -60px;
}
.spacer .fa {
  background-color: #f6f7fb;
  color: #aaa;
  margin: 15px 24px 0px;
  padding: 0 8px;
  cursor: pointer;
  position: relative;
}
.spacer .fa:hover {
  color: #444;
}
.six.columns:nth-child(odd) {
  margin-left: 0;
}
.slidedown-enter-active, .slidedown-leave-active {
  transform-origin: 0 -4rem;
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(.17,.67,.83,.67);
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
.bordered-code code {
  padding: .2rem .5rem;
  margin: 0 .2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 4px; 
}
.bordered-code pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre;
}
</style>
