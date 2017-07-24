<template>  
    <div class="turnplate">
        <div class="turnplate-inner">
            <div class="turnplate-times">
                <div class="turnplate-times-inner">
                    {{initOppo}}
                </div>
            </div>
            <div class="turnplate-box-wrapper-wrapper">      
                <div class="turnplate-box-item" data-value="0">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="ActiveBtn" alt="" v-if="currentIndex === 0">
                            <img class="box-bg" :src="NormalBtn" alt="" v-else>
                        </div>
                        <div class="box-info">
                            <div class="info-img" v-if="prizeList[0].goodsInfo">
                                <img :src="prizeList[0].goodsInfo.imgUrl" alt="">
                            </div>
                            <div class="info-title" v-if="prizeList[0].goodsInfo&&prizeList[0].goodsInfo.title">     {{prizeList[0].goodsInfo.title}}
                            </div>
                            <div class="info-discount" v-if="prizeList[0].goodsInfo&&prizeList[0].goodsInfo.discount">
                                ￥{{prizeList[0].goodsInfo.discount}}优惠券
                            </div>
                            <div class="info-price" v-if="prizeList[0].goodsInfo&&prizeList[0].goodsInfo.price">
                                <div class="info-price-price">￥{{prizeList[0].goodsInfo.price}}</div>
                                <div class="info-price-origin">￥{{prizeList[0].goodsInfo.originPrice}}</div>
                            </div> 
                        </div>
                        <div class="info-no-prize" v-if="prizeList[0].type === 'noprize'">
                            谢谢惠顾
                        </div>
                    </div>
                </div> 

                <div class="turnplate-box-item" data-value="1">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="ActiveBtn" alt="" v-if="currentIndex === 1">
                            <img class="box-bg" :src="NormalBtn" alt="" v-else>
                        </div>
                        <div class="box-info">
                            <div class="info-img" v-if="prizeList[1].goodsInfo">
                                <img :src="prizeList[1].goodsInfo.imgUrl" alt="">
                            </div>
                            <div class="info-title" v-if="prizeList[1].goodsInfo&&prizeList[1].goodsInfo.title">     {{prizeList[1].goodsInfo.title}}
                            </div>
                            <div class="info-discount" v-if="prizeList[1].goodsInfo&&prizeList[1].goodsInfo.discount">
                                ￥{{prizeList[1].goodsInfo.discount}}优惠券
                            </div>
                            <div class="info-price" v-if="prizeList[1].goodsInfo&&prizeList[1].goodsInfo.price">
                                <div class="info-price-price">￥{{prizeList[1].goodsInfo.price}}</div>
                                <div class="info-price-origin">￥{{prizeList[1].goodsInfo.originPrice}}</div>
                            </div> 
                        </div>
                        <div class="info-no-prize" v-if="prizeList[1].type === 'noprize'">
                            谢谢惠顾
                        </div>
                    </div>
                </div>

                <div class="turnplate-box-item" data-value="2">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="ActiveBtn" alt="" v-if="currentIndex === 2">
                            <img class="box-bg" :src="NormalBtn" alt="" v-else>
                        </div>
                        <div class="box-info">
                            <div class="info-img" v-if="prizeList[1].goodsInfo">
                                <img :src="prizeList[1].goodsInfo.imgUrl" alt="">
                            </div>
                            <div class="info-title" v-if="prizeList[1].goodsInfo&&prizeList[1].goodsInfo.title">     {{prizeList[1].goodsInfo.title}}
                            </div>
                            <div class="info-discount" v-if="prizeList[1].goodsInfo&&prizeList[1].goodsInfo.discount">
                                ￥{{prizeList[1].goodsInfo.discount}}优惠券
                            </div>
                            <div class="info-price" v-if="prizeList[1].goodsInfo&&prizeList[1].goodsInfo.price">
                                <div class="info-price-price">￥{{prizeList[1].goodsInfo.price}}</div>
                                <div class="info-price-origin">￥{{prizeList[1].goodsInfo.originPrice}}</div>
                            </div> 
                        </div>
                        <div class="info-no-prize" v-if="prizeList[1].type === 'noprize'">
                            谢谢惠顾
                        </div>
                    </div>
                </div>
                <div class="turnplate-box-item" data-value="7">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="ActiveBtn" alt="" v-if="currentIndex === 7">
                            <img class="box-bg" :src="NormalBtn" alt="" v-else>
                        </div>
                        <div class="box-info">
                            <div class="info-img" v-if="prizeList[7].goodsInfo">
                                <img :src="prizeList[7].goodsInfo.imgUrl" alt="">
                            </div>
                            <div class="info-title" v-if="prizeList[7].goodsInfo&&prizeList[7].goodsInfo.title">     {{prizeList[7].goodsInfo.title}}
                            </div>
                            <div class="info-discount" v-if="prizeList[7].goodsInfo&&prizeList[7].goodsInfo.discount">
                                ￥{{prizeList[7].goodsInfo.discount}}优惠券
                            </div>
                            <div class="info-price" v-if="prizeList[7].goodsInfo&&prizeList[7].goodsInfo.price">
                                <div class="info-price-price">￥{{prizeList[7].goodsInfo.price}}</div>
                                <div class="info-price-origin">￥{{prizeList[7].goodsInfo.originPrice}}</div>
                            </div> 
                        </div>
                        <div class="info-no-prize" v-if="prizeList[7].type === 'noprize'">
                            谢谢惠顾
                        </div>
                    </div>
                </div>
                <div class="box-item-start">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="StartBtn" alt="">
                        </div>
                    </div>
                </div> 
                <div class="turnplate-box-item" data-value="3">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="ActiveBtn" alt="" v-if="currentIndex === 3">
                            <img class="box-bg" :src="NormalBtn" alt="" v-else>
                        </div>
                        <div class="box-info">
                            <div class="info-img" v-if="prizeList[3].goodsInfo">
                                <img :src="prizeList[3].goodsInfo.imgUrl" alt="">
                            </div>
                            <div class="info-title" v-if="prizeList[3].goodsInfo&&prizeList[3].goodsInfo.title">     {{prizeList[3].goodsInfo.title}}
                            </div>
                            <div class="info-discount" v-if="prizeList[3].goodsInfo&&prizeList[3].goodsInfo.discount">
                                ￥{{prizeList[3].goodsInfo.discount}}优惠券
                            </div>
                            <div class="info-price" v-if="prizeList[3].goodsInfo&&prizeList[3].goodsInfo.price">
                                <div class="info-price-price">￥{{prizeList[3].goodsInfo.price}}</div>
                                <div class="info-price-origin">￥{{prizeList[3].goodsInfo.originPrice}}</div>
                            </div> 
                        </div>
                        <div class="info-no-prize" v-if="prizeList[3].type === 'noprize'">
                            谢谢惠顾
                        </div>
                    </div>
                </div>
                <div class="turnplate-box-item" data-value="6">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="ActiveBtn" alt="" v-if="currentIndex === 6">
                            <img class="box-bg" :src="NormalBtn" alt="" v-else>
                        </div>
                        <div class="box-info">
                            <div class="info-img" v-if="prizeList[6].goodsInfo">
                                <img :src="prizeList[6].goodsInfo.imgUrl" alt="">
                            </div>
                            <div class="info-title" v-if="prizeList[6].goodsInfo&&prizeList[6].goodsInfo.title">     {{prizeList[6].goodsInfo.title}}
                            </div>
                            <div class="info-discount" v-if="prizeList[6].goodsInfo&&prizeList[6].goodsInfo.discount">
                                ￥{{prizeList[6].goodsInfo.discount}}优惠券
                            </div>
                            <div class="info-price" v-if="prizeList[6].goodsInfo&&prizeList[6].goodsInfo.price">
                                <div class="info-price-price">￥{{prizeList[6].goodsInfo.price}}</div>
                                <div class="info-price-origin">￥{{prizeList[6].goodsInfo.originPrice}}</div>
                            </div> 
                        </div>
                        <div class="info-no-prize" v-if="prizeList[6].type === 'noprize'">
                            谢谢惠顾
                        </div>
                    </div>
                </div>
                <div class="turnplate-box-item" data-value="5">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="ActiveBtn" alt="" v-if="currentIndex === 5">
                            <img class="box-bg" :src="NormalBtn" alt="" v-else>
                        </div>
                        <div class="box-info">
                            <div class="info-img" v-if="prizeList[5].goodsInfo">
                                <img :src="prizeList[5].goodsInfo.imgUrl" alt="">
                            </div>
                            <div class="info-title" v-if="prizeList[5].goodsInfo&&prizeList[5].goodsInfo.title">     {{prizeList[5].goodsInfo.title}}
                            </div>
                            <div class="info-discount" v-if="prizeList[5].goodsInfo&&prizeList[5].goodsInfo.discount">
                                ￥{{prizeList[5].goodsInfo.discount}}优惠券
                            </div>
                            <div class="info-price" v-if="prizeList[5].goodsInfo&&prizeList[5].goodsInfo.price">
                                <div class="info-price-price">￥{{prizeList[5].goodsInfo.price}}</div>
                                <div class="info-price-origin">￥{{prizeList[5].goodsInfo.originPrice}}</div>
                            </div> 
                        </div>
                        <div class="info-no-prize" v-if="prizeList[5].type === 'noprize'">
                            谢谢惠顾
                        </div>
                    </div>
                </div>
                <div class="turnplate-box-item" data-value="4">
                    <div class="box-inner">
                        <div class="box-img-wrapper">
                            <img class="box-bg" :src="ActiveBtn" alt="" v-if="currentIndex === 4">
                            <img class="box-bg" :src="NormalBtn" alt="" v-else>
                        </div>
                        <div class="box-info">
                            <div class="info-img" v-if="prizeList[4].goodsInfo">
                                <img :src="prizeList[4].goodsInfo.imgUrl" alt="">
                            </div>
                            <div class="info-title" v-if="prizeList[4].goodsInfo&&prizeList[4].goodsInfo.title">     {{prizeList[4].goodsInfo.title}}
                            </div>
                            <div class="info-discount" v-if="prizeList[4].goodsInfo&&prizeList[4].goodsInfo.discount">
                                ￥{{prizeList[4].goodsInfo.discount}}优惠券
                            </div>
                            <div class="info-price" v-if="prizeList[4].goodsInfo&&prizeList[4].goodsInfo.price">
                                <div class="info-price-price">￥{{prizeList[4].goodsInfo.price}}</div>
                                <div class="info-price-origin">￥{{prizeList[4].goodsInfo.originPrice}}</div>
                            </div> 
                        </div>
                        <div class="info-no-prize" v-if="prizeList[4].type === 'noprize'">
                            谢谢惠顾
                        </div>
                    </div>
                </div>                    
            </div>
        </div> 
    </div>   
</template>


<style lang='scss' scoped>    
    @import '../assets/style/variables.scss';
    .turnplate {
        width: px2em(691px);
        height: px2em(893px);
        background-image: url('../assets/img/turnplate-img/turnplate@2x.png');
        background-size: cover;

        .turnplate-inner {
            // height: 100%;
            position: relative;
            padding: px2em(232px) px2em(70px) 0 px2em(70px);


            .turnplate-times {
                position: absolute;
                top: px2em(54px);
                left: px2em(360px);
                color: #ff5467;
                @include font-dpr($more-bigest-size);

                .turnplate-times-inner {
                    width: px2em(72px);
                    height: px2em(36px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                } 
            }
            .turnplate-box-wrapper-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                align-content: space-around;
                width: px2em(555px);
                height: px2em(555px);
                font-size: 0;
            }

            .box-item-start {
                width: px2em(182px);
                height: px2em(174px);
                background-color: #000;
                border-radius: px2em(10px);
            }
            
            .turnplate-box-item {
                width: px2em(182px);
                height: px2em(174px);
                background-color: #000;
                border-radius: px2em(10px);        
            }
            .box-inner {
                position: relative;
                clear: both;
                .box-img-wrapper {
                    z-index: 1;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: px2em(182px);
                    height: px2em(174px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .box-bg {
                        width: px2em(166px);
                        height: px2em(166px);
                    }
                }

                .box-info {
                    z-index: 2;
                    @include font-dpr($super-small-font-size);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: px2em(182px);
                    height: px2em(140px);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: px2em(10px);
                    padding-bottom: px2em(10px);
                    .info-img {
                        width: px2em(100px);
                        height: px2em(100px);
                        font-size: 0;
                        background-color: #ffebeb;
                        
                        img {
                            width: 100%;
                            height: 100%;                         
                        }
                    }
                }

                .info-price {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .info-price-price {
                        color: #ff5467;
                        margin-right: px2em(10px);
                    }

                    .info-price-origin {
                        text-decoration: line-through;
                    }
                }

                .info-discount {
                    color: #ff5467;
                    @include font-dpr($font-size);
                }

                .info-no-prize {
                    z-index: 3;
                    width: px2em(182px);
                    height: px2em(174px);
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    @include font-dpr($more-bigger-size);
                    color: #28a6f6;
                }    
            }           
        }

       
    }

</style>

<script>
    import NormalBtn from '../assets/img/turnplate-img/normal-btn@2x.png'
    import ActiveBtn from '../assets/img/turnplate-img/active-btn@2x.png'
    import StartBtn from '../assets/img/turnplate-img/start-btn@2x.png'
    const allTimes = 3;
    const prizeList = [
                        {
                            type:'prize',
                            goodsInfo: {
                                imgUrl: 'https://img.mao-wo.com/lianke-dev/20160923/LK-9912e07e2e2d4899bca4694387b9251e.jpg',
                                price: 9.9,
                                originPrice: 99.9,
                                title: '比基尼',
                                prizeRank: 3
                            }
                        },
                        {
                            type:'prize',
                            goodsInfo: {
                                imgUrl: 'https://img.mao-wo.com/lianke-dev/20160923/LK-9912e07e2e2d4899bca4694387b9251e.jpg',
                                price: 9.9,
                                originPrice: 99.9,
                                title: '比基尼',
                                prizeRank: 3
                            }
                        },
                        {
                            type:'prize',
                            goodsInfo: {
                                imgUrl: 'https://img.mao-wo.com/lianke-dev/20160923/LK-9912e07e2e2d4899bca4694387b9251e.jpg',
                                discount: 100,
                                prizeRank: 2
                            }
                        },
                        {
                            type:'noprize',
                            prizeRank: 0  
                        },     
                        {
                            type:'prize',
                            goodsInfo: {
                                imgUrl: 'https://img.mao-wo.com/lianke-dev/20160923/LK-9912e07e2e2d4899bca4694387b9251e.jpg',
                                price: 9.9,
                                originPrice: 99.9,
                                title: '比基尼',
                                prizeRank: 3
                            }
                        },
                        {
                            type:'prize',
                            goodsInfo: {
                                imgUrl: 'https://img.mao-wo.com/lianke-dev/20160923/LK-9912e07e2e2d4899bca4694387b9251e.jpg',
                                price: 9.9,
                                originPrice: 99.9,
                                title: '比基尼',
                                prizeRank: 3
                            }
                        },
                        {
                            type:'prize',
                            goodsInfo: {
                                imgUrl: 'https://img.mao-wo.com/lianke-dev/20160923/LK-9912e07e2e2d4899bca4694387b9251e.jpg',
                                price: 9.9,
                                originPrice: 99.9,
                                title: '比基尼',
                                prizeRank: 3
                            }
                        },
                        {
                            type:'noprize',
                            prizeRank: 0   
                        }
                    ]
    export default {
        name: 'home',
        props: {
            
        },
        data () {
            return {
                times: allTimes,
                prizeList: prizeList,
                NormalBtn: NormalBtn,
                ActiveBtn: ActiveBtn,
                StartBtn: StartBtn,
                count: 0, //位置总数
                speed: 10, //初始速度
                timer: 0, //定时器时间
                currentIndex: -1, //转动的当前位置
                rotateNum: 0, //转动次数
                basicCycle: 50, //运动初始次数
                prizePlace: -1, //中奖位置
                isClick: false, //是否重复点击抽奖
                parentDom: null, //根dom
                initOppo: allTimes, //初始抽奖次数
            }
        },
        mounted() {
            this.turnplateInit();
        },
        methods: {
            turnplateInit() {
                const _this = this;
                if (document.getElementsByClassName('turnplate-box-item').length > 0) {
                    const $lottery = document.querySelector('turnplate-box-wrapper-wrapper');
                    const $units = document.getElementsByClassName('turnplate-box-item');
                    this.count = $units.length;
                    this.parentDom = $lottery;
                }
                document.getElementsByClassName('box-item-start')[0].addEventListener('click', ()=>{
                    if (_this.isClick) { //防止在转动过程中,重复点击抽奖按钮
                        alert('你已用完抽奖次数')
                        return false
                    } else {
                        _this.speed = 100;
                        _this.rotateNum = 0;
                        _this.initOppo -= 1;
                        _this.turning();
                        _this.isClick = true; //一次完成后，可继续抽
                        return false;
                    }
                });
            },
            //为即将转到下一个节点添加class:active
            addNextItemClass () {
                this.currentIndex += 1;
                if (this.currentIndex >= this.count) {
                    this.currentIndex = 0;
                }
                return false
            },
            turning() {
                this.rotateNum += 1
                this.addNextItemClass();
                //判断是否转动完毕
                if (this.rotateNum > this.basicCycle + 10 && this.prizePlace == this.currentIndex) {
                    clearTimeout(this.timer)
                    this.prizePlace = -1;
                    this.timer = 0;
                    this.initOppo != 0 ? this.isClick = false : this.isClick = true;
                    let selectedEle = document.getElementsByClassName('turnplate-box-item')[this.currentIndex].dataset.value;
                    console.log("恭喜你中了" + selectedEle + "等奖");
                } else {
                    //该判断内是对转动速度speed的处理
                    if (this.rotateNum < this.basicCycle) {
                        this.speed -= 10
                    } else if (this.rotateNum == this.basicCycle) {
                        // 此处是随机数获取中奖位置的，在点击抽奖的时候该位置（随机数）就已确定
                        this.prizePlace = Math.floor(Math.random() * this.count);
                        this.prizePlace == 8 ? this.prizePlace = 0 : this.prizePlace = this.prizePlace;
                        console.log(this.prizePlace)
                    } else {
                        // 如果中奖位置和当前位置的位差在一到多圈时，加快转动速度
                        if (this.rotateNum > this.basicCycle + 10 && ((this.prizePlace == 0 && this.currentIndex == 7)) || this.prizePlace == this.currentIndex + 1) {
                            this.speed += 100;
                        } else {
                            this.speed += 20;
                        }
                    }
                    // 此处做匀速阶段的处理
                    if (this.speed<40) {
                        this.speed=40;
                    };
                    // 定时器做整个转动处理
                    this.timer = setTimeout(this.turning.bind(this),this.speed)//此处使用bind(),防止setTimeout改变this的指向
                }
                return false;
            }
        }
    }
</script>


