<template>
<div class="layout">
    <Layout>
        <Header>
            <ul>
                <li>首页</li>
                <li>关于我们</li>
                <li>产品中心</li>
            </ul>
        </Header>
    </Layout>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {

  },
  methods: {

  }
}
</script>
<style scoped lang='less'>
li{
    list-style: none;
    float: left;
    padding: 0px 30px;
    color: #fff;
    box-sizing: border-box;
}
ul{
   width: 500px;
    height: 64px;
    line-height: 64px;
    margin: 0 auto;
}
</style>
