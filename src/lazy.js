import Vue from 'vue'
import lazyload from 'vue-lazyload'

Vue.use(lazyload, {
  error: require('@/assets/images/loading.gif'),
  loading: require('@/assets/images/loading.gif')
})
