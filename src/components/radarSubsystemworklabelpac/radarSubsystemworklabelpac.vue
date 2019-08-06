<template>
  <div class="content">
    <FormItem label="发方节点号"
              prop="radarSub[0].sendnum">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sendnum}}</Card>
    </FormItem>
    <FormItem label="收方节点号"
              prop="radarSub[0].takenum">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].takenum}}</Card>
    </FormItem>
    <FormItem label="反馈指令序号"
              prop="radarSub[0].feedbacknum">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].feedbacknum}}</Card>
    </FormItem>
    <FormItem label="指令接收状态"
              prop="radarSub[0].insreceivestatus">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].insreceivestatus}}</Card>
    </FormItem>
    <FormItem label="前端工作温度"
              prop="radarSub[0].webworkheat">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].webworkheat}}</Card>
    </FormItem>
    <FormItem label="分机工作温度"
              prop="radarSub[0].cabliworkheat">
      <Card class="lishow"
            style="padding:0"
            title="单位0.0078125°C">{{radarSub[0].cabliworkheat}}</Card>
    </FormItem>
    <p style="font-size: 14px;font-weight: 800;margin-left: 10px;">测向处理组件状态</p>
    <FormItem label="AD"
              prop="radarSub[0].besidemanage.AD">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.AD}}</Card>
    </FormItem>
    <FormItem label="K7A"
              prop="radarSub[0].besidemanage.K7A">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.K7A}}</Card>
    </FormItem>
    <FormItem label="K7B"
              prop="radarSub[0].besidemanage.K7B">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.K7B}}</Card>
    </FormItem>
    <FormItem label="Z7030"
              prop="radarSub[0].besidemanage.Z7030">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.Z7030}}</Card>
    </FormItem>
    <FormItem label="PL_DDR"
              prop="radarSub[0].besidemanage.PL_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.PL_DDR}}</Card>
    </FormItem>
    <FormItem label="PS_DDR"
              prop="radarSub[0].besidemanage.PS_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.PS_DDR}}</Card>
    </FormItem>
    <FormItem label="K7_DDR"
              prop="radarSub[0].besidemanage.K7_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.K7_DDR}}</Card>
    </FormItem>
    <FormItem label="K7A_GTX"
              prop="radarSub[0].besidemanage.K7A_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.K7A_GTX}}</Card>
    </FormItem>
    <FormItem label="K7B_GTX"
              prop="radarSub[0].besidemanage.K7B_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.K7B_GTX}}</Card>
    </FormItem>
    <FormItem label="Z7_GTX"
              prop="radarSub[0].besidemanage.Z7_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].besidemanage.Z7_GTX}}</Card>
    </FormItem>
    <p style="font-size: 14px;font-weight: 800;margin-left: 10px;">侦察处理组件状态</p>
    <FormItem label="AD"
              prop="radarSub[0].reconnoitre.AD">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.AD}}</Card>
    </FormItem>
    <FormItem label="K7A"
              prop="radarSub[0].reconnoitre.K7A">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.K7A}}</Card>
    </FormItem>
    <FormItem label="K7B"
              prop="radarSub[0].reconnoitre.K7B">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.K7B}}</Card>
    </FormItem>
    <FormItem label="Z7030"
              prop="radarSub[0].reconnoitre.Z7030">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.Z7030}}</Card>
    </FormItem>
    <FormItem label="PL_DDR"
              prop="radarSub[0].reconnoitre.PL_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.PL_DDR}}</Card>
    </FormItem>
    <FormItem label="PS_DDR"
              prop="radarSub[0].reconnoitre.PS_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.PS_DDR}}</Card>
    </FormItem>
    <FormItem label="K7_DDR"
              prop="radarSub[0].reconnoitre.K7_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.K7_DDR}}</Card>
    </FormItem>
    <FormItem label="K7A_GTX"
              prop="radarSub[0].reconnoitre.K7A_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.K7A_GTX}}</Card>
    </FormItem>
    <FormItem label="K7B_GTX"
              prop="radarSub[0].reconnoitre.K7B_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.K7B_GTX}}</Card>
    </FormItem>
    <FormItem label="Z7_GTX"
              prop="radarSub[0].reconnoitre.Z7_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].reconnoitre.Z7_GTX}}</Card>
    </FormItem>
    <p style="font-size: 14px;font-weight: 800;margin-left: 10px;">信号分选组件状态</p>
    <FormItem label="DSP_A"
              prop="radarSub[0].signal.DSP_A">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].signal.DSP_A}}</Card>
    </FormItem>
    <FormItem label="DSP_B"
              prop="radarSub[0].signal.DSP_B">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].signal.DSP_B}}</Card>
    </FormItem>
    <FormItem label="K7"
              prop="radarSub[0].signal.K7">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].signal.K7}}</Card>
    </FormItem>
    <FormItem label="DSP_A_DDR"
              prop="radarSub[0].signal.DSP_A_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].signal.DSP_A_DDR}}</Card>
    </FormItem>
    <FormItem label="DSP_B_DDR"
              prop="radarSub[0].signal.DSP_B_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].signal.DSP_B_DDR}}</Card>
    </FormItem>
    <FormItem label="DSP_A_SRIO"
              prop="radarSub[0].signal.DSP_A_SRIO">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].signal.DSP_A_SRIO}}</Card>
    </FormItem>
    <FormItem label="DSP_B_SRIO"
              prop="radarSub[0].signal.DSP_B_SRIO">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].signal.DSP_B_SRIO}}</Card>
    </FormItem>
    <FormItem label="K7_GTX"
              prop="radarSub[0].signal.K7_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].signal.K7_GTX}}</Card>
    </FormItem>
    <p style="font-size: 14px;font-weight: 800;margin-left: 10px;">系统控制组件状态</p>
    <FormItem label="DSP"
              prop="radarSub[0].sysctrl.DSP">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sysctrl.DSP}}</Card>
    </FormItem>
    <FormItem label="K7"
              prop="radarSub[0].sysctrl.K7">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sysctrl.K7}}</Card>
    </FormItem>
    <FormItem label="Z7030"
              prop="radarSub[0].sysctrl.Z7030">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sysctrl.Z7030}}</Card>
    </FormItem>
    <FormItem label="PL_DDR"
              prop="radarSub[0].sysctrl.PL_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sysctrl.PL_DDR}}</Card>
    </FormItem>
    <FormItem label="PS_DDR"
              prop="radarSub[0].sysctrl.PS_DDR">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sysctrl.PS_DDR}}</Card>
    </FormItem>
    <FormItem label="DSP_SRIO"
              prop="radarSub[0].sysctrl.DSP_SRIO">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sysctrl.DSP_SRIO}}</Card>
    </FormItem>
    <FormItem label="K7_GTX"
              prop="radarSub[0].sysctrl.K7_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sysctrl.K7_GTX}}</Card>
    </FormItem>
    <FormItem label="Z7_GTX"
              prop="radarSub[0].sysctrl.Z7_GTX">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].sysctrl.Z7_GTX}}</Card>
    </FormItem>
    <p style="font-size: 14px;font-weight: 800;margin-left: 10px;">中频存储组件状态</p>
    <FormItem label="SATA_1"
              prop="radarSub[0].save.SATA_1">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].save.SATA_1}}</Card>
    </FormItem>
    <FormItem label="SATA_2"
              prop="radarSub[0].save.SATA_2">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].save.SATA_2}}</Card>
    </FormItem>
    <FormItem label="SATA_3"
              prop="radarSub[0].save.SATA_3">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].save.SATA_3}}</Card>
    </FormItem>
    <FormItem label="SATA_4"
              prop="radarSub[0].save.SATA_4">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].save.SATA_4}}</Card>
    </FormItem>
    <br/>
    <FormItem label="全脉冲个数统计"
              prop="radarSub[0].pulsenum">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].pulsenum}}</Card>
    </FormItem>
    <FormItem label="辐射源数据包统计"
              prop="radarSub[0].radiant">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].radiant}}</Card>
    </FormItem>
    <FormItem label="中频数据统计"
              prop="radarSub[0].IFdata">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].IFdata}}</Card>
    </FormItem>
    <FormItem label="设备编号"
              prop="radarSub[0].devicenum">
      <Card class="lishow"
            style="padding:0">{{radarSub[0].devicenum}}</Card>
    </FormItem>
    </Form>
  </div>

</template>
<script>
import { GMTToStr } from '@/api/transformDate'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      radarSub: [{
        sendnum: '',
        takenum: '',
        feedbacknum: '',
        insreceivestatus: '',
        webworkheat: '',
        cabliworkheat: '',
        besidemanage: {
          AD: '',
          K7A: '',
          K7B: '',
          Z7030: '',
          PL_DDR: '',
          PS_DDR: '',
          K7_DDR: '',
          K7A_GTX: '',
          K7B_GTX: '',
          Z7_GTX: '',        },
        reconnoitre: {
          AD: '',
          K7A: '',
          K7B: '',
          Z7030: '',
          PL_DDR: '',
          PS_DDR: '',
          K7_DDR: '',
          K7A_GTX: '',
          K7B_GTX: '',
          Z7_GTX: '',        },
        signal: {
          DSP_A: '',
          DSP_B: '',
          K7: '',
          DSP_A_DDR: '',
          DSP_B_DDR: '',
          DSP_A_SRIO: '',
          DSP_B_SRIO: '',
          K7_GTX
        },
        sysctrl: {
          DSP: '',
          K7: '',
          Z7030: '',
          PL_DDR: '',
          PS_DDR: '',
          DSP_SRIO: '',
          K7_GTX: '',
          Z7_GTX: '',
        },
        save: {
          SATA_1: '',
          SATA_2: '',
          SATA_3: '',
          SATA_4: '',
        },
        pulsenum:'',
        radiant:'',
        IFdata:'',
        devicenum:'',
      }],

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
.lishow {
  width: 110px;
  height: 30px;
  padding: 0;
  font-size: 12px;
  line-height: 0;
}
</style>
