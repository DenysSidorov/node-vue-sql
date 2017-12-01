<template>
    <div class="testStylusB">
        <div class="message">Value is : {{ count2 }}</div>
        <a href="#" @click.prevent="increment">Increment</a>
    </div>
</template>
<script>
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

<!--<style lang="sass-loader" rel="stylesheet/scss" type="text/css">-->
   <!--@import "testStyles.scss";-->
    <!--div {-->
       <!--color: $colRed;-->
   <!--}-->
<!--</style>-->

<style lang="stylus-loader" scoped rel="stylesheet/stylus" type="text/css">
    @import 'test.styl';
    div
        color colorRD

</style>