import Vue from 'vue'
import Hello from './components/firstVueComponent.vue';
new Vue({
    el: "#app",
    components: {hello: Hello},
    data: {
        message: "Hello Vue"
    }
})