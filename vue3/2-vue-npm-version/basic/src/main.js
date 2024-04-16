import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Alert from './components/Alert.vue'
const app = createApp(App)

app.component('Alert', Alert)
app.use(router)
app.mount('#app')
