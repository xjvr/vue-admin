import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import app from './modules/app'
import user from './modules/user'
import settings from './modules/settings'
import permission from './modules/permission'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)

// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

Vue.use(Vuex)
// 创建store
const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    user,
    permission,
    settings
  },
  getters
})
export default store
