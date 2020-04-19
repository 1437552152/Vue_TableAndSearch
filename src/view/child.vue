<template>
<div>
    <span>{{messsss}}</span>
    <Button type="primary" @click="change">Primary</Button>
   <Button type="primary" @click="chang">Primary</Button>
   <Input v-model="value" placeholder="Enter something..." style="width: 300px" @on-change="chat"/>
</div>
</template>
<script>
export default{
  props: ['messsss'],
  data() {
    return {
      value: ''
    }
  },
  created() {

  },
  methods: {
    change() {
      this.$emit('chan', '11111')
    },
    chang() {
      this.$emit('cha', '11111')
    },
    chat() {
      this.$store.commit('add', this.value)
    }
  }
}
</script>
