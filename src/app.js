import Vue from 'vue'
import Hello from './components/firstVueComponent.vue';
new Vue({
    components: {hello: Hello},
    el: "#app",
})