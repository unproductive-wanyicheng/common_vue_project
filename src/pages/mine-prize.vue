 p<template>
    <div class="mine-prize-wrapper">
        <common-header :titleTxt='title' />
        <div class="mine-prize-container">
            <title-img type="minePrize" />
            <div class="prize-content-area">
                <div class="area">
                    <div class="prize-item">
                    <div class="prize-img">
                        <img src="../assets/img/turnplate-img/sdfg@3x.png" alt="">
                        <div class="prize-img-shade">未兑奖</div>
                    </div>
                    <div class="prize-info">
                        <p class="prize-grade">一等奖</p>
                        <p class="prize-describe" style="text-overflow: ellipsis;">地素新款波浪蕾丝优雅可爱美丽大方半身鱼尾裙地素新款波浪蕾丝优雅可爱美丽大方半身鱼尾裙</p>
                        <p class="prize-code">兑奖码：78927984568</p>
                        <!-- <p class="prize-time">兑奖日期：2017.06.22-2017.07.03</p> -->
                        <a href="#" class="prize-detail prize-good-bg">查看详情</a>
                    </div>
                </div>
                <div class="prize-item">
                    <div class="prize-img">
                        <img src="../assets/img/turnplate-img/asdfadf@3x.png" alt="">
                        <div class="prize-img-shade">未兑奖</div>
                    </div>
                    <div class="prize-info">
                        <p class="prize-grade">一等奖</p>
                        <p class="prize-describe" style="text-overflow: ellipsis;">地素新款波浪蕾丝优雅可爱美丽大方半身鱼尾裙地素新款波浪蕾丝优雅可爱美丽大方半身鱼尾裙</p>
                        <p class="prize-code">兑奖码：78927984568</p>
                        <p class="prize-time">兑奖日期：2017.06.22-2017.07.03</p>
                        <a href="#" class="prize-detail prize-coupon-bg">查看优惠券</a>
                    </div>
                </div>
                <div class="prize-item">
                    <div class="prize-img">
                        <img src="../assets/img/turnplate-img/sdfg@3x.png" alt="">
                        <div class="prize-img-shade">未兑奖</div>
                    </div>
                    <div class="prize-info">
                        <p class="prize-grade">一等奖</p>
                        <p class="prize-describe" style="text-overflow: ellipsis;">地素新款波浪蕾丝优雅可爱美丽大方半身鱼尾裙地素新款波浪蕾丝优雅可爱美丽大方半身鱼尾裙</p>
                        <!-- <p class="prize-code">兑奖码：78927984568</p>
                        <p class="prize-time">兑奖日期：2017.06.22-2017.07.03</p> -->
                        <a href="#" class="prize-detail prize-good-bg">查看详情</a>
                    </div>
                </div>
                 <div class="prize-item">
                    <div class="prize-img">
                        <img src="../assets/img/turnplate-img/sdfg@3x.png" alt="">
                        <div class="prize-img-shade">未兑奖</div>
                    </div>
                    <div class="prize-info">
                        <p class="prize-grade">一等奖</p>
                        <p class="prize-describe" style="text-overflow: ellipsis;">地素新款波浪蕾丝优雅可爱美丽大方半身鱼尾裙地素新款波浪蕾丝优雅可爱美丽大方半身鱼尾裙</p>
                        <!-- <p class="prize-code">兑奖码：78927984568</p>
                        <p class="prize-time">兑奖日期：2017.06.22-2017.07.03</p> -->
                        <a href="#" class="prize-detail prize-good-bg">查看详情</a>
                    </div>
                </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<style lang='scss' scoped>

    @import '../assets/style/base.scss';

    .mine-prize-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        .common-header{
            flex: 0 0 px2em(100px);
        }
        .mine-prize-container{
            width: 100%;
            flex: 1;
            background: url('../assets/img/turnplate-img/bg2@2x.png') no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            .title-img{
                flex: 0 0 auto;
            }
            .prize-content-area{
                width: 95%;
                background: #20AAF2;
                margin: px2em(50px) auto 0;
                border-radius: px2em(10px);
                padding: px2em(30px) px2em(18px);
                flex: 1 ;
                overflow-y: scroll;
                .area{
                    width: 100%;
                    height: 100%;
                    overflow-y: scroll;
                    -webkit-overflow-scrolling: touch;
                }
                .prize-item{
                    width: 100%;
                    display: flex;
                    margin-bottom: px2em(45px);
                    .prize-img{
                        width: px2em(250px);
                        height: px2em(250px);
                        background: #fff;
                        margin-right: px2em(15px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        overflow: hidden;
                        img{
                            width: px2em(250px);
                            // height: px2em(254px);
                        }
                        .prize-img-shade{
                            width: 100%;
                            height: px2em(75px);
                            background: rgba(0, 0, 0, .5);
                            color: #fff;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            @include font-dpr($middle-font-size);
                            position: absolute;
                            bottom: 0;
                            left: 0;
                        }
                    }
                    .prize-info{
                        // display: flex;
                        justify-content: space-between;
                        flex-direction: column;
                        flex: 1;
                        color: #fff;
                        @include font-dpr($more-middle-size);
                        border-bottom: px2em(1px) solid #fff;
                        padding-bottom: px2em(8px);
                        position: relative;
                        p{
                            margin-bottom: px2em(4px);
                        }
                        .prize-grade{
                            @include font-dpr($more-bigger-size);
                            font-weight: 700;
                        }
                        .prize-describe{
                            @include moreline-ellipsis();
                        }
                        .prize-detail{
                            position: absolute;
                            bottom: px2em(6px);
                            left: 0;
                            padding: px2em(5px) px2em(18px);      
                            border-radius: px2em(8px); 
                            @include font-dpr($font-size);
                            // display: inline-block;
                        }
                        .prize-good-bg{
                            background: #FA43A2;
                        }
                        .prize-coupon-bg{
                            background: #FAA54A;
                        }

                    }
                }
            }
        }
    }
    
</style>

<script>
    import CommonHeader from '../components/header';
    import TitleImg from '../components/title-img';
    export default{
        data() {
            return {
                title: '我的奖品',
            }
        },
        components: {
            CommonHeader,
            TitleImg
        }
   }
</script>
