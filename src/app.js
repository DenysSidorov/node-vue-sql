// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import hello from './components/firstVueComponent.vue';
new Vue({
    el: "#app",
    // components: {hello: hello},
    render: h => h(hello),
    // data: {
    //     message: "Hello Vue"
    // }
})