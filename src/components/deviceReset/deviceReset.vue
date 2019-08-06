<template>
  <div class="content">
    <Form ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="100">
      <FormItem label="执行方式"
                prop="executePattern">
        <Select v-model="formValidate.executePattern"
                style="width:350px">
          <Option value="0">关机</Option>
          <Option value="1">系统重启</Option>
          <Option value="2">微波重启</Option>
          <Option value="3">数字重启</Option>
        </Select>
      </FormItem>      
      <FormItem>
        <Button type="primary"
                @click="submitData">确定</Button>
        <Button style="margin-left: 8px"
                @click="cancel">取消</Button>
      </FormItem>
      <Modal v-model="modal1"
             @on-ok="sure"
             title="撤消更改">
        <p>确定要撤消刚才做出的更改吗?</p>
      </Modal>
    </Form>
  </div>

</template>
<script>
import { post } from '@/api/axios.js'
import { mapGetters } from 'vuex'
export default {
  props: {'updateAll':Boolean,'device':Number},
  data () {
    return {
      modal1: false,
      saveform: {},
      formValidate: {
        heartbeat: 1,
        executePattern: '0',
      },
      ruleValidate: {
        executePattern: [
          { required: true, message: '请选择执行方式', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['ip', 'hostlist'])
  },
  methods: {
    _getdate (date) {
      if (date.length !== 0) { this.localDate = date }
    },
    cancel (name) {
      this.modal1 = true
      this.$nextTick(() => { this.$refs[name].resetFields() })
    },
    sure () {
      this.cancel('formValidate')
      this.modal1 = false
    },
    submitData () {
      this.$refs['formValidate'].validate((valid) => {
        if (valid) {
          let urlN = 'deployment/sendDeviceRestoration/communication'
            this.sendRequest(urlN)
        } else {
          this.$Message.error('输入不完整')
        }
      })
    },
    sendRequest (url) {
      let splitetime = new Date().toISOString()
      splitetime = splitetime.replace('T', ' ')
      splitetime = splitetime.replace('Z', '')
      splitetime = splitetime.split(' ')
      let splitdata = splitetime[0].split('-').join('')
      let splittimes = splitetime[1].split(':').join('').replace('.', '')
      if(this.updateAll==false){
        this.updateAll=0
      }else if(this.updateAll==true){
        this.updateAll=1
      }
      let obj = { 'timeNow': splitdata + splittimes,'updateAll':this.updateAll, 'executePattern': this.formValidate.executePattern, 'host': this.hostlist[this.device-1].host }
      post(url, obj).then((data) => {
         if (data.code === 1) {
          setTimeout(() => {
            // 发送成功将表单数据存到本地
            storage.set(this.equipmentID, { 'date': obj })
            // 清空表单，避免下次打开有初始值
      this.$refs['formValidate'].resetFields()
            this.$Message.success({
              content: '指令发送成功',
              duration: 1
            })
          }, 500)
        } else {
          this.$Message.error({
            content: '指令提交失败',
            duration: 1
          })
        }
      }).catch(() => {
        this.$Message.error({
          content: '网络请求出错',
          duration: 1
        })
      })
    }
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  padding: 10px 0 0 0;
  position: relative;
}
</style>
