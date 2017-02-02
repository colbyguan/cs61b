<template>
  <div class="row">
    <div class="card">
      <div class="card-content">
        <div v-on:click="openModal" class="qr-header row">
          <div :style="background" class="bg">
            <div class="overlay"></div>
          </div>
          <div class="qr-title">
            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
            {{card.title}}
            <div class="line"></div>
          </div>
        </div>
        <div v-on:click="closeModal" v-if="showModal" class="modal-overlay" id="modal-overlay"></div>
        <div v-if="showModal" class="modal" id="modal">
          <div class="modal-guts">
            <div class="modal-content">
              <component :is="view"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'quick-reference-card',
  props: ['card'],
  mounted() {
    if (this.$route.params.id === this.card.route) {
      this.showModal = true;
    }
  },
  data() {
    return {
      showModal: false,
      view: this.card.component,
      background: 'background: url(' + this.card.img + ') center / 200px repeat fixed'
    }
  },
  methods: {
    openModal: function() {
      this.showModal = true;
      router.push('/qr/' + this.card.route);
    },
    closeModal: function() {
      this.showModal = false;
      router.push('/qr')  ;
    }
  }
}
</script>

<style>
.bg {
  position: relative;
  height: 75px;
  border-radius: 2px 2px 0 0 ;
}
.overlay {
  transition: all 0.4s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.7);
  opacity: 0.6;
}
.line {
  opacity: 0;
  position: absolute;
  top: 64px;
  left: 47px;
  height: 6px;
  width: 100px;
  background-color: white;
  transition: all 0.4s;
}
.qr-title {
  position: absolute;
  top: 40px;
  margin-left: 12px;
  text-transform: uppercase;
  color: white;
  font-size: 4rem;
  letter-spacing: 0.2rem;
  font-weight: 700;
  transition: all 0.4s;
}
.qr-header {
  cursor: pointer;
}
.qr-header:hover .qr-title {
  transform: translateY(-10px);
}
.qr-header:hover .overlay {
  background-color: transparent;
}
.qr-header:hover .line {
  transform: translateY(-10px);
  opacity: 1;
}
.qr-title .fa {
  position: relative;
  top: 1px;
}
code {
  padding: .2rem .5rem;
  margin: 0 .2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 4px; 
}
pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre;
}
.modal {
  display: block;
  width: 950px;
  max-width: 100%;
  height: 700px;
  max-height: 100%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* If known, negative margins are probably better (less chance of blurry text). */
  /* margin: -200px 0 0 -200px; */
  background: white;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
}
.closed {
  display: none;
}
.modal-overlay {
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  transition: all 0.4s;

  background: rgba(0, 0, 0, 0.6);
}
.modal-overlay:hover {
  background: rgba(0, 0, 0, 0.4);
}
.modal-guts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.modal-content {
  padding: 30px 40px;
}
</style>