<template>
  <div class="overlay" :class="{ 'show': modalOpened }">

    <div class="modal-content-container">
      <button type="button" class="close-btn" @click="closeModal">
        <IconCloseBtn />
      </button>
      <slot name="modal-content"></slot>
    </div>

  </div>
</template>

<script>
import IconCloseBtn from '@/components/icons/IconCloseBtn.vue';

export default {
  components: { IconCloseBtn },
  props: {
    modalOpened: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close-modal"],

  methods: {
    closeModal() {

      this.$emit('close-modal');
    }
  }

}
</script>

<style lang="scss" scoped>
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  background-color: rgba(35, 46, 60, 0.5);
  opacity: 0;
  visibility: hidden;
  backdrop-filter: blur(3px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  z-index: 9999;

  &.show {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    visibility: visible;
  }
}

.modal-content-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 88%;
  max-width: 402px;
  transform: translate(-50%, -50%);
  background-color: #16202F;
  border-radius: 10px;
  padding: 54px 20px 20px;
}

.close-btn {
  position: absolute;
  margin: 0;
  padding: 0;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  border: 0;
}
</style>
