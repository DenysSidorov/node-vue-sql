import Vue from './node_modules/vue/dist/vue.js'
import Hello from './components/firstVueComponent';
new Vue({
    components: {hello: Hello},
    el: "#app",
})