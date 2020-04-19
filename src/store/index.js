
import Vue from 'vue'
import Vuex from 'vuex'
import { tableList } from '@/util/api'
Vue.use(Vuex)

const state = {
  checkKey: [],
  current: 1,
  total: 0,
  pageSize: 10,
  dataSource: [],
  selectdata: []
}

const mutations = {
  GETGENEMUTATION(state, payload) {
    state.dataSource = payload.data
    state.total = payload.total
    state.current = payload.currentPage
  },
  ChangeCurrent(state, payload) {
    state.current = payload
  },
  selectionChange(state, payload) {
    state.selectdata = payload
  }
}
const actions = {
  getGeneAction(ctx, item) {
    tableList(item.url, Object.assign({}, item.filter, { pageNo: ctx.state.current, pageSize: ctx.state.pageSize })).then(res => {
      ctx.commit('GETGENEMUTATION', res)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
