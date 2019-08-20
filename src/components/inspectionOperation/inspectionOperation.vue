<template>
  <div>
    <Card class="tabs"
          v-show="card">
      <Card v-show="timeshow">
        <Icon type="ios-desktop-outline"
              class="icon" />当前设备: {{this.hostlist[0].host}}&#x3000;&#x3000;同时发送: <i-switch v-model="updateAll"
                  size="small"
                  style="margin-top:-3px;width:40px">
          <span slot="open">是</span><span slot="close">否</span>
        </i-switch>
        <Button style="margin-left:10px;"
                size="small"
                @click="dialogVisible = true">查看任务清单</Button>
        <Tabs type="card"
              style="margin-top:10px">
          <TabPane label="系统校时">
            <systemCalibration ref="sysTime"
                               :updateAll="updateAll"
                               :device="tempdevice"></systemCalibration>
          </TabPane>
          <TabPane label="设备自检">
            <equipmentSelfInspection ref="selfInspection"
                                     :updateAll="updateAll"
                                     :device="tempdevice"
                                     @func="changeArr"></equipmentSelfInspection>
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
              class="icon" />当前设备: {{this.hostlist[1].host}}&#x3000;&#x3000;同时发送: <i-switch v-model="updateAll"
                  size="small"
                  style="margin-top:-3px;width:40px">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>
        <Button style="margin-left:10px;"
                size="small"
                @click="dialogVisible1 = true">查看任务清单</Button>
        <Tabs type="card"
              style="margin-top:10px">
          <TabPane label="系统校时">
            <system-calibration ref="sysTime"
                                :updateAll="updateAll"
                                :device="tempdevice"></system-calibration>
          </TabPane>
          <TabPane label="设备自检">
            <equipmentSelfInspection ref="selfInspection"
                                     :updateAll="updateAll"
                                     :device="tempdevice"
                                     @functi="changeArr1"></equipmentSelfInspection>
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
              class="icon" />当前设备: {{this.hostlist[2].host}}&#x3000;&#x3000;同时发送: <i-switch v-model="updateAll"
                  size="small"
                  style="margin-top:-3px;width:40px">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </i-switch>
        <Button style="margin-left:10px;"
                size="small"
                @click="dialogVisible2 = true">查看任务清单</Button>
        <Tabs type="card"
              style="margin-top:10px">
          <TabPane label="系统校时">
            <system-calibration ref="sysTime"
                                :updateAll="updateAll"
                                :device="tempdevice"></system-calibration>
          </TabPane>
          <TabPane label="设备自检">
            <equipmentSelfInspection ref="selfInspection"
                                     :updateAll="updateAll"
                                     :device="tempdevice"
                                     @function="changeArr2"></equipmentSelfInspection>
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
    <Modal title="任务清单"
           v-model="dialogVisible">
      <i-table border
               :columns="columns1"
               :data="data1"></i-table>
      <!-- <i-table border
               :content="self"
               :columns="columns7"
               :data="data6"></i-table> -->
    </Modal>
    <Modal title="任务清单"
           v-model="dialogVisible1">
      <i-table border
               :columns="columns2"
               :data="data2"></i-table>
    </Modal>
    <Modal title="任务清单"
           v-model="dialogVisible2">
      <i-table border
               :columns="columns3"
               :data="data3"></i-table>
    </Modal>
    </span>
    </el-dialog>
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
      self: this,
      timeshow: true,
      timeshow2: false,
      timeshow3: false,
      tempdevice: 1,
      updateAll: false,
      card: true,
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      columns1: [
        {
          title: '指令名称',
          key: 'name'
        },
        {
          title: '发送时间',
          key: 'time'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove1(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data1: [],
      columns2: [
        {
          title: '指令名称',
          key: 'name'
        },
        {
          title: '发送时间',
          key: 'time'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove2(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data2: [],
      columns3: [
        {
          title: '指令名称',
          key: 'name'
        },
        {
          title: '发送时间',
          key: 'time'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove3(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data3: []
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
        this.timeshow = true
        this.timeshow2 = false
        this.timeshow3 = false
      } else if (this.tempdevice === 2) {
        this.timeshow = false
        this.timeshow2 = true
        this.timeshow3 = false
      } else if (this.tempdevice === 3) {
        this.timeshow = false
        this.timeshow2 = false
        this.timeshow3 = true
      }
    },
    changeArr (data) {
      // console.log(data)
      this.data1.push(JSON.parse(JSON.stringify(data)))// 去除引用关系
      // console.log(this.data1)
    },
    changeArr1 (data) {
      // console.log(data)
      this.data2.push(JSON.parse(JSON.stringify(data)))// 去除引用关系
      // console.log(this.data2)
    },
    changeArr2 (data) {
      // console.log(data)
      this.data3.push(JSON.parse(JSON.stringify(data)))// 去除引用关系
      // console.log(this.data1)
    },
    remove1 (index) {
      this.data1.splice(index, 1)
    },
    remove2 (index) {
      this.data2.splice(index, 1)
    },
    remove3 (index) {
      this.data3.splice(index, 1)
    }
  },
  components: {
    systemCalibration,
    equipmentSelfInspection,
    equipmentWorkflow,
    networkParameterupdating,
    versionRemoteupdate,
    deviceReset
  },
  computed: {
    ...mapGetters(['ip', 'hostlist'])

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
  left: 0;
}
/* inputnumber输入框里的控制上下的按钮 */
.ivu-input-number-handler {
  width: 134%;
}
.ivu-modal .ivu-form-item-content {
  margin: 0;
  display: inline-block;
}
</style>
