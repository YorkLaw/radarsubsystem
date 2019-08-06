<template>
  <div class="content">
    <Form ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="100">
      <FormItem label="信息长度"
                prop="length">
        <InputNumber v-model="formValidate.length"
                     :max="20"
                     :min="1"
                     style="width:50px">
        </InputNumber>
      </FormItem>
      <FormItem label="任务流水号">
        <Row>
          <Col span="8">
          <FormItem prop="date">
            <DatePicker type="date"
                        placeholder="Select date"
                        v-model="formValidate.date"
                        @on-change="_getdate"></DatePicker>
          </FormItem>
          </Col>
          <Col span="1"
               style="text-align: center">-</Col>
          <Col span="4">
          <FormItem prop="h">
            <Input v-model="formValidate.h"
                   type="number"
                   placeholder="h"
                   style="width:50px">
            </Input>
          </FormItem>
          </Col>
          <Col span="1"
               style="text-align: center">:</Col>
          <Col span="4">
          <FormItem prop="min">
            <Input v-model="formValidate.min"
                   type="number"
                   placeholder="min"
                   style="width:50px">
            </Input>
          </FormItem>
          </Col>
          <Col span="1"
               style="text-align: center">:</Col>
          <Col span="4">
          <FormItem prop="ms">
            <Input v-model="formValidate.ms"
                   type="number"
                   placeholder="ms"
                   style="width:50px">
            </Input>
          </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="指令有效标记"
                prop="mark">
        <Select v-model="formValidate.mark"
                style="width:350px">
          <Option value="common">所有子系统</Option>
          <Option value="radar">雷达侦察子系统</Option>
          <Option value="enemy">敌我侦查子系统</Option>
        </Select>
      </FormItem>
      <FormItem prop="radinspection"
                label="雷达侦察指令">
        <Input v-model="formValidate.radinspection"
               placeholder="雷达侦察指令"
               style="width:150px"></Input>
      </FormItem>
      <FormItem prop="eneinspection"
                label="敌我侦察指令">
        <Input v-model="formValidate.eneinspection"
               placeholder="敌我侦察指令"
               style="width:150px"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">确定</Button>
        <Button style="margin-left: 8px">取消</Button>
      </FormItem>
    </Form>
  </div>

</template>
<script>
import { GMTToStr } from '@/api/transformDate'
import { post } from '@/api/axios.js'
import * as storage from '@/api/localstorage.js'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      formValidate: {
        length: '1',
        date: '2019-07-07',
        h: '10',
        min: '10',
        ms: '10',
        mark: '',
        radinspection: '',
        eneinspection: ''
      },
      ruleValidate: {
        length: [
          { required: true, message: '请选择信息长度', trigger: 'blur' }
        ],
        date: [
          { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
        ],
        h: [
          { required: true, type: 'string', message: '小时', trigger: 'change' }
        ],
        min: [
          { required: true, type: 'string', message: '分钟', trigger: 'change' }
        ],
        ms: [
          { required: true, type: 'string', message: '毫秒', trigger: 'change' }
        ],
        mark: [
          { required: true, message: '请选择指令有效标记', trigger: 'change' }
        ],
        radinspection: [
          { required: true, message: '请输入雷达侦察指令', trigger: 'change' }
        ],
        eneinspection: [
          { required: true, message: '请输入敌我侦察指令', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    _getdate (date) {
      if (date.length !== 0) { this.localDate = date }
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
