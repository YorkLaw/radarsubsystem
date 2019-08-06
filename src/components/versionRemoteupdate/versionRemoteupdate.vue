<template>
  <div class="content">
    <Form ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="100">
      <FormItem label="指令操作码"
                prop="cmd">
        <Select v-model="formValidate.cmd"
                style="width:350px">
          <Option value="0">查询版本信息</Option>
          <Option value="1">更新软件版本</Option>
        </Select>
      </FormItem>
      <FormItem prop="softwareID"
                label="软件ID号">
        <Input v-model="formValidate.softwareID"
               placeholder="软件ID号"
               style="width:150px"></Input>
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
import { nowTime } from '@/api/getNowtime'
import { post } from '@/api/axios.js'
import * as storage from '@/api/localstorage.js'
import { mapGetters } from 'vuex'
export default {
  props: {'updateAll':Boolean,'device':Number},
  computed: {
    ...mapGetters(['ip', 'hostlist'])
  },
  data () {
    return {
      modal1: false,
      saveform: {},
      formValidate: {
        cmd: '0',
        softwareID: ''
      },
      ruleValidate: {
        cmd: [
          { required: true, message: '请选择指令操作码', trigger: 'change' }
        ],
        softwareID: [
          { required: true, message: '请输入软件ID号', trigger: 'blur' }
        ]
      }
    }
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
          let urlN = '/deployment/sendSoftwareUpdateCMD/communication'
            this.sendRequest(urlN)
        } else {
          this.$Message.error('输入不完整')
        }
      })
    },
    sendRequest (url) {
      if(this.updateAll==false){
        this.updateAll=0
      }else if(this.updateAll==true){
        this.updateAll=1
      }
      let obj = { timeNow: nowTime(),updateAll:this.updateAll, cmd: this.formValidate.cmd, softwareID: this.formValidate.softwareID, host: this.hostlist[this.device-1].host }
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
