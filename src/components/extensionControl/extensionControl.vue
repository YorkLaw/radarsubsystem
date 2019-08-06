<template>
  <div class="content">
    <Form ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="100"
          inline>
      <FormItem label="秒脉冲"
                prop="pulse">
        <Select v-model="formValidate.pulse"
                placeholder="选择脉冲"
                style="width:120px">
          <Option value="0">内部</Option>
          <Option value="1">外部</Option>
        </Select>
      </FormItem>
      <FormItem label="门限调节"
                prop="threshold">
        <InputNumber v-model="formValidate.threshold"
                     placeholder="单位1dB"
                     :min="1"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="全脉冲数量"
                prop="overallpulse">
        <InputNumber v-model="formValidate.threshold"
                     placeholder="单位100个"
                     :min="1"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="最小幅度"
                prop="minamplitude">
        <InputNumber v-model="formValidate.minamplitude"
                     placeholder="单位0.5dB"
                     :min="0"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="最大幅度"
                prop="maxamplitude">
        <InputNumber v-model="formValidate.maxamplitude"
                     placeholder="单位0.5dB"
                     :min="0"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="最小脉宽"
                prop="minPulsewidth">
        <InputNumber v-model="formValidate.minPulsewidth"
                     placeholder="单位100ns"
                     :min="0"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="最大脉宽"
                prop="maxPulsewidth">
        <InputNumber v-model="formValidate.maxPulsewidth"
                     placeholder="单位100ns"
                     :min="0"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="筛选最大频率"
                prop="filterMaximumFrequency">
        <InputNumber v-model="formValidate.filterMaximumFrequency"
                     placeholder="单位:MHz"
                     :min="0"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="筛选最小频率"
                prop="filterMinimumFrequency">
        <InputNumber v-model="formValidate.filterMinimumFrequency"
                     placeholder="单位:MHz"
                     :min="0"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="屏蔽最大频率"
                prop="shieldingMaximumFrequency">
        <InputNumber v-model="formValidate.shieldingMaximumFrequency"
                     placeholder="单位:MHz"
                     :min="0"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="屏蔽最小频率"
                prop="shieldingMinimumFrequency">
        <InputNumber v-model="formValidate.shieldingMinimumFrequency"
                     placeholder="单位:MHz"
                     :min="0"
                     style="width:120px">
        </InputNumber>
      </FormItem>
      <FormItem label="默认值更新"
                prop="defalutUpdate">
        <Select v-model="formValidate.defalutUpdate"
                placeholder="是否更新"
                style="width:120px">
          <Option value="0">不更新</Option>
          <Option value="1">更新</Option>
        </Select>
      </FormItem>
      <p style="font-size: 14px;font-weight: 800;margin-left: 10px;">分机控制字</p>
      <FormItem label="看门狗"
                prop="dog">
        <Select v-model="formValidate.dog"
                placeholder="是否打开"
                style="width:120px">
          <Option value="0">打开</Option>
          <Option value="1">关闭</Option>
        </Select>
      </FormItem>
      <FormItem label="工作状态"
                prop="state">
        <Select v-model="formValidate.state"
                placeholder="是否发送状态"
                style="width:120px">
          <Option value="0">不发送</Option>
          <Option value="1">发送</Option>
        </Select>
      </FormItem>
      <FormItem label="合批开关"
                prop="open">
        <Select v-model="formValidate.open"
                placeholder="打开/关闭"
                style="width:120px">
          <Option value="0">打开</Option>
          <Option value="1">关闭</Option>
        </Select>
      </FormItem>
      <FormItem label="传输脉冲"
                prop="transformModal">
        <Select v-model="formValidate.transformModal"
                placeholder="选择类型"
                style="width:120px">
          <Option value="0">原始脉冲</Option>
          <Option value="1">校正后全脉冲</Option>
          <Option value="2">相位差校正值</Option>
          <Option value="3">校正后相位差</Option>
        </Select>
      </FormItem>
      <FormItem label="分选预处理模式"
                prop="dealmodal">
        <Select v-model="formValidate.dealmodal"
                placeholder="选择类型"
                style="width:120px">
          <Option value="0">频率预处理</Option>
          <Option value="1">频率+角频率</Option>
        </Select>
      </FormItem>
      <FormItem label="校准模式"
                prop="calibrationModal">
        <Select v-model="formValidate.calibrationModal"
                placeholder="选择模式"
                style="width:120px">
          <Option value="0">实时校准</Option>
          <Option value="1">固定校准</Option>
        </Select>
      </FormItem>
      <FormItem label="校正表"
                prop="selectcalibration">
        <Select v-model="formValidate.selectcalibration"
                placeholder="需要的操作"
                style="width:120px">
          <Option value="0">等待</Option>
          <Option value="1">清零校正表接收缓存</Option>
          <Option value="2">上传固定校正表</Option>
          <Option value="3">上传残差校正表</Option>
        </Select>
      </FormItem>
      <FormItem label="合路选择"
                prop="Combinerchoice">
        <Select v-model="formValidate.Combinerchoice"
                placeholder="选择类型"
                style="width:120px">
          <Option value="0">不融合</Option>
          <Option value="1">全脉冲融合</Option>
          <Option value="2">辐射源融合</Option>
        </Select>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { post } from '@/api/axios.js'
import * as storage from '@/api/localstorage.js'
export default {
  data () {
    const validateMobile = (rule, value, callback) => {
      if (parseInt(value) < 0) {
        callback(new Error('数值不能为负'))
      } else {
        callback()
      }
    }
    return {
      equipmentID: '',
      formValidate: {
        pulse: '0', // 下面为分机控制字字段
        dog: '0',
        state: '0',
        open: '0',
        transformModal: '0',
        dealmodal: '0',
        calibrationModal: '0',
        selectcalibration: '0',
        Combinerchoice: '0', // 分机控制字段结束
        threshold: 1,
        overallpulse: 100,
        minamplitude: 0,
        maxamplitude: 255,
        minPulsewidth: 1,
        maxPulsewidth: 30000,
        filterMaximumFrequency: 955,
        filterMinimumFrequency: 545,
        shieldingMaximumFrequency: 0,
        shieldingMinimumFrequency: 0,
        defalutUpdate: '0'
      },
      ruleValidate: {
        pulse: [
          { required: true, message: '请选择脉冲', trigger: 'change' }
        ],
        threshold: [
          { required: true, type: 'number', message: '输入门限', trigger: 'blur' },
          { validator: validateMobile, trigger: 'blur' }
        ],
        overallpulse: [
          { required: true, type: 'number', message: '输入全脉冲数量', trigger: 'blur' }
        ],
        minamplitude: [
          { required: true, type: 'number', message: '输入最小幅度', trigger: 'blur' }
        ],
        maxamplitude: [
          { required: true, type: 'number', message: '输入最大幅度', trigger: 'blur' }
        ],
        minPulsewidth: [
          { required: true, type: 'number', message: '输入最小脉宽', trigger: 'blur' }
        ],
        maxPulsewidth: [
          { required: true, type: 'number', message: '输入最大脉宽', trigger: 'blur' }
        ],
        filterMaximumFrequency: [
          { required: true, type: 'number', message: '最大频率', trigger: 'blur' }
        ],
        filterMinimumFrequency: [
          { required: true, type: 'number', message: '最小频率', trigger: 'blur' }
        ],
        shieldingMaximumFrequency: [
          { required: true, type: 'number', message: '屏蔽最大频率', trigger: 'blur' }
        ],
        shieldingMinimumFrequency: [
          { required: true, type: 'number', message: '屏蔽最小频率', trigger: 'blur' }
        ],
        defalutUpdate: [
          { required: true, type: 'string', message: '选择是否更新', trigger: 'change' }
        ],
        dog: [
          { required: true, type: 'string', message: '看门狗开关', trigger: 'change' }
        ],
        state: [
          { required: true, type: 'string', message: '是否发送工作状态', trigger: 'change' }
        ],
        open: [
          { required: true, type: 'string', message: '合批开关', trigger: 'change' }
        ],
        transformModal: [
          { required: true, type: 'string', message: '选择脉冲类型', trigger: 'change' }
        ],
        dealmodal: [
          { required: true, type: 'string', message: '选择预处理模式', trigger: 'change' }
        ],
        calibrationModal: [
          { required: true, type: 'string', message: '校准模式', trigger: 'change' }
        ],
        selectcalibration: [
          { required: true, type: 'string', message: '校准选项', trigger: 'change' }
        ],
        Combinerchoice: [
          { required: true, type: 'string', message: '合路选择', trigger: 'change' }
        ]
      }

    }
  },
  methods: {
    ok () {
      this.handleSubmit('formValidate')
    },
    cancel (name) {
      this.modal1 = true;
      this.$nextTick(() => { this.$refs[name].resetFields(); })
    },
    sure () {
      this.cancel('formValidate')
      this.modal1 = false;
    },
    saveData () {
      this.saveform.formValidate = this.formValidate
      this.saveform.isOnly = this.isOnly
    },
    handleSubmit (name) {
      //   console.log(this.mapformValidate())
      this.$refs[name].validate((valid) => {
        if (valid) {
          // let extensionControlCMD = this.mapformValidate()
          // extensionControlCMD.host = '192.168.31.69'
          //   let obj = { 'extensionControlCMD': this.mapformValidate(), 'host': '192.168.31.69' }
          // console.log(extensionControlCMD)
          let urlN = '/deployment/sendExtensionControlCMD/communication'
          let urlY = '/deployment/sendAllExtensionControl/communication'
          if (this.isOnly === 'NO') {
            this.sendRequst(urlN)
          } else if (this.isOnly === 'YES') {
            this.sendRequst(urlY)
          }
        } else {
          this.$Message.error('输入不完整')
          return this.changeLoading()
        }
      })
    },
    mapformValidate () {
      // 返回分机控制字里的状态码
      let obj = {
        dog: '',
        state: '',
        open: '',
        transformModal: '',
        dealmodal: '',
        calibrationModal: '',
        selectcalibration: '',
        Combinerchoice: '' // 分机控制字段结束
      }
      let str = ''
      let result = {}
      for (let items in this.formValidate) {
        result[items] = this.formValidate[items]
      }
      for (let items in obj) {
        if (this.formValidate[items]) {
          str += this.formValidate[items]
          delete result[items]
        }
      }
      result.extensionControlCharacter = str
      return result
    },
    sendRequst (url) {
      let extensionControlCMD = this.mapformValidate()
      datelocal.host = this.hostlist[this.device - 1].host
      post(url, extensionControlCMD).then((data) => {
        if (data.code === 1) {
          setTimeout(() => {
            // 发送成功将表单数据存到本地
            storage.set(this.equipmentID, { 'extention': this.formValidate })
            this.cancel('formValidate')
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
          return this.changeLoading()
        }
      }).catch(() => {
        this.$Message.error({
          content: '网络请求出错',
          duration: 1
        })
      })
    },
    setId (id) {
      this.equipmentID = id
    }
  },
  computed: {
    ...mapGetters(['hostlist'])
  }
}
</script>
<style lang='stylus' scoped>
.content
  width 100%
  padding 10px 0 0 0
  // margin-left 5%;
  position relative
</style>
