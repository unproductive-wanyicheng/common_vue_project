<template>
    <div class="attention-btn" @click='attention'>
        关注我们
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/style/base.scss';

    .attention-btn{
        width: px2em(372px);
        height: px2em(72px);
        text-align: center;
        line-height: px2em(72px);
        background: #4BBF22;
        @include font-dpr($bigger-font-size);
        color: #FFF;
        font-weight: 700;
        border-radius: px2em(10px);
    }

</style>

<script>
    export default{
        
        data() {
            return {

            }
        },
        methods: {
            attention: function(){
                this.$store.dispatch('showQrModal', true);
            }
        }
    }
</script>
