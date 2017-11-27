import Vue from 'vue'
import hello from './components/firstVueComponent.vue';
new Vue({
    el: "#app",
    components: {hello: hello},
    // data: {
    //     message: "Hello Vue"
    // }
})