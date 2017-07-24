<template>
    <div class="qr-code-modal">
        <div class="qr-code-modal-bg" @click='closeQrModal'></div>
        <div class="qr-code-container">
            <div class="qr-code-img"><img src="../assets/img/turnplate-img/code.png" alt=""></div>
            <div class="qr-code-txt">猫窝测试号</div>
            <div class="qr-code-explain">扫描二维码关注我们</div>
        </div>
        <div class="close-btn-img" @click='closeQrModal'><img src="../assets/img/turnplate-img/close@2x.png" alt=""></div>

    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/style/base.scss';
    .qr-code-modal{
         width: 100%;
        height: 100%;
        position:absolute;
        left: 0;
        top: 0;
        z-index: 8;
        .qr-code-modal-bg{
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        .qr-code-container{
            width: px2em(490px);
            height: px2em(550px);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: px2em(40px);
            .qr-code-img{
                width: px2em(312px);
                height: px2em(312px);
                margin-bottom: px2em(15px);
                img{
                    width: px2em(312px);
                    height: px2em(312px);
                }
            }
            .qr-code-txt{
                @include font-dpr($more-middle-size);
                color: #7D7D7D;
                margin-bottom: px2em(25px);
            }
            .qr-code-explain{
                @include font-dpr($bigger-font-size);

            }
        }
        .close-btn-img{
            width: px2em(75px);
            height: px2em(75px);
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
        }

    }
</style>

<script>
    export default{
        methods: {
            closeQrModal: function(){
                this.$store.dispatch('showQrModal', false);
            }
        }
    }
</script>
