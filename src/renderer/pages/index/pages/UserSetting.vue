<template>
    <Row class="profile">
        <Col span="4">
         &nbsp;
        </Col>
        <Col span="16">
            <Form :model="formItem" :label-width="80">
                <FormItem label="Kindle邮箱">
                    <Input v-model="formItem.kindleEmail" placeholder="请输入Kindle邮箱"></Input>
                </FormItem>
                <FormItem label="Host">
                    <Input v-model="formItem.host" placeholder="请输入Host"></Input>
                </FormItem>
                <FormItem label="Port">
                    <Input v-model="formItem.host" placeholder="请输入Port"></Input>
                </FormItem>
                <FormItem label="发送邮箱">
                    <Input v-model="formItem.host" placeholder="请输入发送邮箱"></Input>
                </FormItem>
                <FormItem label="邮箱授权码">
                    <Input v-model="formItem.host" placeholder="请输入邮箱授权码"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary">保存</Button>
                </FormItem>
            </Form>
        </Col>
        <Col span="4">
            &nbsp;
        </Col>
    </Row>
</template>

<script>
  export default {
    name: 'user-setting',
    data () {
      return {
        formItem: {
          kindleEmail: '',
          host: '',
          port: '',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .profile {
        margin-top 50px;
    }
</style>