<template>
  <div class="row">
    <div class="card">
      <div class="card-content cl-effect-2">
        <div v-if="showComponent">
          <div v-on:click="collapseCard" class="collapse">
            <i class="fa fa-2x fa-minus-square" aria-hidden="true"></i>
            <span class="collapse-label">Collapse</span>
          </div>
          <component :is="view"></component>
          <div v-on:click="collapseCard" class="collapse">
            <i class="fa fa-2x fa-minus-square" aria-hidden="true"></i>
            <span class="collapse-label">Collapse</span>
          </div>
        </div>
        <div v-on:click="expandCard" class="expand" v-else>
          <i class="fa fa-2x fa-plus-square-o" aria-hidden="true"></i>
          <span :data-hover="title" class="week">{{title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from './router';

function scrollToElement(element) {
  var el = document.getElementById(element);
  el.scrollIntoView();
}

export default {
  name: 'markdown-card',
  props: ['card', 'rootRoute'],
  mounted() {
    if (parseInt(this.$route.params.id) === this.card.week) {
      scrollToElement(this.card.component.name);
    }
  },
  data() {
    return {
      title: 'Week ' + this.card.week + ' - ' + this.card.description,
      showComponent: parseInt(this.$route.params.id) === this.card.week,
      view: this.card.component
    }
  },
  methods: {
    expandCard: function() {
      router.push(this.rootRoute + '/' + this.card.week);
      this.showComponent = true;
    },
    collapseCard: function() {
      router.push(this.rootRoute);
      this.showComponent = false;
    }
  }
}
</script>

<style scoped>
.fa {
  position: relative;
  top: 3px;
  cursor: pointer;
}
.expand .fa {
  transition: all 0.4s;
}
.expand {
  cursor: pointer;
}
.expand:hover .fa {
  transform: scale(1.3);
}
.collapse {
  cursor: pointer;
  padding: 8px;
  border-radius: 2px;
}
.collapse:hover {
  background: #eee;
}
.collapse-label {
  margin-left: 12px;
  font-size: 2rem;
  text-transform: uppercase;
}
.week {
  margin-left: 12px;
  font-size: 2.5rem;
}
.cl-effect-2 .expand {
  line-height: 44px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
}

.cl-effect-2 .expand span {
  position: relative;
  display: inline-block;
  padding: 0 14px;
  background: white; 
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.cl-effect-2 .expand span::before {
  position: absolute;
  top: 100%;
  /*left: 0;*/
  width: 100%;
  height: 100%;
  background: #eee;
  content: attr(data-hover);
  -webkit-transition: background 0.3s;
  -moz-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  transform-origin: 50% 0;
}

.cl-effect-2 .expand:hover span,
.cl-effect-2 .expand:focus span {
  -webkit-transform: rotateX(90deg) translateY(-22px);
  -moz-transform: rotateX(90deg) translateY(-22px);
  transform: rotateX(90deg) translateY(-22px);
}

.cl-effect-2 .expand:hover span::before,
.cl-effect-2 .expand:focus span::before {
  background: white;  
}
</style>