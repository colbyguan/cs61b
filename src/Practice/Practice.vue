<template>
  <div>
    <h2>Practice Problems</h2>
    <p>Warmups problems to exam-level stuff</p>
    <markdown-card
      v-for="card in cards"
      :card="card"
      :rootRoute="rootRoute">
    </markdown-card>
  </div>
</template>

<script>
import MarkdownCard from '../MarkdownCard.vue';
import hof from './hof.vue';
// Import new weeks here

export default {
  name: 'practice',
  components: {
    MarkdownCard
  },
  data() {
    return {
      rootRoute: '/prac',
      cards: [
        { week: 5, description: 'Higher-Order Functions', component: hof },
        // and here
      ]
    }
  }
}
</script>