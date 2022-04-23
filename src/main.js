import { createApp } from 'vue'
import App from './App.vue'
import DbMaterial from 'db-material-vue3'

// import 'db-material-vue3/dist/db-material-vue3.css'

const app = createApp(App)
app.use(DbMaterial) 
app.mount('#app')