<template>
<div>
    <div class="rule-modal" >
        <div class="rule-modal-bg" @click='closeRuleModal'></div>
        <div  class="rule-modal-container" >
            <ul class="rule-modal-txt">
                <li>1. 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</li>
                <li>1. 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</li>
                <li>1. 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</li>
                <li>1. 活动规则活动规则活动规则活动规则活动规则活动规则活动规则活动规则</li>               
            </ul>
        </div >

        <div class="i-know-btn" @click='closeRuleModal'><img src="../assets/img/turnplate-img/i-know-btn@2x.png" alt=""></div>
    </div>
</div>
</template>

<style lang="scss" scoped>
    @import '../assets/style/base.scss';
    .rule-modal{
         width: 100%;
        height: 100%;
        position:absolute;
        left: 0;
        top: 0;
        z-index: 5;
        .rule-modal-bg{
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
        }
        .rule-modal-container{
            width: px2em(660px);
            height: px2em(686px);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: url('../assets/img/turnplate-img/rule-bg@2x.png') no-repeat;
            background-size: contain;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: px2em(40px);
            .rule-modal-txt{
                width: 90%;
                max-height: px2em(440px);
                margin-top: px2em(100px);
                overflow-y: scroll;
                @include font-dpr($middle-font-size);
                color: #fff;
                line-height: 1.3;
                li{
                    margin-bottom: px2em(12px);
                }
            }
        }
        .i-know-btn{
            width: px2em(242px);
            height: px2em(80px);
            position: absolute;
            left: 50%;
            bottom: 10%;
            transform: translateX(-50%);
        }
    }
</style>

<script>
    export default{
        methods: {
            closeRuleModal: function(){
                this.$store.dispatch('showRuleModal', false);
            }
        }
    }
</script>
