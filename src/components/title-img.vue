<template>  
    <div class="title-img">
        <img :src="imgUrl" alt="">
    </div>   
</template>


<style lang='scss' scoped>
    
    @import '../assets/style/base.scss';

    .title-img{
        width: 100%;
        height: px2em(136px);
        display: flex;
        justify-content: center;
        margin-top: px2em(80px);
        img{
            height: px2em(136px);
        }
    }


</style>

<script>
    import NormalImg from '../assets/img/turnplate-img/lucky-turnplate@2x.png';
    import PrizeDetailImg from '../assets/img/turnplate-img/prize-detail@2x.png';
    import MinePrizeImg from '../assets/img/turnplate-img/mine-prize@2x.png';
    export default {
        name: 'home',
        props: {
            type: {
                type: String,
                default: 'normal'
            }
        },
        data () {
            return {
                imgUrl: NormalImg
            }
        },
        mounted() {
            this.calImgUrl();
        },
        methods: {
            calImgUrl() {
                const url = this.type === 'normal' ? NormalImg : this.type === 'prizeDetail' ? PrizeDetailImg : MinePrizeImg;
                this.imgUrl = url;
            }
        }
    }
</script>


