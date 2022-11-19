import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createPinia } from 'pinia'

import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App).use(Quasar, quasarUserOptions).use(createPinia()).use(VueSmoothScroll).mount('#app')
