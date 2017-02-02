<template>
  <div>
    <h2>Quick References</h2>
    <quick-reference-card
      v-for="card in cards"
      :card="card">
    </quick-reference-card>
  </div>
</template>

<script>
import QuickReferenceCard from './QuickReferenceCard.vue';
import intellij from './intellij.vue';
import git from './git.vue';

export default {
  name: 'quick-reference',
  components: {
    QuickReferenceCard
  },
  data() {
    return {
      cards: [
        {title: 'Git', img: 'static/img/git.png', component: git, route: 'git' },
        { title: 'Intellij', img: 'static/img/intellij.png', component: intellij, route: 'intellij' }
      ]
    }
  }
}
</script>