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
import discussion4 from './discussion4.vue';
// Import new weeks here

export default {
  name: 'discussion',
  components: {
    MarkdownCard
  },
  data() {
    return {
      rootRoute: '/dis/',
      cards: [
        { week: 3, description: 'Linked Lists, Arrays, Generics', component: discussion3 },
        { week: 4, description: 'Inheritance', component: discussion4 }
        // and here
      ]
    }
  }
}
</script>