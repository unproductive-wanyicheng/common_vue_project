<template>
    <div class="ad-moving">
        <div class="ad-moving-wrapper">
            <div class="ad-item" v-for="ad in adData">
                <div class="ad-item-inner">
                    {{ad}}
                </div>
            </div>
        </div>
    </div>
</template>


<style lang='scss' scoped>
    
    @import '../assets/style/variables.scss';
    .ad-moving {
        height: px2em(46px);  

        .ad-moving-wrapper {
            height: 100%;
            white-space: nowrap;
            overflow: hidden;
            background-color: #2495dd;

             .ad-item {
                display: inline-block;
                height: 100%;
                padding-right: px2em(88px);
                .ad-item-inner {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    color: #fff;
                    @include font-dpr($font-size);
                }
            }
        }     
    }
    

</style>

<script>
    const adData = [
                        '用户 177****8499 抽到夏威夷海风比基尼一套',
                        '用户 177****8499 抽到夏威夷海风比基尼一套',
                        '用户 177****8499 抽到夏威夷海风比基尼一套',
                        '用户 177****8499 抽到夏威夷海风比基尼一套',
                        '用户 177****8499 抽到夏威夷海风比基尼一套'
                    ]
    export default {
        name: 'home',
        data () {
            return {
                adData: adData,
                moveDis: 0
            }
        },
        mounted() {
            this.autoMoving();
        },
        methods: {
            autoMoving() {
                const speed = 30;
                let moveEle = document.getElementsByClassName('ad-item');
                const moveEleWrapper = document.getElementsByClassName('ad-moving-wrapper');
                let allMoveDis;
                if(this.adData.length > 1) {
                    allMoveDis = moveEle[0].offsetWidth*(this.adData.length-1);
                }else{
                    allMoveDis = moveEle[0].offsetWidth;
                }          
                setInterval(()=>{
                    this.moving(this, moveEle, allMoveDis, moveEleWrapper);
                },speed)                          
            },
            moving(that, moveEle, allMoveDis, moveEleWrapper ) {
                if(allMoveDis <= moveEleWrapper.offsetWidth) {
                    return false;
                }else if(Math.abs(this.moveDis) >= allMoveDis) {
                    this.moveDis = 0;
                    for(let i=0; i<that.adData.length;i++) {
                        moveEle[i].style.transform = `translate3d(0, 0, 0)`;
                        moveEle[i].style.webkitTransform = `translate3d(0, 0, 0)`;
                    } 
                }
                else{
                    this.moveDis--;
                    if(moveEle&&moveEle.length > 0) {
                        for(let i=0; i<that.adData.length;i++) {
                            moveEle[i].style.transform = `translate3d(${this.moveDis}px, 0, 0)`;
                            moveEle[i].style.webkitTransform = `translate3d(${this.moveDis}px, 0, 0)`;
                        }   
                    }
                    
                }
            }

        }
    }
</script>


