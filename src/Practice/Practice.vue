<template>
  <div>
    <h2>Practice Problems</h2>
    <p>Warmups problems to exam-level stuff. I'm just using approximate week numbers to make programming this page easier.</p>

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
import regex from './regex.vue';
import dsd from './dsd.vue';
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
        { week: 10, description: 'Regular Expressions', component: regex },
        { week: 11, description: 'Applying Data Structures', component: dsd },
        // and here
      ]
    }
  }
}
</script>

<style>
button.button-soln {
  width: 100%;
}
</style>