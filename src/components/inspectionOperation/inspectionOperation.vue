<template>
  <div>
    <Card class="tabs" v-show="card">
      <Card v-show="timeshow">
        <Icon type="ios-desktop-outline"
              class="icon" />当前设备: {{this.hostlist[0].host}}&#x3000;&#x3000;更新所有: <i-switch v-model="updateAll" size="small" style="margin-top:-3px;width:40px">
            <span slot="open">是</span><span slot="close">否</span>
        </i-switch>
        <Tabs type="card" style="margin-top:10px">
          <TabPane label="系统校时">
            <systemCalibration ref="sysTime"
                               :updateAll="updateAll"
                               :device="tempdevice"></systemCalibration>
          </TabPane>
          <TabPane label="设备自检">
            <equipmentSelfInspection ref="selfInspection"
                                     :updateAll="updateAll"
                                     :device="tempdevice"></equipmentSelfInspection>
          </TabPane>
          <TabPane label="设备工作流程控制">
            <equipment-workflow ref="workflow"
                                :updateAll="updateAll"
                                :device="tempdevice"></equipment-workflow>
          </TabPane>
          <TabPane label="设备网络参数更新">
            <networkParameterupdating ref="paramsupdate"
                                      :updateAll="updateAll"
                                      :device="tempdevice"></networkParameterupdating>
          </TabPane>
          <TabPane label="软件版本远程更新">
            <versionRemoteupdate ref="versionupdate"
                                 :updateAll="updateAll"
                                 :device="tempdevice"></versionRemoteupdate>
          </TabPane>
          <TabPane label="设备复位">
            <deviceReset ref="devicereset"
                         :updateAll="updateAll"
                         :device="tempdevice"></deviceReset>
          </TabPane>
        </Tabs>
      </Card>
      <Card v-show="timeshow2">
        <Icon type="ios-desktop-outline"
              class="icon" />当前设备: {{this.hostlist[1].host}}&#x3000;&#x3000;更新所有: <i-switch v-model="updateAll" size="small" style="margin-top:-3px;width:40px">
            <span slot="open">是</span>
            <span slot="close">否</span>
        </i-switch>
        <Tabs type="card" style="margin-top:10px">
          <TabPane label="系统校时">
            <system-calibration ref="sysTime"
                                :updateAll="updateAll"
                                :device="tempdevice"></system-calibration>
          </TabPane>
          <TabPane label="设备自检">
            <equipmentSelfInspection ref="selfInspection"
                                     :updateAll="updateAll"
                                     :device="tempdevice"></equipmentSelfInspection>
          </TabPane>
          <TabPane label="设备工作流程控制">
            <equipment-workflow ref="workflow"
                                :updateAll="updateAll"
                                :device="tempdevice"></equipment-workflow>
          </TabPane>
          <TabPane label="设备网络参数更新">
            <networkParameterupdating ref="paramsupdate"
                                      :updateAll="updateAll"
                                      :device="tempdevice"></networkParameterupdating>
          </TabPane>
          <TabPane label="软件版本远程更新">
            <versionRemoteupdate ref="versionupdate"
                                 :updateAll="updateAll"
                                 :device="tempdevice"></versionRemoteupdate>
          </TabPane>
          <TabPane label="设备复位">
            <deviceReset ref="devicereset"
                         :updateAll="updateAll"
                         :device="tempdevice"></deviceReset>
          </TabPane>
        </Tabs>
      </Card>
      <Card v-show="timeshow3">
        <Icon type="ios-desktop-outline"
              class="icon" />当前设备: {{this.hostlist[2].host}}&#x3000;&#x3000;更新所有: <i-switch v-model="updateAll" size="small" style="margin-top:-3px;width:40px">
            <span slot="open">是</span>
            <span slot="close">否</span>
        </i-switch>
        <Tabs type="card" style="margin-top:10px">
          <TabPane label="系统校时">
            <system-calibration ref="sysTime"
                                :updateAll="updateAll"
                                :device="tempdevice"></system-calibration>
          </TabPane>
          <TabPane label="设备自检">
            <equipmentSelfInspection ref="selfInspection"
                                     :updateAll="updateAll"
                                     :device="tempdevice"></equipmentSelfInspection>
          </TabPane>
          <TabPane label="设备工作流程控制">
            <equipment-workflow ref="workflow"
                                :updateAll="updateAll"
                                :device="tempdevice"></equipment-workflow>
          </TabPane>
          <TabPane label="设备网络参数更新">
            <networkParameterupdating ref="paramsupdate"
                                      :updateAll="updateAll"
                                      :device="tempdevice"></networkParameterupdating>
          </TabPane>
          <TabPane label="软件版本远程更新">
            <versionRemoteupdate ref="versionupdate"
                                 :updateAll="updateAll"
                                 :device="tempdevice"></versionRemoteupdate>
          </TabPane>
          <TabPane label="设备复位">
            <deviceReset ref="devicereset"
                         :updateAll="updateAll"
                         :device="tempdevice"></deviceReset>
          </TabPane>
        </Tabs>
      </Card>
    </Card>
  </div>
</template>
<script>
import systemCalibration from 'components/systemCalibration/systemCalibration'
import equipmentSelfInspection from 'components/equipmentSelfInspection/equipmentSelfInspection'
import equipmentWorkflow from 'components/equipmentWorkflow/equipmentWorkflow'
import networkParameterupdating from 'components/networkParameterupdating/networkParameterupdating'
import versionRemoteupdate from 'components/versionRemoteupdate/versionRemoteupdate'
import deviceReset from 'components/deviceReset/deviceReset'
import { mapGetters, mapMutations } from 'vuex'
import { get, post } from '@/api/axios.js'
export default {
  props: ['zjdevice'],
  data () {
    return {
      timeshow: true,
      timeshow2: false,
      timeshow3: false,
      tempdevice: 1,
      updateAll: false,
      card:true
    }
  },
  mounted () {
    if (!this.hostlist.length) {
      get('/deployment').then((data) => {
        this._sethostlist(data.data)
      }).catch(() => {
        throw new Error('IP获取失败')
      })
     }
  },
  methods: {
    ...mapMutations({ _sethostlist: 'SET_HOST' }),
    showOrnot () {
      if (this.tempdevice === 1) {
        this.timeshow = true;
        this.timeshow2 = false;
        this.timeshow3 = false;
      } else if (this.tempdevice === 2) {
        this.timeshow = false
        this.timeshow2 = true
        this.timeshow3 = false
      } else if (this.tempdevice === 3) {
        this.timeshow = false
        this.timeshow2 = false
        this.timeshow3 = true
      }
    }
  },
  components: {
    systemCalibration,
    equipmentSelfInspection,
    equipmentWorkflow,
    networkParameterupdating,
    versionRemoteupdate,
    deviceReset,
  },
  computed: {
    ...mapGetters(['ip', 'hostlist']),

  }
}
</script>
<style>
.tabs {
  width: 66%;
  margin: 0 auto;
  margin-top: 2.5%;
  margin-left: 300px;
}
Tabs {
  width: 100%;
  margin: 0 auto;
  z-index: 1;
}
.sendData {
  position: absolute;
  width: 100px;
  height: 30px;
  bottom: 20px;
  left: 50%;
  margin-left: -50px;
}
.cancelBtn {
  position: absolute;
  right: 10px;
  width: 25px;
  height: 25px;
  margin-left: -50px;
  /* margin-top: 20px; */
  text-align: center;
  border: none;
  border-radius: 4px;
  background-color: rgb(218, 95, 99);
  color: white;
  z-index: 20;
}
.cancelBtn:hover {
  cursor: pointer;
}
.opera {
  border: none;
  background-color: rgb(25, 190, 107);
}
.opera.btn-active {
  background-color: rgb(218, 95, 99);
}
.icon {
  font-size: 23px;
  margin-top: -1px;
  margin-right: 2px;
}
.ivu-icon {
  width: 25px;
  height: 23px;
  font-size: 23px;
  vertical-align: middle;
}
.ivu-switch-checked .ivu-switch-inner {
  left:0
}
</style>

    