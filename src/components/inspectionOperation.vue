<template>
<div>
  <Card class="tabs"
        v-show="timeshow">
    <button class="cancelBtn"
            @click="timeclose">X</button>
    <Icon type="ios-desktop-outline" />当前设备：{{zjdevice}}
    <Tabs type="card">
      <TabPane label="系统校时">
        <system-calibration ref="sysTime"></system-calibration>
      </TabPane>
      <TabPane label="设备自检">
        <equipmentSelfInspection ref="selfInspection"></equipmentSelfInspection>
      </TabPane>
      <TabPane label="设备工作流程控制">
        <equipment-workflow ref="workflow"></equipment-workflow>
      </TabPane>
      <TabPane label="设备网络参数更新">
        <networkParameterupdating ref="paramsupdate"></networkParameterupdating>
      </TabPane>
      <TabPane label="软件版本远程更新">
        <versionRemoteupdate ref="versionupdate"></versionRemoteupdate>
      </TabPane>
      <TabPane label="设备复位">
        <deviceReset ref="devicereset"></deviceReset>
      </TabPane>
    </Tabs>
  </Card>
  <Card class="tabs"
        v-show="timeshow2">
    <button class="cancelBtn"
            @click="timeclose2">X</button>
    <Icon type="ios-desktop-outline" />当前设备：{{zjdevice}}
    <Tabs type="card">
      <TabPane label="系统校时">
        <system-calibration ref="sysTime"></system-calibration>
      </TabPane>
      <TabPane label="设备自检">
        <equipmentSelfInspection ref="selfInspection"></equipmentSelfInspection>
      </TabPane>
      <TabPane label="设备工作流程控制">
        <equipment-workflow ref="workflow"></equipment-workflow>
      </TabPane>
      <TabPane label="设备网络参数更新">
        <networkParameterupdating ref="paramsupdate"></networkParameterupdating>
      </TabPane>
      <TabPane label="软件版本远程更新">
        <versionRemoteupdate ref="versionupdate"></versionRemoteupdate>
      </TabPane>
      <TabPane label="设备复位">
        <deviceReset ref="devicereset"></deviceReset>
      </TabPane>
    </Tabs>
  </Card>
  <Card class="tabs"
        v-show="timeshow3">
    <button class="cancelBtn"
            @click="timeclose3">X</button>
    <Icon type="ios-desktop-outline" />当前设备：{{zjdevice}}
    <Tabs type="card">
      <TabPane label="系统校时">
        <system-calibration ref="sysTime"></system-calibration>
      </TabPane>
      <TabPane label="设备自检">
        <equipmentSelfInspection ref="selfInspection"></equipmentSelfInspection>
      </TabPane>
      <TabPane label="设备工作流程控制">
        <equipment-workflow ref="workflow"></equipment-workflow>
      </TabPane>
      <TabPane label="设备网络参数更新">
        <networkParameterupdating ref="paramsupdate"></networkParameterupdating>
      </TabPane>
      <TabPane label="软件版本远程更新">
        <versionRemoteupdate ref="versionupdate"></versionRemoteupdate>
      </TabPane>
      <TabPane label="设备复位">
        <deviceReset ref="devicereset"></deviceReset>
      </TabPane>
    </Tabs>
  </Card>
  </div>
</template>
<script>
import systemCalibration from 'components/systemCalibration/systemCalibration'
import extensionControl from 'components/extensionControl/extensionControl'
import systemCommand from 'components/systemCommand/systemCommand'
import equipmentSelfInspection from 'components/equipmentSelfInspection/equipmentSelfInspection'
import equipmentWorkflow from 'components/equipmentWorkflow/equipmentWorkflow'
import networkParameterupdating from 'components/networkParameterupdating/networkParameterupdating'
import versionRemoteupdate from 'components/versionRemoteupdate/versionRemoteupdate'
import deviceReset from 'components/deviceReset/deviceReset'
export default {
  props: ['device'],
  data () {
    return {
      timeshow: true,
      timeshow2: false,
      timeshow3: false,
      zjdevice: this.device
    }
  },
  methods: {
    timeclose () {
      this.timeshow = false;
    },
    timeclose2 () {
      this.timeshow2 = false;
    },
    timeclose3 () {
      this.timeshow3 = false;
    },
  },
      components: {
    systemCalibration,
    extensionControl,
    systemCommand,
    equipmentSelfInspection,
    equipmentWorkflow,
    networkParameterupdating,
    versionRemoteupdate,
    deviceReset,
  }
}
</script>
<style>
.tabs {
  width: 65%;
  margin: 0 auto;
  margin-top: 7%;
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
form.ivu-form {
  display: none;
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
.ivu-icon {
  width: 25px;
  height: 23px;
  font-size: 23px;
  vertical-align: middle;
}
</style>

    