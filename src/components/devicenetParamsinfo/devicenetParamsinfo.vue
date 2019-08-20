<template>
  <div class="content">
    <Form ref="formValidate"
          :label-width="105">
      <FormItem label="指令操作码"
                prop="cmd">
        <Card class="lishow"
              style="padding:0">查询信息</Card>
      </FormItem>
      <div class="inp">
        <FormItem prop="networkIP1"
                  label="网络IP地址1">
          <Card class="lishow"
                style="padding:0">{{networkIP1}}</Card>
        </FormItem>
        <FormItem prop="networkMacIP1"
                  label="网络MAC地址1">
          <Card class="lishow"
                style="padding:0">{{networkMacIP1}}</Card>
        </FormItem>
        <FormItem prop="networkMessage1"
                  label="网络端口信息1">
          <Card class="lishow"
                style="padding:0">{{networkMessage1}}</Card>
        </FormItem>
        <FormItem prop="networkIP2"
                  label="网络IP地址2">
          <Card class="lishow"
                style="padding:0">{{networkIP2}}</Card>
        </FormItem>
        <FormItem prop="networkMacIP2"
                  label="网络MAC地址2">
          <Card class="lishow"
                style="padding:0">{{networkMacIP2}}</Card>
        </FormItem>
        <FormItem prop="networkMessage2"
                  label="网络端口信息2">
          <Card class="lishow"
                style="padding:0">{{networkMessage2}}</Card>
        </FormItem>
        <FormItem prop="networkIP3"
                  label="网络IP地址3">
          <Card class="lishow"
                style="padding:0">{{networkIP3}}</Card>
        </FormItem>
        <FormItem prop="networkMacIP3"
                  label="网络MAC地址3">
          <Card class="lishow"
                style="padding:0">{{networkMacIP3}}</Card>
        </FormItem>
        <FormItem prop="networkMessage3"
                  label="网络端口信息3">
          <Card class="lishow"
                style="padding:0">{{networkMessage3}}</Card>
        </FormItem>
        <FormItem prop="networkIP4"
                  label="网络IP地址4">
          <Card class="lishow"
                style="padding:0">{{networkIP4}}</Card>
        </FormItem>
        <FormItem prop="networkMacIP4"
                  label="网络MAC地址4">
          <Card class="lishow"
                style="padding:0">{{networkMacIP4}}</Card>
        </FormItem>
        <FormItem prop="networkMessage4"
                  label="网络端口信息4">
          <Card class="lishow"
                style="padding:0">{{networkMessage4}}</Card>
        </FormItem>
        <FormItem prop="networkIP5"
                  label="网络IP地址5">
          <Card class="lishow"
                style="padding:0">{{networkIP5}}</Card>
        </FormItem>
        <FormItem prop="networkMacIP5"
                  label="网络MAC地址5">
          <Card class="lishow"
                style="padding:0">{{networkMacIP5}}</Card>
        </FormItem>
        <FormItem prop="networkMessage5"
                  label="网络端口信息5">
          <Card class="lishow"
                style="padding:0">{{networkMessage5}}</Card>
        </FormItem>
        <FormItem prop="networkIP6"
                  label="网络IP地址6">
          <Card class="lishow"
                style="padding:0">{{networkIP6}}</Card>
        </FormItem>
        <FormItem prop="networkMacIP6"
                  label="网络MAC地址6">
          <Card class="lishow"
                style="padding:0">{{networkMacIP6}}</Card>
        </FormItem>
        <FormItem prop="networkMessage6"
                  label="网络端口信息6">
          <Card class="lishow"
                style="padding:0">{{networkMessage6}}</Card>
        </FormItem>

      </div>
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
      cmd: 'search',
      networkIP1: '',
      networkMacIP1: '',
      networkMessage1: '',
      networkIP2: '',
      networkMacIP2: '',
      networkMessage2: '',
      networkIP3: '',
      networkMacIP3: '',
      networkMessage3: '',
      networkIP4: '',
      networkMacIP4: '',
      networkMessage4: '',
      networkIP5: '',
      networkMacIP5: '',
      networkMessage5: '',
      networkIP6: '',
      networkMacIP6: '',
      networkMessage6: '',
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.content {
  width: 100%;
  padding: 10px 0 0 0;
  position: relative;
}
/* .inp{
  display: flex;
  justify-content: space-between;
  width: 100%;
} */
.inp div {
  width: 300px;
  display: inline-block;
}
.lishow {
  width: 132px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  padding: 0;
  line-height: 0;
}
</style>
