<template>
    <div class="prize-modal" v-show="prizeType.isShow">
        <div class=" prize-modal-bg"></div>
        <!-- 一等奖  到店兑奖 -->
        <div class="prize-model-container" v-show="prizeType.isWin && prizeType.type === 'conversionGood' ">
            <div class="prize-title">在幸运大转盘中转到一等奖</div>
            <div class="prize-img"><img src="../assets/img/turnplate-img/sdfg@3x.png" alt=""></div>
            <div class="prize-info" style="text-overflow: ellipsis;">地素新款 波浪下摆提花宽松直筒短袖连衣裙地素新款 波浪下摆提花宽松直筒短袖连衣裙</div>
            <p class="prize-code claim-prize">兑奖码：<span>78965412587895</span></p>
            <p class="prize-time claim-prize">兑奖日期：2017.06.22-2017.07.02</p>
            <attention-btn  />
        </div>
        <!-- 二等奖 立即购买 -->
        <div class="prize-model-container" v-show="prizeType.isWin && prizeType.type === 'buyGood'">
            <div class="prize-title">在幸运大转盘中转到二等奖</div>
            <div class="prize-img"><img src="../assets/img/turnplate-img/sdfg@3x.png" alt=""></div>
            <div class="prize-info" style="text-overflow: ellipsis;">地素新款 波浪下摆提花宽松直筒短袖连衣裙地素新款 波浪下摆提花宽松直筒短袖连衣裙</div>
            <p class="prize-buy">
                惊喜价：<span class="now-price">&yen;69</span> <span class="old-price">&yen;129</span>
                <a href="#" class="buy-btn">立即购买</a>
            </p>
            <attention-btn  />
        </div>
        
        <!-- 三等奖 优惠券 -->
        <div class="prize-model-container" :class="prizeType.type === 'coupon' ? 'small-bg' : '' "
            v-if="prizeType.isWin && prizeType.type === 'coupon'">
            <div class="prize-title margin-top-50">在幸运大转盘中转到三等奖</div>
            <div class="coupon-img">
                <div class="coupon-img-left">
                    <p class="coupon-price">&yen;100</p>
                    <p class="coupon-info">满199元可用</p>
                </div>
                <div class="coupon-img-right">优惠券</div>
            </div>
            <p class="coupon-explain">请到我的——优惠券中查看</p>
            
            <attention-btn  />
        </div>

        <!-- 没中奖 -->
        <div class="prize-no-container" v-show="!prizeType.isWin">
            <div class="no-prize-img"><img src="../assets/img/turnplate-img/cat@2x.png" alt=""></div>
            <div class="no-prize-txt">您没有中奖</div>
            <!-- 还有机会抽奖 -->
            <div class="no-prize-follow again" v-show='prizeType.isAgain'>再试一次</div>
            <!-- 机会已用完 -->
            <div class="no-prize-follow no-again"v-show='!prizeType.isAgain'>抽奖机会已用完</div>

            <attention-btn />
        </div>

        <div class="close-btn-img"><img src="../assets/img/turnplate-img/close@2x.png" alt=""></div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/style/base.scss';
    .prize-modal{
        width: 100%;
        height: 100%;
        position:absolute;
        left: 0;
        top: 0;
        z-index:5;
        .prize-modal-bg{
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        .prize-model-container{
            width: 100%;
            height: px2em(855px);
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: url('../assets/img/turnplate-img/win-prize@2x.png') no-repeat;
            background-size: contain;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            &.small-bg{
                background: url('../assets/img/turnplate-img/win-prize-s@2x.png') no-repeat;
                background-size: contain;
            }
            .prize-title{
                margin: px2em(35px) auto px2em(30px);
                @include font-dpr($more-bigest-size);
                color: #F15A24;
                font-weight: 700;
                &.margin-top-50{
                    margin-top: px2em(-120px);
                }
            }
            .coupon-img{
                width: px2em(410px);
                height: px2em(136px);
                background: url('../assets/img/turnplate-img/coupn-bg@2x.png') no-repeat;
                background-size: contain;
                display: flex;
                margin-bottom: px2em(25px);
                .coupon-img-left{
                    width: 55%;
                    height: 100%;
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    @include font-dpr($middle-font-size);

                    .coupon-price{
                        @include font-dpr($middle-bigest-size);
                        font-weight: 700;
                        text-align: center;
                    }
                }
                .coupon-img-right{
                    display: flex;
                    flex:1;
                    justify-content: center;
                    align-items: center;
                    @include font-dpr($middle-bigger-size);
                    color: #FFA938;
                }
            }
            .coupon-explain{
                @include font-dpr($bigger-font-size);
                margin-bottom: px2em(30px);

            }
            .prize-img{
                width: px2em(190px);
                height: px2em(190px);
                border: px2em(8px) solid #FF9B18;
                border-radius: px2em(15px);
                overflow: hidden;
                margin-bottom: px2em(30px);
                img{
                    width: px2em(190px);
                    height: px2em(190px);
                }
                @include font-dpr($more-middle-size);

            }
            .prize-info{
                width: 66%;
                @include font-dpr($bigger-font-size);
                font-weight: 700;
                @include moreline-ellipsis();
            }
            
            .claim-prize{
                width: 65%;
                display: flex;
                justify-content: flex-start;
                margin-top: px2em(6px);
                @include font-dpr($middle-font-size);
                span{
                    color:#ED8D10;
                }
            }
            .prize-time{
                margin-bottom: px2em(30px);
            }
            .prize-buy{
                width: 65%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: px2em(20px) auto px2em(30px);
                @include font-dpr($bigger-font-size);
                .now-price{
                    color: #F15A24;
                    margin-right: px2em(5px);
                }
                .old-price{
                    color: #8F8E8E;
                    text-decoration: line-through;
                }
                .buy-btn{
                    @include font-dpr($more-middle-size);
                    padding: px2em(8px) px2em(25px);
                    background: #F15A24;
                    color: #fff;
                    border-radius: px2em(25px);
                }
            }
        }
        
        .prize-no-container{
            width: 75%;
            height: px2em(761px);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: url('../assets/img/turnplate-img/no-prize-modal@2x.png') no-repeat;
            background-size: contain;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .no-prize-img{
                width: px2em(202px);
                height:: px2em(226px);
                margin-bottom: px2em(10px);
                img{
                    width: px2em(202px);
                    height:: px2em(226px);
                }
            }
            .no-prize-txt{
                @include font-dpr($more-bigest-size);
                color: #28A6F6;
                font-weight: 700;
                margin-bottom: px2em(20px);
            }
            .no-prize-follow{
                padding: px2em(13px) px2em(45px);
                border-width: px2em(5px);
                border-style: solid;
                color: #FFA938;
                @include font-dpr($more-middle-size);
                margin-bottom: px2em(100px);
                border-radius: px2em(50px);
                font-weight: 700;
                &.again{
                    color: #FFA938;
                    border-color: #FFA938;
                }
                &.no-again{
                    color: #CACACA;
                    border-color: #CACACA;
                }
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
    import AttentionBtn from '../components/attention-btn'

    export default{
        props: {
            prizeType: Object
        },
        data() {
            return {

            }
        },
        components: {
            AttentionBtn,
        }
    }
</script>
