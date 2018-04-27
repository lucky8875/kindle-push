<template>
    <Menu @on-select="menuSelect" mode="horizontal" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            首页
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            用户配置
        </MenuItem>
    </Menu>
</template>

<script>
  export default {
    name: 'index-header',
    methods: {
      menuSelect (name) {
        if (name === '2') {
          this.$router.push('/index/profile')
        } else if (name === '1') {
          this.$router.push('/index/upload')
        }
      }
    }
  }
</script>

<style scoped>

</style>