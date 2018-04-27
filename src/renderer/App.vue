<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'kindle-push',
    mounted () {
      this.loadCustomerSettings()
    },
    methods: {
      ...mapMutations(['SET_SETTING']),
      loadCustomerSettings () {
        let settings = this.$setting.get('setting')
        if (settings) {
          this.SET_SETTING({settings})
        }
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
