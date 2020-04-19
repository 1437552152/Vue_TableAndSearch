<template>
<div class="w1200">
                <FormItem :label="item.label" :prop="item.name" :rules="{required: true, message: '哈哈', trigger: 'blur'}">
                    <!-- 输入框 -->
                    <Input v-if="item.type==='input'" v-model="item.name" :placeholder="item.placeholder" @change="xxxx()"/>
                    <!-- 下拉框 -->
                    <Select  v-if="item.type==='select'" v-model="item.name" @change="xxxx()">
                      <Option :value="i.value" v-for="i in item.option" :key="i.value" >{{i.value}}</Option>
                    </Select>
                    <!-- 日期框 -->
                    <DatePicker v-if="item.type==='date'" v-model="item.name" @change="xxxx()"></DatePicker>
                    <!-- 时间框 -->
                    <TimePicker v-if="item.type==='time'" v-model="item.name" @change="xxxx()"></TimePicker>
                    <!-- 单选框 -->
                    <RadioGroup  v-if="item.type==='radio'" v-model="item.name" @change="xxxx()">
                      <Radio v-for="i in item.option" :label="i.value" :key="i.value">{{i.value}}</Radio>
                    </RadioGroup>
                    <!-- 多选框 -->
                    <CheckboxGroup  v-if="item.type==='checkbox'" v-model="item.name" @change="xxxx()">
                      <Checkbox v-for="i in item.option" :label="i.value" :key="i.value">{{i.value}}</Checkbox>
                    </CheckboxGroup>
                     <!-- 文本框 -->
                     <Input @change="xxxx()" v-if="item.type==='textarea'" v-model="item.name" :autosize="{minRows: 2,maxRows: 5}" :placeholder="item.placeholder"/>
                </FormItem>
</div>
</template>
<script>
export default{
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  created() {

  },
  methods: {
    xxxx(e) {
      console.log(e)
      debugger
    }
  }}
</script>
