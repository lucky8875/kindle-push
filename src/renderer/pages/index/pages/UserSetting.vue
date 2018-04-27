<template>
    <Row class="profile">
        <Col span="4">
         &nbsp;
        </Col>
        <Col span="16">
            <Form ref="settings" :rules="ruleValidate" :model="settings" :label-width="100">
                <FormItem label="Kindle邮箱" prop="kindleEmail">
                    <Input :disabled="isEdit" v-model="settings.kindleEmail" placeholder="请输入Kindle邮箱"/>
                </FormItem>
                <FormItem label="Host" prop="host">
                    <Input :disabled="isEdit" v-model="settings.host" placeholder="请输入Host"/>
                </FormItem>
                <FormItem label="Port" prop="port">
                    <Input :disabled="isEdit" v-model="settings.port" placeholder="请输入Port"/>
                </FormItem>
                <FormItem label="发送邮箱" prop="email">
                    <Input :disabled="isEdit" v-model="settings.email" placeholder="请输入发送邮箱"/>
                </FormItem>
                <FormItem label="邮箱授权码" prop="pass">
                    <Input :disabled="isEdit" v-model="settings.pass" placeholder="请输入邮箱授权码"/>
                </FormItem>
                <FormItem>
                    <Button @click="isEdit = !isEdit" type="error">{{ isEdit == false ? '取消' : '编辑' }}</Button>
                    <Button @click="tryToSave('settings')" type="primary">保存</Button>
                </FormItem>
            </Form>
        </Col>
        <Col span="4">
            &nbsp;
        </Col>
    </Row>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'user-setting',
    data () {
      return {
        isEdit: false,
        settings: {
          kindleEmail: '',
          host: '',
          port: '',
          email: '',
          pass: ''
        },
        ruleValidate: {
          kindleEmail: [
            { required: true, message: 'Kindle邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式非法', trigger: 'blur' }
          ],
          host: [
            { required: true, message: '邮箱Host不能为空', trigger: 'blur' }
          ],
          port: [
            { required: true, message: '邮箱Port不能为空', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '发送邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式非法', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '邮箱授权码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapGetters(['currentSetting'])
    },
    methods: {
      tryToSave (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$setting.set('setting', this.settings)
            this.$Message.success('设置成功')
          } else {
            this.$Message.error('请完成所有配置的填写')
          }
        })
      }
    },
    mounted () {
      if (Object.keys(this.currentSetting).length > 0) {
        this.settings = this.currentSetting
        this.isEdit = true
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .profile {
        margin-top 50px;
    }
</style>