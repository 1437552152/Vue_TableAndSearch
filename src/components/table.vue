<template>
<div>
     <Form v-if="search" :label-width="80" ref="search" :model="search">
         <div  v-for="(item,index) in search.items" :key="index">
            <FormItem  :label="item.label"  :prop="'items.' + index + '.name'" v-if="item.type==='input'" :rules="{required: true, message: '该字段必填', trigger: 'blur'}">
              <Input  v-model="item.name" :placeholder="item.placeholder" />
            </FormItem>

              <FormItem :label="item.label" :prop="'items.' + index + '.name'"  v-if="item.type==='select'">
                  <Select  v-model="item.name" >
                      <Option :value="i.id" v-for="i in item.option" :key="i.id" >{{i.value}}</Option>
                    </Select>
            </FormItem>

              <FormItem :label="item.label"  :prop="'items.' + index + '.name'" v-if="item.type==='date'">
                   <DatePicker  v-model="item.name" ></DatePicker>
            </FormItem>

            <FormItem :label="item.label"  :prop="'items.' + index + '.name'" v-if="item.type==='time'">
              <TimePicker  v-model="item.name" ></TimePicker>
            </FormItem>

              <FormItem :label="item.label"  :prop="'items.' + index + '.name'" v-if="item.type==='radio'">
                <RadioGroup   v-model="item.name" >
                      <Radio v-for="i in item.option" :label="i.value" :key="i.id">{{i.value}}</Radio>
                    </RadioGroup>
              </FormItem>

              <FormItem :label="item.label"  :prop="'items.' + index + '.name'" v-if="item.type==='checkbox'">
                  <CheckboxGroup   v-model="item.name" >
                      <Checkbox v-for="i in item.option" :label="i.value" :key="i.id"></Checkbox>
                  </CheckboxGroup>
              </FormItem>

              <FormItem :label="item.label"  :prop="'items.' + index + '.name'" v-if="item.type==='textarea'">
                  <Input  v-model="item.name" :autosize="{minRows: 2,maxRows: 5}" :placeholder="item.placeholder"/>
              </FormItem>
         </div>

              <Button type="primary" @click="handleSubmit('search')">Submit</Button>
              <Button @click="handleReset('search')" style="margin-left: 8px">Reset</Button>
     </Form>
     <DeleteBtn :type1="type1" @sure="sure"></DeleteBtn>
     <Table :columns="columns" :data="data" border  @on-selection-change="selectionChange"></Table>
     <Page :total="total" :current="current"  size="small"  @on-change="changePage" show-total />
    </div>
</template>
<script>
import DeleteBtn from '@/components/DeleteBtn'
export default {
  components: { DeleteBtn },
  props: {
    columns: {
      type: Array
    },
    url: {
      type: String
    },
    filter: {
      type: Object,
      require: false,
      default: () => {}
    },
    search: {
      type: Object,
      require: false
    }
  },
  data() {
    return {
      type1: 'btn'
    }
  },
  computed: {
    'data': function() {
      return this.$store.state.dataSource
    },
    'total': function() {
      return this.$store.state.total
    },
    'current': function() {
      return this.$store.state.current
    }
  },
  created() {
    this.getData()
  },
  methods: {
    changePage(page) {
      this.$store.commit('ChangeCurrent', page)
      this.getData()
    },
    getData() {
      this.$store.dispatch('getGeneAction', { url: this.url, filter: this.filter })
    },
    selectionChange(data) {
      this.$store.commit('selectionChange', data)
    },
    sure() {
      console.log(this.$store.state.selectdata)
      /*   this.$store.dispatch('getdeleteAction', { url: this.deleteBtn, Object.assign({},{ids:arr},{})    filter: this.filter }) */
    },
    /* 表單的提交 */
    handleSubmit(name) {
      debugger
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.search)
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
<style scoped lang='less'>

</style>
