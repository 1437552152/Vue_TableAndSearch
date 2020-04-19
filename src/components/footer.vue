<template>
<div class="footer">
    <p>{{mes}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      mes: '武汉软件新城'
    }
  },
  created() {

  },
  methods: {

  }
}
</script>
<style scoped lang='less'>
.footer{
    color: #f00;
    p{
        position:fixed;
        bottom: 0px;
        width: 100%;
        height: 64px;
        line-height: 64px;
        text-align: center;
        background: #ccc
    }
}
</style>
