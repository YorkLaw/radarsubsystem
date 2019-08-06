<template>
  <div class="content">
    <Form ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="110">
      <FormItem label="指令有效标记"
                prop="cmd"
                style="display:inline-block">
        <Select v-model="formValidate.cmd"
                style="width:350px">
          <Option value="1">所有子系统</Option>
          <Option value="2">雷达侦察子系统</Option>
          <Option value="3">敌我侦查子系统</Option>
        </Select>
      </FormItem>
      <p style="font-size: 14px;font-weight: 800;margin-left: 10px;">雷达侦察指令</p>
      <div class="inp">
        <FormItem label="秒脉冲"
                  prop="pulse"
                  style="display:inline-block">
          <Select v-model="formValidate.pulse"
                  placeholder="选择脉冲"
                  style="width:120px;display:inline-block">
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
          <InputNumber v-model="formValidate.overallpulse"
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
        <p style="font-size: 14px;font-weight: 800;margin-left: 10px;">敌我侦察指令</p>
        <FormItem label="工作方式"
                  prop="workPattern">
          <Select v-model="formValidate.workPattern"
                  placeholder="选择模式"
                  style="width:120px">
            <Option value="0">自检</Option>
            <Option value="1">工作</Option>
          </Select>
        </FormItem>
        <p style="font-size: 12px;font-weight: 800;margin-left: 10px;">带宽选择</p>
        <FormItem label="1030"
                  prop="bandWidth1">
          <Select v-model="formValidate.bandWidth1"
                  style="width:120px">
            <Option value="0">4M</Option>
            <Option value="1">8M</Option>
            <Option value="2">16M</Option>
            <Option value="3">24M</Option>
          </Select>
        </FormItem>
        <FormItem label="1090"
                  prop="bandWidth2">
          <Select v-model="formValidate.bandWidth2"
                  style="width:120px">
            <Option value="0">4M</Option>
            <Option value="1">8M</Option>
            <Option value="2">16M</Option>
            <Option value="3">24M</Option>
          </Select>
        </FormItem>
        <FormItem label="740"
                  prop="bandWidth3">
          <Select v-model="formValidate.bandWidth3"
                  style="width:120px">
            <Option value="0">4M</Option>
            <Option value="1">8M</Option>
          </Select>
        </FormItem>
        <FormItem label="837.5"
                  prop="bandWidth4">
          <Select v-model="formValidate.bandWidth4"
                  style="width:120px">
            <Option value="0">4M</Option>
            <Option value="1">8M</Option>
          </Select>
        </FormItem>
        <FormItem label="1532"
                  prop="bandWidth5">
          <Select v-model="formValidate.bandWidth5"
                  style="width:120px">
            <Option value="1">8M</Option>
            <Option value="3">24M</Option>
          </Select>
        </FormItem>
        <FormItem label="1464M"
                  prop="bandWidth6">
          <Select v-model="formValidate.bandWidth6"
                  style="width:120px">
            <Option value="1">8M</Option>
            <Option value="3">24M</Option>
          </Select>
        </FormItem>
        <FormItem label="内外秒脉冲选择"
                  prop="PulseChoice">
          <Select v-model="formValidate.PulseChoice"
                  style="width:120px">
            <Option value="0">外部</Option>
            <Option value="1">内部</Option>
          </Select>
        </FormItem>
        <FormItem label="天线选择"
                  prop="antennaSelection">
          <Select v-model="formValidate.antennaSelection"
                  style="width:120px">
            <Option value="0">合批</Option>
            <Option value="1">天线1</Option>
            <Option value="2">天线2</Option>
            <Option value="3">天线3</Option>
          </Select>
        </FormItem>
        <FormItem label="分机IP重构"
                  prop="IPReconsitution">
          <Select v-model="formValidate.IPReconsitution"
                  style="width:120px">
            <Option value="0">IP不重构</Option>
            <Option value="1">IP重构</Option>
          </Select>
        </FormItem>
        <FormItem label="中频采集模式"
                  prop="IfAcquisitionMode">
          <Select v-model="formValidate.IfAcquisitionMode"
                  style="width:120px">
            <Option value="0">盲采</Option>
            <Option value="1">VP采</Option>
            <Option value="2">模式采</Option>
          </Select>
        </FormItem>
        <FormItem label="中频采集时间"
                  prop="IfAcquisitionTime">
        <Input v-model="formValidate.IfAcquisitionTime"
               placeholder="time now"
               style="width: 150px" />
        </FormItem>
        <Button type="success" style="margin-right:200px;margin-left:20px"
                @click="getTimeNow">获取中频采集时间</Button>
        <FormItem label="FPGA重构标识"
                  prop="FPGAReconsitution">
          <Select v-model="formValidate.FPGAReconsitution"
                  style="width:130px">
            <Option value="5533">FPGA1重构烧写</Option>
            <Option value="5522">FPGA1重构擦除</Option>
            <Option value="BB33">FPGA2重构擦除</Option>
            <Option value="BB22">FPGA2重构擦除</Option>
          </Select>
        </FormItem>
        <FormItem label="DSP重构标识"
                  prop="DSPReconsitution">
          <Select v-model="formValidate.DSPReconsitution"
                  style="width:120px">
            <Option value="AA33">DSP重构烧写</Option>
            <Option value="AA22">DSP重构擦除</Option>
          </Select>
        </FormItem>
        <FormItem prop="PDW740"
                label="740PDW个数">
        <Input v-model="formValidate.PDW740"
               placeholder="740PDW个数"
               style="width:120px"></Input>
      </FormItem>
        <FormItem prop="PDW837"
                label="837.5PDW个数">
        <Input v-model="formValidate.PDW837"
               placeholder="837.5PDW个数"
               style="width:120px"></Input>
      </FormItem>
        <FormItem prop="PDW1030"
                label="1030PDW个数">
        <Input v-model="formValidate.PDW1030"
               placeholder="1030PDW个数"
               style="width:120px"></Input>
      </FormItem>
        <FormItem prop="PDW1059"
                label="1059PDW个数">
        <Input v-model="formValidate.PDW1059"
               placeholder="1059PDW个数"
               style="width:120px"></Input>
      </FormItem>
        <FormItem prop="PDW1090"
                label="1090PDW个数">
        <Input v-model="formValidate.PDW1090"
               placeholder="1090PDW个数"
               style="width:120px"></Input>
      </FormItem>
      <FormItem label="1464PDW个数"
                  prop="PDW1464">
          <Input v-model="formValidate.PDW1464"
               placeholder="1464PDW个数"
               style="width:120px"></Input>
        </FormItem>
        <FormItem prop="PDW1532"
                label="1532PDW个数">
        <Input v-model="formValidate.PDW1532"
               placeholder="1532PDW个数"
               style="width:120px"></Input>
      </FormItem>
        <p style="font-size: 12px;font-weight: 800;margin-left: 10px;">分机控制</p>
        <FormItem label="看门狗开启"
                  prop="watchdogOpen">
          <Select v-model="formValidate.watchdogOpen"
                  style="width:120px">
            <Option value="0">看门狗开</Option>
            <Option value="1">看门狗关</Option>
          </Select>
        </FormItem>
        <FormItem label="频段模式"
                  prop="frequencyBandmodel">
          <Select v-model="formValidate.frequencyBandmodel"
                  style="width:120px">
            <Option value="0">PDW</Option>
            <Option value="1">IFF</Option>
            <Option value="2">IFF+中频</Option>
          </Select>
        </FormItem>
      </div>
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
import { GMTToStr } from '@/api/transformDate'
import { post } from '@/api/axios.js'
import * as storage from '@/api/localstorage.js'
import { mapGetters } from 'vuex'
export default {
  props: {'updateAll':Boolean,'device':Number},
  data () {
    const validateMobile = (rule, value, callback) => {
      if (parseInt(value) < 0) {
        callback(new Error('数值不能为负'))
      } else {
        callback()
      }
    }
    return {
      modal1: false,
      equipmentID: '',
      formValidate: {
        cmd: '1',
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
        defalutUpdate: '0',
        workPattern: '0',//敌我侦察指令开始
        bandWidth1: '0',//带宽选择字段拼接开始
        bandWidth2: '0',
        bandWidth3: '0',
        bandWidth4: '0',
        bandWidth5: '1',
        bandWidth6: '1',//带宽选择字段拼接结束
        PulseChoice:'0',
        antennaSelection:'0',
        IPReconsitution:'0',
        IfAcquisitionMode:'0',
        IfAcquisitionTime:'',
        FPGAReconsitution:'5533',
        DSPReconsitution:'AA33',
        PDW740:'1',
        PDW837:'1',
        PDW1030:'1',
        PDW1059:'1',
        PDW1090:'1',
        PDW1464:'1',
        PDW1532:'1',
        watchdogOpen:'0',
        frequencyBandmodel:'1',
        count: 1
      },
      ruleValidate: {
        cmd: [
          { required: true, message: '请选择指令有效标记', trigger: 'change' }
        ],
        radinspection: [
          { required: true, message: '请输入雷达侦察指令', trigger: 'blur' }
        ],
        eneinspection: [
          { required: true, message: '请输入敌我侦察指令', trigger: 'blur' }
        ],
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
        ],
        workPattern: [
          { required: true, type: 'string', message: '选择工作方式', trigger: 'change' }
        ],
        bandWidth1: [
          { required: true, type: 'string', message: '选择带宽', trigger: 'change' }
        ],
        bandWidth2: [
          { required: true, type: 'string', message: '选择带宽', trigger: 'change' }
        ],
        bandWidth3: [
          { required: true, type: 'string', message: '选择带宽', trigger: 'change' }
        ],
        bandWidth4: [
          { required: true, type: 'string', message: '选择带宽', trigger: 'change' }
        ],
        bandWidth5: [
          { required: true, type: 'string', message: '选择带宽', trigger: 'change' }
        ],
        bandWidth6: [
          { required: true, type: 'string', message: '选择带宽', trigger: 'change' }
        ],
        PulseChoice: [
          { required: true, type: 'string', message: '选择内外秒脉冲', trigger: 'change' }
        ],
        antennaSelection: [
          { required: true, type: 'string', message: '选择天线', trigger: 'change' }
        ],
        IPReconsitution: [
          { required: true, type: 'string', message: '选择分机IP重构', trigger: 'change' }
        ],
        IfAcquisitionMode: [
          { required: true, type: 'string', message: '选择中频采集模式', trigger: 'change' }
        ],
        IfAcquisitionTime:[
          { required: true, type: 'string', message: '获取中频采集时间', trigger: 'blur' }
        ],
        FPGAReconsitution: [
          { required: true, type: 'string', message: '选择FPGA重构标识', trigger: 'change' }
        ],
        DSPReconsitution: [
          { required: true, type: 'string', message: '选择DSP重构标识', trigger: 'change' }
        ],
       PDW740: [
          { required: true, type: 'string', message: '填写740PDW个数', trigger: 'blur' }
        ],
       PDW837: [
          { required: true, type: 'string', message: '填写837.5PDW个数', trigger: 'blur' }
        ],
       PDW1030: [
          { required: true, type: 'string', message: '填写1030PDW个数', trigger: 'blur' }
        ],
       PDW1059: [
          { required: true, type: 'string', message: '填写1059PDW个数', trigger: 'blur' }
        ],
       PDW1090: [
          { required: true, type: 'string', message: '填写1090PDW个数', trigger: 'blur' }
        ],
         PDW1464: [
          { required: true, type: 'string', message: '选择1464PDW个数', trigger: 'change' }
        ],
       PDW1532: [
          { required: true, type: 'string', message: '填写1532PDW个数', trigger: 'blur' }
        ],
        watchdogOpen: [
          { required: true, type: 'string', message: '选择看门狗开关', trigger: 'change' }
        ],
        frequencyBandmodel: [
          { required: true, type: 'string', message: '选择频段模式', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    _getdate (date) {
      if (date.length !== 0) { this.localDate = date }
    },
    cancel (name) {
      this.modal1 = true;
      this.$nextTick(() => { this.$refs[name].resetFields(); })
    },
    sure () {
      this.cancel('formValidate')
      this.modal1 = false;
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
      return str
    },
    bandWidthMap(){
      let obj = {
        bandWidth1: '',
        bandWidth2: '',
        bandWidth3: '',
        bandWidth4: '',
        bandWidth5: '',
        bandWidth6: '',
      }
       let str = ''
      for (let items in obj) {
        if (this.formValidate[items]) {
          str += this.formValidate[items]
        }
      }
      return str
    },
    extensionMap(){
      let obj = {
         watchdogOpen:'',
        frequencyBandmodel:'',
      }
       let str = ''
      for (let items in obj) {
        if (this.formValidate[items]) {
          str += this.formValidate[items]
        }
      }
      return str
    },
    submitData () {
      console.log(this.device)
      const urlN = '/deployment/sendDeviceWorkFlowCMD/communication'
      this.$refs['formValidate'].validate((valid) => {
         if (valid) {
            this.sendRequest(urlN)
            }else {
          this.$Message.error('输入不完整')
          return this.changeLoading()
        }
      })
    },
    getTimeNow () {
      let myDate = new Date()
      let strDate = myDate.toLocaleString().replace(/[年月]/g, '-').replace(/[日上下午]/g, '').replace(/\//g, '-')
      var time = myDate.getMilliseconds()
      if (time < 10) {
        time = '00' + time
      } else if (time < 100 && time >= 10) {
        time = '0' + time
      } else if (time < 1000 && time >= 100) {
        time = time
      }
      let date = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') + ':' + time
      this.formValidate.IfAcquisitionTime = date
      return date
    },
    timecode(){
      var dataTime = this.getTimeNow().split(' ')
      let splitdata = dataTime[0].split('-').reverse().join(':')
      let splittime = dataTime[1].split(':')
      splittime.splice(2,1)
      let x=splittime.join(':')
      let y=x+":"+splitdata
      return y
    },
    sendRequest (url) {
      var dataTime = this.getTimeNow().split(' ')
      let splitdata = dataTime[0].split('-').join('')
      let splittime = dataTime[1].split(':').join('')
      let extensionControlCharacter = this.mapformValidate()
      let bandwidthChoose = this.bandWidthMap()
      let hierarchicalControl = this.extensionMap()
      let datelocal = this.formValidate
      datelocal.timeCode =this.timecode()
      datelocal.extensionControlCharacter = extensionControlCharacter
      datelocal.bandwidthChoose=bandwidthChoose
      datelocal.hierarchicalControl=hierarchicalControl
      datelocal.host = this.hostlist[this.device-1].host
      datelocal.taskFlowNo=splitdata+splittime
      if(this.updateAll==false){
        this.updateAll=0
      }else if(this.updateAll==true){
        this.updateAll=1
      }
      datelocal.updateAll=this.updateAll
      post(url, datelocal).then((data) => {
        if (data.code === 1) {
          setTimeout(() => {
            storage.set(this.equipmentID, { 'equipmentWorkflow': datelocal})
            this.$refs['formValidate'].resetFields();
            this.$Message.success('设定完成')
          }, 1000)
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
  },
  computed: {
    ...mapGetters(['hostlist'])
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  padding: 10px 0 0 0;
  position: relative;
}
.inp div {
  width: 250px;
  display: inline-block;
}
</style>
