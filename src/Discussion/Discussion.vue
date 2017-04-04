<template>
  <div>
    <h2>Post-Discussion Notes</h2>
    <p>Hints and notes for problems we didn't get to; Answers to questions I didn't address sufficiently.</p>
    <markdown-card
      v-for="card in cards"
      :card="card"
      :rootRoute="rootRoute">
    </markdown-card>
  </div>
</template>

<script>
import MarkdownCard from '../MarkdownCard.vue';
import discussion3 from './discussion3.vue';
import discussion7 from './discussion7.vue';
import discussion11 from './discussion11.vue';
// Import new weeks here

export default {
  name: 'discussion',
  components: {
    MarkdownCard
  },
  data() {
    return {
      rootRoute: '/dis',
      cards: [
        { week: 3, description: 'Linked Lists, Arrays, Generics', component: discussion3 },
        { week: 7, description: 'Runtime Analysis Detailed Solutions', component: discussion7 },
        { week: 11, description: 'Regex Summary', component: discussion11 },
        // and here
      ]
    }
  }
}
</script>