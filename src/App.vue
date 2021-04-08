<template>
  <div id="nav">
    <m-header/>
    <tab/>
  </div>
  <router-view/>
</template>

<style lang="less">
</style>
<script>
import MHeader from '@/components/header/header'
import Tab from '@/components/tab/tab'
export default {
  components: { Tab, MHeader }
}
</script>
