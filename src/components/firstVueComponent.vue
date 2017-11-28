<template>
    <div class="testStylusB">
        <div class="message">Value is : {{ count2 }}</div>
        <a href="#" @click.prevent="increment">Increment</a>
    </div>
</template>
<script>
//    import Vue from 'vue/dist/vue.js'
//    console.log(process.env);
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

<!--<style lang="sass-loader">-->
   <!--@import "testStyles.scss";-->
    <!--div {-->
       <!--color: $colRed;-->
   <!--}-->
<!--</style>-->

<style lang="stylus-loader" scoped>
    @import 'test.styl';
    div
        color colorRD

</style>