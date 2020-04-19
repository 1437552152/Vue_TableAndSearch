<template>
<div style="width:1200px;margin:0 auto">
<Tabs type="card" @on-click="tabsChange">
      <TabPane label="表格1" name="1">
        <TableAndSearch :columns="columns"  :search="search"  url="/user/news/list" :filter="filter"  v-if="type==1"/>
        <Button type="primary" @click="select">Primary</Button>
      </TabPane>
     <!--  <TabPane label="表格2" name="2">
        <TableAndSearch  :columns="columns1"  url="/user/liuyan/list" :filter="filter"  v-if="type==2"/>
      </TabPane> -->
      <TabPane label="表格3" name="3">
        <TableAndSearch  :columns="columns1"  url="/user/news/list"  :filter="filter1" v-if="type==3"/>
      </TabPane>
</Tabs>
    </div>
</template>
<script>
import TableAndSearch from '@/components/table'
import DeleteBtn from '@/components/DeleteBtn'
export default {
  components: { TableAndSearch, DeleteBtn },
  data() {
    return {
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '作者',
          key: 'author'
        },
        {
          title: '问题',
          key: 'title'
        },
        {
          title: '时间',
          key: 'time'
        },
        {
          title: '浏览人数',
          key: 'view',
          render: (h, params) => {
            return h(DeleteBtn, {
              props: {
                type1: this.type1
              },
              on: {
                'sure': () => {
                  alert('1')
                }
              }
            })
          } }
      ],
      type1: 'icon',
      currentChoose: '',
      columns: [
        {
          title: '选择',
          key: 'id',
          width: 70,
          align: 'center',
          render: (h, params) => {
            const id = params.row.Id
            let flag = false
            if (this.currentChoose === id) {
              flag = true
            } else {
              flag = false
            }
            const self = this
            return h('div', [
              h('Radio', {
                props: {
                  value: flag
                },
                on: {
                  'on-change': () => {
                    self.currentChoose = id
                  }
                }
              })
            ])
          }
        },
        {
          title: '说明',
          key: 'article'
        },
        /*  {
          title: '内容',
          key: 'content'
        }, */
        {
          title: '姓名',
          key: 'username'
        }
      ],
      filter: {
        Id: 22
      },
      filter1: {
        xx: 2,
        Id: 22
      },
      type: '1',
      search: {
        items: [
          { type: 'input', label: '输入框', name: '', key: 'username', placeholder: '请输入姓名', Col: 6 },
          { type: 'select', label: '下拉框', name: '', placeholder: '请选择', option: [{ value: '1', id: 1 }, { value: '2', id: 2 }, { value: '3', id: 3 }], Col: 6 },
          { type: 'date', label: '日期框', name: '', placeholder: 'YY-MM-DD', Col: 6 },
          { type: 'time', label: '时间框', name: '', placeholder: 'hh-mm-ss', Col: 6 },
          { type: 'radio', label: '单选框', name: '', Col: 6, option: [{ value: '单选1', id: 1 }, { value: '单选2', id: 2 }, { value: '单选3', id: 3 }] },
          { type: 'checkbox', label: '多选框', name: [], Col: 6, option: [{ value: '1', id: 1 }, { value: '2', id: 2 }, { value: '3', id: 3 }] },
          { type: 'textarea', label: '文本框', name: '', Col: 6, placeholder: '请输入...' }
        ]
      }
    }
  },
  created() {

  },
  methods: {
    tabsChange(key) {
      this.type = key
    },
    select() {
      console.log(this.$store.state.selectdata)
    },
    sure() {
      alert('222')
    }
  }
}
</script>
<style scoped lang='less'>

</style>

