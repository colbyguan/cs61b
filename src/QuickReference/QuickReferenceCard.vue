<template>
  <div class="row">
    <div class="card">
      <div class="card-content">
        <div class="qr-header row">
          <div :style="background" class="overlay"></div>
          <div class="qr-title">{{card.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quick-reference-card',
  props: ['card'],
  data() {
    return {
      background: 'background: linear-gradient(rgba(97,97,97, 0.45), rgba(97,97,97, 0.45)), url(' + this.card.img + ') center / 200px repeat fixed'
    }
  }
}
</script>

<style scoped>
.overlay {
  height: 50px;
  border-radius: 2px 2px 0 0 ;
}
.qr-title {
  position: absolute;
  top: 30px;
  left: 30px;
  color: white;
  font-size: 3rem;
  font-weight: 500;
}
</style>