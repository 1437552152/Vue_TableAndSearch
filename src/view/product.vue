<template>
<div>
    <Button type="primary" @click="onChange">产品中心</Button>
     <Table border :columns="columns1" :data="productList">
        <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </Table>

     <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="username" label="username">
            <Input v-model="formInline.username" placeholder="username"/>
        </FormItem>
        <FormItem prop="phone" label="phone">
            <Input v-model="formInline.phone" placeholder="phone"/>
        </FormItem>
        <FormItem prop="textarea" label="content">
            <Input v-model="formInline.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."/>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">submit</Button>
        </FormItem>
    </Form>

    <Modal
        v-model="modal"
        title="详情"
        @on-ok="ok"
        @on-cancel="cancel">

    </Modal>
    </div>
</template>
<script>
import { apiOne, apiTwo } from '@/util/api'
import { validatePhone } from '../common/vertify.js'
export default {
  data() {
    return {
      productList: [],
      columns1: [
        {
          title: 'username',
          key: 'username'
        },
        {
          title: 'phone',
          key: 'phone'
        },
        {
          title: 'content',
          key: 'content'
        }
      ],
      formInline: {
        user: '',
        password: '',
        textarea: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: validatePhone, message: '手机号码格式不正确', trigger: 'blur' }
        ]
      },
      modal: false
    }
  },
  created() {

  },
  methods: {
    onChange() {
      apiOne().then(res => {
        this.productList = res.data
      })
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          const params = {}
          params['username'] = this.formInline.username
          apiTwo(params).then(res => {
            this.$Message.success(res.msg)
          })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    show() {
      this.modal = true
    },
    ok() {
      this.$Message.info('Clicked ok')
    },
    cancel() {
      this.$Message.info('Clicked cancel')
    }

  }
}
</script>
<style scoped lang='less'>

</style>
