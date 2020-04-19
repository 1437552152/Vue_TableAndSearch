<template>
<div>
    <Modal
        v-model="modal"
        :title="title"
        footer-hide>
        <slot></slot>
    </Modal>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    modal: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data() {
    return {
    }
  },
  created() {

  },
  methods: {
    ok() {
      console.log(this)
    },
    cancel() {}
  }
}
</script>
<style scoped lang='less'>

</style>
