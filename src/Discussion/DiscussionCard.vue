<template>
  <div class="row">
    <div class="card">
      <div class="card-content">
        <div v-if="showComponent">
          <i v-on:click="showComponent = false" class="fa fa-2x fa-minus-square" aria-hidden="true"></i>
          <span class="collapse">Collapse</span>
          <component :is="view"></component>
          <i v-on:click="showComponent = false" class="fa fa-2x fa-minus-square" aria-hidden="true"></i>
          <span class="collapse">Collapse</span>
        </div>
        <div v-else>
          <i v-on:click="showComponent = true" class="fa fa-2x fa-plus-square-o" aria-hidden="true"></i>
          <span class="week">Week {{card.week}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'discussion-card',
  props: ['card'],
  data() {
    return {
      showComponent: false,
      view: this.card.component
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
.collapse {
  margin-left: 12px;
  font-size: 2rem;
  text-transform: uppercase;
}
.week {
  margin-left: 12px;
  font-size: 2.5rem;
}
</style>