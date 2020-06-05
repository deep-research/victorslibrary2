// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import 'a17t'
require('typeface-merienda-one')
require('typeface-gilda-display')
require('typeface-merriweather')
require('typeface-amiko')
require('typeface-lato')
// Stop All Vue Warnings:
// Vue.config.silent = true

Vue.component('VueMarkdown', VueMarkdown);

new Vue({
  components: {
    VueMarkdown
  }
})

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
