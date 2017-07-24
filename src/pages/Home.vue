<template>
    <div class="home">
        <!-- <ad-moving />
        <div class="container">
            <title-img type="normal"/>
            <turn-plate />
            <div class="bottom-wrapper">
                <div class="activity-rule" @click='viewRule'><img src="../assets/img/turnplate-img/btn-rule@2x.png" alt=""></div>
                <div class="view-prize" @click='viewMyPrize' ><img src="../assets/img/turnplate-img/btn-mine@2x.png" alt=""></div>
            </div>
        </div>
        <prize-modal :prizeType = 'prizeState' />
        <qr-code-modal v-show='isShowQr'/>
        <rule-modal v-show='isShowRule' /> -->
        <div>这是一个vue示例项目</div>
    </div>
</template>


<style lang='scss' scoped>    
    @import '../assets/style/base.scss';
    .home {
        /*background-image: url('../assets/img/turnplate-img/background@2x.png');*/
        background-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        
        .container {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: px2em(50px);

            .bottom-wrapper {
                margin-top: px2em(30px);
                display: flex;
                align-items: center;
                div{
                    margin: 0 px2em(25px);
                }
            }
        }
    }

</style>

<script>
    import AdMoving from '../components/ad-moving';
    import TitleImg from '../components/title-img';
    import TurnPlate from '../components/turnplate';
    import PrizeModal from '../components/prize-modal';
    import QrCodeModal from '../components/qr-code-modal'
    import RuleModal from '../components/rule-modal'
    import { mapGetters } from 'vuex'
    export default {
        name: 'home',
        computed: {
            ...mapGetters({
                isShowQr: 'getQrModal',
                isShowRule: 'getRuleModal'
            })
        },
        data () {
            return {
                prizeState: {
                    isShow: false,
                    isWin: true,
                    type: 'buyGood',
                    isAgain: false,
                    isAttention: false,
                },
                
            }
        },
        methods: {
            viewRule: function(){
                this.$store.dispatch('showRuleModal', true);
            },
            viewMyPrize: function(){
                this.$router.push({path: '/mine-prize'});
            }
        },
        components: {
            AdMoving,
            TitleImg,
            TurnPlate,
            PrizeModal,
            QrCodeModal,
            RuleModal
        }
    }
</script>


