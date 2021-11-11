import Vue from 'vue'
import QImageBox from 'quasar-ui-image-box'
import LazyLoadDirective from '../directives/LazyLoad'
import AutoplayObserver from '../directives/AutoplayObserver'

Vue.component('q-image-box', QImageBox)
Vue.directive('lazyload', LazyLoadDirective)
Vue.directive('autoplayObserver', AutoplayObserver)
