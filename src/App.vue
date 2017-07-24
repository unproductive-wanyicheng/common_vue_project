<template>
    <div id="app" :style="{ height: height + 'px'}">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  mounted() {
    const height = document.body.scrollHeight;
    this.height = height;

  },
  data() {
    return {
        height: '',
    }
  },
  name: 'app'
}
</script>

<style >
    


</style>
