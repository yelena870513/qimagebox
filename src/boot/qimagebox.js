import Vue from 'vue'
import QImageBox from '../component/QImageBox'
import LazyLoadDirective from '../directives/LazyLoad'
import AutoplayObserver from '../directives/AutoplayObserver'

Vue.component('QImageBox', QImageBox)
Vue.directive('lazyload', LazyLoadDirective)
Vue.directive('autoplayObserver', AutoplayObserver)
