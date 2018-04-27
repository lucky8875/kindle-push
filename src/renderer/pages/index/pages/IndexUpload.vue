<template>
    <div>
        <Upload
                class="upload-div"
                :before-upload="handleUpload"
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击或拖入文件上传</p>
            </div>
        </Upload>
        <Table @on-selection-change="selectChange" style="margin-bottom: 50px;" ref="selection" border :columns="columns" :data="attachments"></Table>
        <p style="text-align: right; padding-right: 20px;">
            <Button type="primary" @click="tryToPush">开始推送</Button>
        </p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { isValidateFormat } from '../../../utils/file'
  import { sendMailWithBook } from '../../../utils/email'
  export default {
    name: 'index-upload',
    data () {
      return {
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '文件名',
            key: 'filename'
          },
          {
            title: '文件路径',
            key: 'path'
          }
        ],
        attachments: [
        ],
        selected: []
      }
    },
    computed: {
      ...mapGetters(['currentSetting'])
    },
    methods: {
      handleUpload (file) {
        if (isValidateFormat(file.name)) {
          this.attachments.push({
            filename: file.name,
            path: file.path
          })
        }
        return false
      },
      selectChange (selection) {
        this.selected = selection
      },
      async tryToPush () {
        if (this.selected.length === 0) {
          this.$Message.error('请选择推送的书籍！')
          return
        }
        if (!this.currentSetting.host) {
          this.$Message.error('请先进行推送设置！')
          this.$router.push('/index/profile')
          return
        }
        this.$Spin.show()
        try {
          await sendMailWithBook(this.currentSetting, this.attachments)
          this.$Message.success('推送成功')
        } catch (error) {
          this.$Message.error(error.message)
        } finally {
          this.$Spin.hide()
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .upload-div {
        margin-top 50px;
    }
</style>