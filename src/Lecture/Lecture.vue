<template>
  <div>
    <h2>Lecture Takeaways</h2>
    <p>I intend for these to be a more detailed version of the "summary slides" that would go at the end of each lecture. The label "Week 3" on a card means it summarizes the Wednesday and Friday lectures of that week, along with the Monday lecture of the following week (since my discussions are on Tuesday). The corresponding discussion that I would review the topics for Week X would be Discussion X+1. </p>
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