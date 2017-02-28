<template>
  <div>
    <h2>Lecture Takeaways</h2>
    <p>Highlighting things from lectures + additional notes and examples.</p>
    <markdown-card
      v-for="card in cards"
      :card="card"
      :rootRoute="rootRoute">
    </markdown-card>
  </div>
</template>

<script>
import MarkdownCard from '../MarkdownCard.vue';
import week2 from './week2.vue';
// Import new weeks here

export default {
  name: 'lecture',
  components: {
    MarkdownCard
  },
  data() {
    return {
      rootRoute: '/lec',
      cards: [
        { week: 2, description: 'Linked Lists, Arrays', component: week2},
        // and here
      ]
    }
  }
}
</script>