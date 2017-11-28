<template>
    <div class="testStylus">
        <div class="message">Value is : {{ count2 }}</div>
        <a href="#" @click.prevent="increment">Increment</a>
    </div>
    </template>
<script>
    import Vue from 'vue/dist/vue.js'
    console.log(process.env);
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

<style lang="stylus">
    .testStylus
        color red
</style>