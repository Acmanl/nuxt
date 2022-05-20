import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

app.config.globalProperties.$message = ElMessage
// const {proxy}: any = getCurrentInstance()
// proxy.$message({
//   message: h('p', null, [
//     h('span', null, 'Message can be '),
//     h('i', { style: 'color: teal' }, 'VNode'),
//   ]),
// })

app.use(router)
app.use(ElementPlus)

app.mount('#app')
