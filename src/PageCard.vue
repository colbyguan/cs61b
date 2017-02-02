<template>
  <div class="six columns">
    <div v-on:click="renderPage" :class="{disabled: !page.enabled}" class="card">
      <div class="card-content">
        <div class="card-title">
          {{page.title}}
        </div>
        <p v-if="!page.enabled">( Under construction! )</p>
        <div class="card-line" :class="page.color"></div>
        <p>{{page.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from './router';

export default {
  name: 'page-card',
  props: ['page'],
  methods: {
    renderPage: function(event) {
      if (this.page.enabled) {
        router.push(this.page.route);
      }
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  min-height: 160px;
}
.card:hover {
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card.disabled {
  cursor: auto;
  opacity: 0.4;
}
.card.disabled:hover{
  box-shadow: none;
}
.card .card-content .card-title {
  display: block;
  line-height: 32px;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 500;
}
</style>
