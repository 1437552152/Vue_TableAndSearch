<template>
<div>
  <Dialog :title="title" :modal="modal">
    <Form ref="form" :model="form" :label-width="labelWidth">
       <Row>
          <Col v-for="(item,index) in dataSource" :key="index"  :span="item.Col">
              <FormType :item="item" @activeChange="Child"/>
          </Col>
      </Row>
       <Button type="primary" @click="submitForm">立即创建</Button>
    </Form>
  </Dialog>
</div>
</template>
<script>
import FormType from '@/components/form'
import Dialog from '@/components/dialog'
export default{
  components: { FormType, Dialog },
  data() {
    return {
      form: {
        input: '',
        select: 1,
        date: '',
        time: '',
        radio: '',
        checkbox: '',
        textarea: ''
      },
      dataSource: [
        { type: 'input', label: '输入框', name: 'input', placeholder: '请输入姓名', Col: 24 },
        { type: 'select', label: '下拉框', name: 'select', placeholder: '请选择', option: [{ value: '1' }, { value: '2' }, { value: '3' }], Col: 24 },
        { type: 'date', label: '日期框', name: 'date', placeholder: 'YY-MM-DD', Col: 24 },
        { type: 'time', label: '时间框', name: 'time', placeholder: 'hh-mm-ss', Col: 24 },
        { type: 'radio', label: '单选框', name: 'radio', Col: 24, option: [{ value: '苹果' }, { value: '梨子' }, { value: '香蕉' }] },
        { type: 'checkbox', label: '多选框', name: 'checkbox', Col: 24, option: [{ value: '苹果' }, { value: '梨子' }, { value: '香蕉' }] },
        { type: 'textarea', label: '文本框', name: 'textarea', Col: 24, placeholder: '请输入...' }
      ],
      labelWidth: 100,
      title: '新增',
      modal: true
    }
  },
  created() {

  },
  methods: {
    Child(data) {
      console.log('1111', data)
    },
    submitForm() {
      console.log(this)
      /*  const that = this
      that.$refs[formName].validate((valid) => {
        if (valid) {
          debugger
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      }) */
    }
  }
}
</script>
