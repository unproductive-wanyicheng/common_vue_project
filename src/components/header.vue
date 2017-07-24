<template>
    
    <div class="common-header">
        <div @click='back'>
            <img class="back-btn-arrow" src="../assets/img/turnplate-img/lightgrey-arrow-normal@3x.png" alt="">
        </div>
        {{ titleTxt }}
    </div>

</template>

<style lang="scss" scoped>
    @import '../assets/style/base.scss';

    .common-header{
        width: 100%;
        height: px2em(100px);
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        @include font-dpr($bigger-font-size);

        .back-btn-arrow{
            width: px2em(40px);
            height: px2em(40px);
            transform: rotate(180deg);
            position: absolute;
            left: px2em(25px);
            top: px2em(30px);
        }
    }
</style>

<script>
    export default{
        name: 'header',
        props: {
            titleTxt: String,
        },
        methods: {
            back: function(){
                this.$router.go(-1);
            }
        }

    }
</script>
