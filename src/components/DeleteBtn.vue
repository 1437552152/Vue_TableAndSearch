<template>
<div>
    <div> <span style="color:#2d8cf0;cursor:pointer" v-if="type1==='text'" @click="click">删除</span><Button @click="click" v-if="type1==='btn'" type="primary">删除</Button><img style="width:40px;height:40px" src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3113358568,1391117958&fm=58" v-if="type1==='icon'" @click="click"/></div>
    <Modal
        v-model="modal"
        title="确定删除吗?"
        @on-ok="ok"
        @on-cancel="cancel">
        测试二次删除
    </Modal>
    </div>
</template>
<script>
export default {
  props: {
    type1: {
      type: String,
      require: false,
      default: 'btn'
    }
  },
  data() {
    return {
      modal: false
    }
  },
  created() {

  },
  methods: {
    click() {
      this.modal = true
    },
    ok() {
      this.$emit('sure')
    },
    cancel() {
      this.modal = false
    }
  }
}
</script>
<style scoped lang='less'>

</style>
