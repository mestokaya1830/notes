import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import MsgComponent from './components/MsgComponent.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('msg-component', MsgComponent)

app.mount('#app')
