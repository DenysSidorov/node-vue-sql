<template>
    <div>
        <div class="message">Value is : {{ count2 }}</div>
        <a href="#" @click.prevent="increment">Increment</a>
    </div>
    </template>
<script>
    import Vue from 'vue/dist/vue.js'
    export default {
        data () {
            return {
                count2: 0
            }
        },
        methods: {
            increment () {
                this.count2++;
            }
        }
    }
</script>

<style>
</style>