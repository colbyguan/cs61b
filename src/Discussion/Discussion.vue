<template>
  <div>
    <h2>Post-Discussion Notes</h2>
    <discussion-card
      v-for="card in cards"
      :card="card">
    </discussion-card>
  </div>
</template>

<script>
import DiscussionCard from './DiscussionCard.vue';
import discussion3 from './discussion3.vue';
import discussion4 from './discussion4.vue';
// Import new weeks here

export default {
  name: 'discussion',
  components: {
    DiscussionCard,
  },
  data() {
    return {
      cards: [
        { week: 3, component: discussion3 },
        { week: 4, component: discussion4 }
        // and here
      ]
    }
  }
}
</script>