<template>
    <div class="prize-detail-wrapper">
        <common-header :titleTxt='title' />
        <div class="prize-detail-container">
            <title-img type="prizeDetail" />
            <div class="prize-content-area">
                <div class="prize-img">
                    <img src="../assets/img/turnplate-img/sdfg@3x.png" alt="">
                    <div class="prize-shade">未兑奖</div>
                </div>
                <div class="prize-title oneline-ellipsis">地素新款时尚魅力波浪下摆宽松直筒连衣裙</div>
                <p class="prize-code">兑奖码：<span>12345689542</span></p>
                <p class="prize-time">兑奖日期：2017.06.22-2017.07.02</p>
                <p class="prize-explain">兑奖说明：兑奖说明兑奖说明兑奖说明兑奖说明兑奖说明兑奖说明
                兑奖说明兑奖说明兑奖说明兑奖说明兑奖说明</p>
            </div> 
        </div>
         <div class="attention-btn-area">
            <attention-btn />
        </div>

        <qr-code-modal v-if='isShowQr' />

    </div>
</template>

<style lang='scss' scoped>

    @import '../assets/style/base.scss';

    .prize-detail-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;

        .prize-detail-container{
            width: 100%;
            flex: 1;
            background: url('../assets/img/turnplate-img/bg2@2x.png') no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            -webkit-overflow-scrolling: touch;
            .title-img{
                flex: 0 0 auto;
            }
            .prize-content-area{
                width: 95%;
                height: 100%;
                background: #20AAF2;
                margin: px2em(50px) auto 0;
                border-radius: px2em(10px);
                padding: px2em(50px) px2em(25px) 0;
                overflow-y: scroll;
                -webkit-overflow-scrolling: touch;
                color: #fff;
                @include font-dpr($bigger-font-size);
                position: relative;
                .prize-img{
                    width: px2em(254px);
                    height: px2em(254px);
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    position: relative;
                    margin: 0 auto px2em(35px);
                    img{
                        width: px2em(254px);
                    }
                    .prize-shade{
                        width: 100%;
                        height: px2em(75px);
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        @include font-dpr($middle-font-size);
                        background: rgba(0, 0, 0, 0.5);
                    }
                }
                .prize-title{
                    width: 100%;
                    @include font-dpr($more-bigger-size);
                    font-weight: 700;
                    margin-bottom: px2em(30px);
                }
                p{
                    margin-bottom: px2em(5px);                   
                }
                .prize-code{
                    span{
                        font-weight: 700;
                    }
                }
                .prize-explain{
                    max-height: px2em(230px);
                    overflow-y: scroll;
                }
            }
        }
        .attention-btn-area{
            width: 100%;
            position: absolute;
            bottom: px2em(50px);
            left: 0;
            display: flex;
            justify-content: center;

        }
    }
    
</style>

<script>
    import CommonHeader from '../components/header';
    import TitleImg from '../components/title-img';
    import AttentionBtn from '../components/attention-btn';
    import QrCodeModal from '../components/qr-code-modal';
    import { mapGetters } from 'vuex';
   export default{
        computed: {
            ...mapGetters({
                isShowQr: 'getQrModal'
            })
        },
        data() {
            return {
                title: '奖品详情',
            }
        },
        components: {
            CommonHeader,
            TitleImg,
            AttentionBtn,
            QrCodeModal
        }
   }
</script>
