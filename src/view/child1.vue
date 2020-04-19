<template>
<div>
    <Button type="primary">Primary</Button>
   <Button type="primary">Primary</Button>
<span>{{chat11}}</span>
</div>
</template>
<script>
export default{
  data() {
    return {
    }
  },
  created() {
  },
  computed: {
    chat11() {
      return this.$store.state.pjtnews
    }
  },
  methods: {

  }
}
</script>
