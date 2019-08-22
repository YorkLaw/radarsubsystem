 <template>
  <div>
    <Card class="tabs1"
          v-show="card2">
      <Card v-show="timeshow4">
        <Icon type="ios-desktop-outline" />当前设备：{{this.hostlist[0].host}}
        <Tabs type="card"
              style="margin-top:10px">
          <TabPane label="上报心跳信息">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="100">
                <FormItem label="雷达子系统"
                          prop="heartinfo[0].sysworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[0].sysworkstatus}}</Card>
                </FormItem>
                <FormItem label="敌我子系统"
                          prop="heartinfo[0].eneworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[0].eneworkstatus}}</Card>
                </FormItem>
                <FormItem label="二次电源设备"
                          prop="heartinfo[0].secondworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[0].secondworkstatus}}</Card>
                </FormItem>
                <FormItem label="其他设备"
                          prop="heartinfo[0].otherworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[0].otherworkstatus}}</Card>
                </FormItem>
              </Form>
            </div>
          </TabPane>
          <!-- <TabPane label="上报软件版本信息包">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="100">
                <FormItem label="指令操作码"
                          prop="versioninfo[0].inspectionOperacode">
                  <Card class="lishow"
                        style="padding:0">{{versioninfo[0].inspectionOperacode}}</Card>
                </FormItem>
                <FormItem label="软件版本信息表">
                  <Table border
                         :columns="versioninfo[0].columns1"
                         :data="versioninfo[0].data1"></Table>
                </FormItem>
              </Form>
            </div>
          </TabPane> -->
          <TabPane label="上报自检结果">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="100">
                <FormItem label="雷达子系统"
                          prop="insresult[0].sysworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[0].sysworkstatus}}</Card>
                </FormItem>
                <FormItem label="敌我子系统"
                          prop="insresult[0].eneworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[0].eneworkstatus}}</Card>
                </FormItem>
                <FormItem label="二次电源设备"
                          prop="insresult[0].secondworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[0].secondworkstatus}}</Card>
                </FormItem>
                <FormItem label="其他设备"
                          prop="insresult[0].otherworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[0].otherworkstatus}}</Card>
                </FormItem>
              </Form>
            </div>
          </TabPane>
          <TabPane label="上传设备网络参数信息包">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="105">
                <FormItem label="指令操作码"
                          prop="deviceparamsinfo[0].cmd">
                  <Card class="lishow"
                        style="padding:0">{{deviceparamsinfo[0].cmd}}</Card>
                </FormItem>
                <div class="inp">
                  <FormItem prop="deviceparamsinfo[0].networkIP1"
                            label="网络IP地址1">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkIP1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMacIP1"
                            label="网络MAC地址1">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[0].networkMacIP1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMessage1"
                            label="网络端口信息1">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkMessage1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkIP2"
                            label="网络IP地址2">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkIP2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMacIP2"
                            label="网络MAC地址2">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[0].networkMacIP2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMessage2"
                            label="网络端口信息2">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkMessage2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkIP3"
                            label="网络IP地址3">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkIP3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMacIP3"
                            label="网络MAC地址3">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[0].networkMacIP3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMessage3"
                            label="网络端口信息3">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkMessage3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkIP4"
                            label="网络IP地址4">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkIP4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMacIP4"
                            label="网络MAC地址4">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[0].networkMacIP4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMessage4"
                            label="网络端口信息4">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkMessage4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkIP5"
                            label="网络IP地址5">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkIP5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMacIP5"
                            label="网络MAC地址5">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[0].networkMacIP5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMessage5"
                            label="网络端口信息5">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkMessage5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkIP6"
                            label="网络IP地址6">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkIP6}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMacIP6"
                            label="网络MAC地址6">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[0].networkMacIP6}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[0].networkMessage6"
                            label="网络端口信息6">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[0].networkMessage6}}</Card>
                  </FormItem>

                </div>
              </Form>
            </div>
          </TabPane>
          <TabPane label="雷达子系统工作标签包">
            <div class="content radar">
              <Form ref="formValidate"
                    :label-width="120">
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
                        style="padding:0">{{radarSub[0].cabliworkheat}}</Card>
                </FormItem>
                <div style="width:100%;height:300px;margin:0 auto;display:flex;justify-content:space-between">
                  <div class="smallBlock smallBlock1"
                       @click="item01control">测向处理组件状态</div>
                  <div class="smallBlock smallBlock2"
                       @click="item02control">侦察处理组件状态</div>
                  <div class="smallBlock smallBlock3"
                       @click="item03control">信号分选组件状态</div>
                  <div class="smallBlock smallBlock4"
                       @click="item04control">系统控制组件状态</div>
                  <div class="smallBlock smallBlock5"
                       @click="item05control">中频存储组件状态</div>
                </div>

                <FormItem v-for="(value, key, index) in radarSub[0].besidemanage"
                          :label="key"
                          v-show="item01">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr[index]]}}
                  </Card>
                </FormItem>

                <FormItem v-for="(value, key, index) in radarSub[0].reconnoitre"
                          :label="key"
                          v-show="item02">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr2[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[0].signal"
                          :label="key"
                          v-show="item03">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr3[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[0].sysctrl"
                          :label="key"
                          v-show="item04">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr4[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[0].save"
                          :label="key"
                          v-show="item05">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr5[index]]}}
                  </Card>
                </FormItem>
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
          </TabPane>
        </Tabs>
      </Card>

      <Card v-show="timeshow5">
        <Icon type="ios-desktop-outline" />当前设备：{{this.hostlist[1].host}}
        <Tabs type="card"
              style="margin-top:10px">
          <TabPane label="上报心跳信息">
            <div class="content">

              <Form ref="formValidate"
                    :label-width="100">
                <FormItem label="雷达子系统"
                          prop="heartinfo[1].sysworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[1].sysworkstatus}}</Card>
                </FormItem>
                <FormItem label="敌我子系统"
                          prop="heartinfo[1].eneworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[1].eneworkstatus}}</Card>
                </FormItem>
                <FormItem label="二次电源设备"
                          prop="heartinfo[1].secondworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[1].secondworkstatus}}</Card>
                </FormItem>
                <FormItem label="其他设备"
                          prop="heartinfo[1].otherworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[1].otherworkstatus}}</Card>
                </FormItem>
              </Form>
            </div>
          </TabPane>
          <TabPane label="上报自检结果">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="100">
                <FormItem label="雷达子系统"
                          prop="insresult[1].sysworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[1].sysworkstatus}}</Card>
                </FormItem>
                <FormItem label="敌我子系统"
                          prop="insresult[1].eneworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[1].eneworkstatus}}</Card>
                </FormItem>
                <FormItem label="二次电源设备"
                          prop="insresult[1].secondworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[1].secondworkstatus}}</Card>
                </FormItem>
                <FormItem label="其他设备"
                          prop="insresult[1].otherworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[1].otherworkstatus}}</Card>
                </FormItem>
              </Form>
            </div>
          </TabPane>
          <TabPane label="上传设备网络参数信息包">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="105">
                <FormItem label="指令操作码"
                          prop="deviceparamsinfo[1].cmd">
                  <Card class="lishow"
                        style="padding:0">{{deviceparamsinfo[1].cmd}}</Card>
                </FormItem>
                <div class="inp">
                  <FormItem prop="deviceparamsinfo[1].networkIP1"
                            label="网络IP地址1">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkIP1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMacIP1"
                            label="网络MAC地址1">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[1].networkMacIP1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMessage1"
                            label="网络端口信息1">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkMessage1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkIP2"
                            label="网络IP地址2">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkIP2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMacIP2"
                            label="网络MAC地址2">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[1].networkMacIP2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMessage2"
                            label="网络端口信息2">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkMessage2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkIP3"
                            label="网络IP地址3">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkIP3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMacIP3"
                            label="网络MAC地址3">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[1].networkMacIP3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMessage3"
                            label="网络端口信息3">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkMessage3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkIP4"
                            label="网络IP地址4">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkIP4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMacIP4"
                            label="网络MAC地址4">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[1].networkMacIP4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMessage4"
                            label="网络端口信息4">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkMessage4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkIP5"
                            label="网络IP地址5">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkIP5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMacIP5"
                            label="网络MAC地址5">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[1].networkMacIP5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMessage5"
                            label="网络端口信息5">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkMessage5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkIP6"
                            label="网络IP地址6">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkIP6}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMacIP6"
                            label="网络MAC地址6">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[1].networkMacIP6}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[1].networkMessage6"
                            label="网络端口信息6">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[1].networkMessage6}}</Card>
                  </FormItem>

                </div>
              </Form>
            </div>
          </TabPane>
          <TabPane label="雷达子系统工作标签包">
            <div class="content radar">
              <Form ref="formValidate"
                    :label-width="120">
                <FormItem label="发方节点号"
                          prop="radarSub[1].sendnum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].sendnum}}</Card>
                </FormItem>
                <FormItem label="收方节点号"
                          prop="radarSub[1].takenum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].takenum}}</Card>
                </FormItem>
                <FormItem label="反馈指令序号"
                          prop="radarSub[1].feedbacknum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].feedbacknum}}</Card>
                </FormItem>
                <FormItem label="指令接收状态"
                          prop="radarSub[1].insreceivestatus">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].insreceivestatus}}</Card>
                </FormItem>
                <FormItem label="前端工作温度"
                          prop="radarSub[1].webworkheat">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].webworkheat}}</Card>
                </FormItem>
                <FormItem label="分机工作温度"
                          prop="radarSub[1].cabliworkheat">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].cabliworkheat}}</Card>
                </FormItem>
                <div style="width:100%;height:300px;margin:0 auto;display:flex;justify-content:space-between">
                  <div class="smallBlock smallBlock1"
                       @click="item11control">测向处理组件状态</div>
                  <div class="smallBlock smallBlock2"
                       @click="item12control">侦察处理组件状态</div>
                  <div class="smallBlock smallBlock3"
                       @click="item13control">信号分选组件状态</div>
                  <div class="smallBlock smallBlock4"
                       @click="item14control">系统控制组件状态</div>
                  <div class="smallBlock smallBlock5"
                       @click="item15control">中频存储组件状态</div>
                </div>

                <FormItem v-for="(value, key, index) in radarSub[1].besidemanage"
                          :label="key"
                          v-show="item11">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr[index]]}}
                  </Card>
                </FormItem>

                <FormItem v-for="(value, key, index) in radarSub[1].reconnoitre"
                          :label="key"
                          v-show="item12">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr2[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[1].signal"
                          :label="key"
                          v-show="item13">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr3[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[1].sysctrl"
                          :label="key"
                          v-show="item14">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr4[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[1].save"
                          :label="key"
                          v-show="item15">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr5[index]]}}
                  </Card>
                </FormItem>
                <FormItem label="全脉冲个数统计"
                          prop="radarSub[1].pulsenum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].pulsenum}}</Card>
                </FormItem>
                <FormItem label="辐射源数据包统计"
                          prop="radarSub[1].radiant">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].radiant}}</Card>
                </FormItem>
                <FormItem label="中频数据统计"
                          prop="radarSub[1].IFdata">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].IFdata}}</Card>
                </FormItem>
                <FormItem label="设备编号"
                          prop="radarSub[1].devicenum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[1].devicenum}}</Card>
                </FormItem>
              </Form>
            </div>
          </TabPane>
        </Tabs>
      </Card>
      <Card v-show="timeshow6">
        <Icon type="ios-desktop-outline" />当前设备：{{this.hostlist[2].host}}
        <Tabs type="card"
              style="margin-top:10px">
          <TabPane label="上报心跳信息">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="100">
                <FormItem label="雷达子系统"
                          prop="heartinfo[2].sysworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[2].sysworkstatus}}</Card>
                </FormItem>
                <FormItem label="敌我子系统"
                          prop="heartinfo[2].eneworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[2].eneworkstatus}}</Card>
                </FormItem>
                <FormItem label="二次电源设备"
                          prop="heartinfo[2].secondworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[2].secondworkstatus}}</Card>
                </FormItem>
                <FormItem label="其他设备"
                          prop="heartinfo[2].otherworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{heartinfo[2].otherworkstatus}}</Card>
                </FormItem>
              </Form>
            </div>
          </TabPane>
          <TabPane label="上报自检结果">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="100">
                <FormItem label="雷达子系统"
                          prop="insresult[2].sysworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[2].sysworkstatus}}</Card>
                </FormItem>
                <FormItem label="敌我子系统"
                          prop="insresult[2].eneworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[2].eneworkstatus}}</Card>
                </FormItem>
                <FormItem label="二次电源设备"
                          prop="insresult[2].secondworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[2].secondworkstatus}}</Card>
                </FormItem>
                <FormItem label="其他设备"
                          prop="insresult[2].otherworkstatus">
                  <Card class="lishow"
                        style="padding:0">{{insresult[2].otherworkstatus}}</Card>
                </FormItem>
              </Form>
            </div>
          </TabPane>
          <TabPane label="上传设备网络参数信息包">
            <div class="content">
              <Form ref="formValidate"
                    :label-width="105">
                <FormItem label="指令操作码"
                          prop="deviceparamsinfo[2].cmd">
                  <Card class="lishow"
                        style="padding:0">{{deviceparamsinfo[2].cmd}}</Card>
                </FormItem>
                <div class="inp">
                  <FormItem prop="deviceparamsinfo[2].networkIP1"
                            label="网络IP地址1">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkIP1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMacIP1"
                            label="网络MAC地址1">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[2].networkMacIP1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMessage1"
                            label="网络端口信息1">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkMessage1}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkIP2"
                            label="网络IP地址2">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkIP2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMacIP2"
                            label="网络MAC地址2">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[2].networkMacIP2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMessage2"
                            label="网络端口信息2">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkMessage2}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkIP3"
                            label="网络IP地址3">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkIP3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMacIP3"
                            label="网络MAC地址3">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[2].networkMacIP3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMessage3"
                            label="网络端口信息3">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkMessage3}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkIP4"
                            label="网络IP地址4">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkIP4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMacIP4"
                            label="网络MAC地址4">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[2].networkMacIP4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMessage4"
                            label="网络端口信息4">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkMessage4}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkIP5"
                            label="网络IP地址5">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkIP5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMacIP5"
                            label="网络MAC地址5">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[2].networkMacIP5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMessage5"
                            label="网络端口信息5">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkMessage5}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkIP6"
                            label="网络IP地址6">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkIP6}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMacIP6"
                            label="网络MAC地址6">
                    <Card class="lishow"
                          style="padding:0;width:200px">{{deviceparamsinfo[2].networkMacIP6}}</Card>
                  </FormItem>
                  <FormItem prop="deviceparamsinfo[2].networkMessage6"
                            label="网络端口信息6">
                    <Card class="lishow"
                          style="padding:0">{{deviceparamsinfo[2].networkMessage6}}</Card>
                  </FormItem>

                </div>
              </Form>
            </div>
          </TabPane>
          <TabPane label="雷达子系统工作标签包">
            <div class="content radar">
              <Form ref="formValidate"
                    :label-width="120">
                <FormItem label="发方节点号"
                          prop="radarSub[2].sendnum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].sendnum}}</Card>
                </FormItem>
                <FormItem label="收方节点号"
                          prop="radarSub[2].takenum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].takenum}}</Card>
                </FormItem>
                <FormItem label="反馈指令序号"
                          prop="radarSub[2].feedbacknum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].feedbacknum}}</Card>
                </FormItem>
                <FormItem label="指令接收状态"
                          prop="radarSub[2].insreceivestatus">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].insreceivestatus}}</Card>
                </FormItem>
                <FormItem label="前端工作温度"
                          prop="radarSub[2].webworkheat">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].webworkheat}}</Card>
                </FormItem>
                <FormItem label="分机工作温度"
                          prop="radarSub[2].cabliworkheat">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].cabliworkheat}}</Card>
                </FormItem>
                <div style="width:100%;height:300px;margin:0 auto;display:flex;justify-content:space-between">
                  <div class="smallBlock smallBlock1"
                       @click="item21control">测向处理组件状态</div>
                  <div class="smallBlock smallBlock2"
                       @click="item22control">侦察处理组件状态</div>
                  <div class="smallBlock smallBlock3"
                       @click="item23control">信号分选组件状态</div>
                  <div class="smallBlock smallBlock4"
                       @click="item24control">系统控制组件状态</div>
                  <div class="smallBlock smallBlock5"
                       @click="item25control">中频存储组件状态</div>
                </div>
                <FormItem v-for="(value, key, index) in radarSub[2].besidemanage"
                          :label="key"
                          v-show="item21">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr[index]]}}
                  </Card>
                </FormItem>

                <FormItem v-for="(value, key, index) in radarSub[2].reconnoitre"
                          :label="key"
                          v-show="item22">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr2[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[2].signal"
                          :label="key"
                          v-show="item23">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr3[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[2].sysctrl"
                          :label="key"
                          v-show="item24">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr4[index]]}}
                  </Card>
                </FormItem>
                <FormItem v-for="(value, key, index) in radarSub[2].save"
                          :label="key"
                          v-show="item25">
                  <Card class="lishow"
                        style="padding:0">{{valMap[numArr5[index]]}}
                  </Card>
                </FormItem>
                <FormItem label="全脉冲个数统计"
                          prop="radarSub[2].pulsenum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].pulsenum}}</Card>
                </FormItem>
                <FormItem label="辐射源数据包统计"
                          prop="radarSub[2].radiant">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].radiant}}</Card>
                </FormItem>
                <FormItem label="中频数据统计"
                          prop="radarSub[2].IFdata">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].IFdata}}</Card>
                </FormItem>
                <FormItem label="设备编号"
                          prop="radarSub[2].devicenum">
                  <Card class="lishow"
                        style="padding:0">{{radarSub[2].devicenum}}</Card>
                </FormItem>
              </Form>
            </div>
          </TabPane>
        </Tabs>
      </Card>
    </Card>
  </div>
</template>
<script>
import heartbeatInspection from 'components/heartbeatInspection/heartbeatInspection'
import reportHeartbeatinfo from 'components/reportHeartbeatinfo/reportHeartbeatinfo'
import reportInspectionresult from 'components/reportInspectionresult/reportInspectionresult'
import reportVersioninfo from 'components/reportVersioninfo/reportVersioninfo'
import devicenetParamsinfo from 'components/devicenetParamsinfo/devicenetParamsinfo'
import radarSubsystemworklabelpac from 'components/radarSubsystemworklabelpac/radarSubsystemworklabelpac'
import { mapGetters } from 'vuex'
export default {
  props: ['zjdevice1'],
  data () {
    return {
      numArr: [],
      numArr2: [],
      numArr3: [],
      numArr4: [],
      numArr5: [],
      insresult: [
        { sysworkstatus: '正常',
          eneworkstatus: '正常',
          secondworkstatus: '正常',
          otherworkstatus: '正常' },
        { sysworkstatus: '正常',
          eneworkstatus: '正常',
          secondworkstatus: '正常',
          otherworkstatus: '正常' },
        { sysworkstatus: '正常',
          eneworkstatus: '正常',
          secondworkstatus: '正常',
          otherworkstatus: '正常' }
      ],
      card2: false,
      item01: false,
      item02: false,
      item03: false,
      item04: false,
      item05: false,
      item11: false,
      item12: false,
      item13: false,
      item14: false,
      item15: false,
      item21: false,
      item22: false,
      item23: false,
      item24: false,
      item25: false,
      timeshow4: false,
      timeshow5: false,
      timeshow6: false,
      tempdevice: 1,
      valMap: { '0': '正常', '1': '不正常' },
      arr: [],
      position: 0,
      heartinfo: [{
        sysworkstatus: '正常',
        eneworkstatus: '正常',
        secondworkstatus: '正常',
        otherworkstatus: '正常' },
      {
        sysworkstatus: '正常',
        eneworkstatus: '正常',
        secondworkstatus: '正常',
        otherworkstatus: '正常' },
      {
        sysworkstatus: '正常',
        eneworkstatus: '正常',
        secondworkstatus: '正常',
        otherworkstatus: '正常' }],
      deviceparamsinfo: [{ cmd: '12',
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
        networkMessage6: '' }, { cmd: '12',
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
        networkMessage6: '' }, { cmd: '12',
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
        networkMessage6: '' }],
      radarSub: [
        {
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
            Z7_GTX: '' },
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
            Z7_GTX: '' },
          signal: {
            DSP_A: '',
            DSP_B: '',
            K7: '',
            DSP_A_DDR: '',
            DSP_B_DDR: '',
            DSP_A_SRIO: '',
            DSP_B_SRIO: '',
            K7_GTX: ''
          },
          sysctrl: {
            DSP: '',
            K7: '',
            Z7030: '',
            PL_DDR: '',
            PS_DDR: '',
            DSP_SRIO: '',
            K7_GTX: '',
            Z7_GTX: ''
          },
          save: {
            SATA_1: '',
            SATA_2: '',
            SATA_3: '',
            SATA_4: ''
          },
          pulsenum: '',
          radiant: '',
          IFdata: '',
          devicenum: ''
        },
        {
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
            Z7_GTX: '' },
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
            Z7_GTX: '' },
          signal: {
            DSP_A: '',
            DSP_B: '',
            K7: '',
            DSP_A_DDR: '',
            DSP_B_DDR: '',
            DSP_A_SRIO: '',
            DSP_B_SRIO: '',
            K7_GTX: ''
          },
          sysctrl: {
            DSP: '',
            K7: '',
            Z7030: '',
            PL_DDR: '',
            PS_DDR: '',
            DSP_SRIO: '',
            K7_GTX: '',
            Z7_GTX: ''
          },
          save: {
            SATA_1: '',
            SATA_2: '',
            SATA_3: '',
            SATA_4: ''
          },
          pulsenum: '',
          radiant: '',
          IFdata: '',
          devicenum: ''
        },
        {
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
            Z7_GTX: ''
          },
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
            Z7_GTX: '' },
          signal: {
            DSP_A: '',
            DSP_B: '',
            K7: '',
            DSP_A_DDR: '',
            DSP_B_DDR: '',
            DSP_A_SRIO: '',
            DSP_B_SRIO: '',
            K7_GTX: ''
          },
          sysctrl: {
            DSP: '',
            K7: '',
            Z7030: '',
            PL_DDR: '',
            PS_DDR: '',
            DSP_SRIO: '',
            K7_GTX: '',
            Z7_GTX: ''
          },
          save: {
            SATA_1: '',
            SATA_2: '',
            SATA_3: '',
            SATA_4: ''
          },
          pulsenum: '',
          radiant: '',
          IFdata: '',
          devicenum: ''
        }],
      // host: ''
      stomp: null
    }
  },
  methods: {
    showOrnot () {
      if (this.tempdevice === 1) {
        this.timeshow4 = true
        this.timeshow5 = false
        this.timeshow6 = false
      } else if (this.tempdevice === 2) {
        this.timeshow4 = false
        this.timeshow5 = true
        this.timeshow6 = false
      } else if (this.tempdevice === 3) {
        this.timeshow4 = false
        this.timeshow5 = false
        this.timeshow6 = true
      }
      // this.host = this.hostlist
    },
    item01control () {
      this.item01 = !this.item01
      this.item02 = this.item03 = this.item04 = this.item05 = false
    },
    item02control () {
      this.item02 = !this.item02
      this.item01 = this.item03 = this.item04 = this.item05 = false
    },
    item03control () {
      this.item03 = !this.item03
      this.item02 = this.item01 = this.item04 = this.item05 = false
    },
    item04control () {
      this.item04 = !this.item04
      this.item02 = this.item03 = this.item01 = this.item05 = false
    },
    item05control () {
      this.item05 = !this.item05
      this.item02 = this.item03 = this.item04 = this.item01 = false
    },
    item11control () {
      this.item11 = !this.item11
      this.item12 = this.item13 = this.item14 = this.item15 = false
    },
    item12control () {
      this.item12 = !this.item12
      this.item11 = this.item13 = this.item14 = this.item15 = false
    },
    item13control () {
      this.item13 = !this.item13
      this.item12 = this.item11 = this.item14 = this.item15 = false
    },
    item14control () {
      this.item14 = !this.item14
      this.item12 = this.item13 = this.item11 = this.item15 = false
    },
    item15control () {
      this.item15 = !this.item15
      this.item12 = this.item13 = this.item14 = this.item11 = false
    },
    item21control () {
      this.item21 = !this.item21
      this.item22 = this.item23 = this.item24 = this.item25 = false
    },
    item22control () {
      this.item22 = !this.item22
      this.item21 = this.item23 = this.item24 = this.item25 = false
    },
    item23control () {
      this.item23 = !this.item23
      this.item22 = this.item21 = this.item24 = this.item25 = false
    },
    item24control () {
      this.item24 = !this.item24
      this.item22 = this.item23 = this.item21 = this.item25 = false
    },
    item25control () {
      this.item25 = !this.item25
      this.item22 = this.item23 = this.item24 = this.item21 = false
    },
    connect (stomp) {
      if (stomp !== null || !stomp.connected) {
        this.stomp = stomp
        this.connectCallback()
      } else {
        console.log('当前处于连接状态')
      }
    },
    connectCallback (frame) { // 连接成功时的回调函数
      let that = this
      this.stomp.subscribe('/uploadHeartBeatMessage/send', function (result) {
        that.arr = []
        var content = JSON.parse(result.body)
        if (content) {
          for (var item in content) {
            for (var i in that.hostlist) {
              that.arr.push(that.hostlist[i].host)
            }
          }
          that.position = that.arr.indexOf(content[item].host)// 判断获取的host在hostlist列表里的位置
          that.heartinfo[that.position].sysworkstatus = content[item].radarSubSystem.replace('0', '正常').replace('1', '异常')
          that.heartinfo[that.position].eneworkstatus = content[item].friendOrFoe.replace('0', '正常').replace('1', '异常')
          that.heartinfo[that.position].secondworkstatus = content[item].twicePowerSupply.replace('0', '正常').replace('1', '异常')
          that.heartinfo[that.position].otherworkstatus = content[item].other1.replace('0', '正常').replace('1', '异常')
        }
      }, {})
      this.stomp.subscribe('/uploadSelfInspectionResult/send', function (result) {
        that.arr = []
        var content = JSON.parse(result.body)
        for (var item in content) {
          for (var i in that.hostlist) {
            that.arr.push(that.hostlist[i].host)
            that.position = that.arr.indexOf(content[item].host)
          }
        }
        that.insresult[that.position].sysworkstatus = content.data.radarSubSystem.replace('0', '正常').replace('1', '异常')
        that.insresult[that.position].eneworkstatus = content.data.friendOrFoe.replace('0', '正常').replace('1', '异常')
        that.insresult[that.position].secondworkstatus = content.data.twicePowerSupply.replace('0', '正常').replace('1', '异常')
        that.insresult[that.position].otherworkstatus = content.data.other1.replace('0', '正常').replace('1', '异常')
        // console.log(that.insresult,content.data.friendOrFoe.replace("0","正常").replace("1","异常"),content.data.friendOrFoe,content[item])
      })
      this.stomp.subscribe('/uploadDeviceNetWorkParamMessage/send', function (result) {
        that.arr = []
        var content = JSON.parse(result.body)
        // console.log(content.data[0], content.data[1].networkIP1)
        for (var i in that.hostlist) {
          that.arr.push(that.hostlist[i].host)
        }
        that.position = that.arr.indexOf(content.data[0])
        that.deviceparamsinfo[that.position].cmd = content.data[1].networkID
        // console.log( that.deviceparamsinfo[that.position].cmd,content.data[1].networkID)
        that.deviceparamsinfo[that.position].networkIP1 = content.data[1].networkIP1
        that.deviceparamsinfo[that.position].networkMacIP1 = content.data[1].networkMacIP1
        that.deviceparamsinfo[that.position].networkMessage1 = content.data[1].networkMessage1
        that.deviceparamsinfo[that.position].networkIP2 = content.data[1].networkIP2
        that.deviceparamsinfo[that.position].networkMacIP2 = content.data[1].networkMacIP2
        that.deviceparamsinfo[that.position].networkMessage2 = content.data[1].networkMessage2
        that.deviceparamsinfo[that.position].networkIP3 = content.data[1].networkIP3
        that.deviceparamsinfo[that.position].networkMacIP3 = content.data[1].networkMacIP3
        that.deviceparamsinfo[that.position].networkMessage3 = content.data[1].networkMessage3
        that.deviceparamsinfo[that.position].networkIP4 = content.data[1].networkIP4
        that.deviceparamsinfo[that.position].networkMacIP4 = content.data[1].networkMacIP4
        that.deviceparamsinfo[that.position].networkMessage4 = content.data[1].networkMessage4
        that.deviceparamsinfo[that.position].networkIP5 = content.data[1].networkIP5
        that.deviceparamsinfo[that.position].networkMacIP5 = content.data[1].networkMacIP5
        that.deviceparamsinfo[that.position].networkMessage5 = content.data[1].networkMessage5
        that.deviceparamsinfo[that.position].networkIP6 = content.data[1].networkIP6
        that.deviceparamsinfo[that.position].networkMacIP6 = content.data[1].networkMacIP6
        that.deviceparamsinfo[that.position].networkMessage6 = content.data[1].networkMessage6
      })
      this.stomp.subscribe('/uploadRadarSubSystemWorkStatusMessage/send', function (result) {
        that.arr = []
        var content = JSON.parse(result.body)
        let besidemanage = content.data.fenJiWorkStatus.split('').reverse().splice(0, 10)
        let reconnoitre = content.data.fenJiWorkStatus.split('').reverse().splice(10, 10)
        let sing = content.data.fenJiWorkStatus.split('').reverse().splice(24, 4)// 此字段第四位暂时不截取
        let signal = content.data.fenJiWorkStatus.split('').reverse().splice(20, 8)
        let sysctrl = content.data.fenJiWorkStatus.split('').reverse().splice(28, 8)
        let save = content.data.fenJiWorkStatus.split('').reverse().splice(36, 4)
        let res = []
        let res2 = []
        let res3 = []
        let res4 = []
        let res5 = []
        for (let i = 0; i < besidemanage.length; i++) {
          res.push(besidemanage[i])
        }
        that.numArr = res
        for (let i = 0; i < reconnoitre.length; i++) {
          res2.push(reconnoitre[i])
        }
        that.numArr2 = res2
        for (let i = 0; i < signal.length; i++) {
          res3.push(signal[i])
        }
        that.numArr3 = res3

        for (let i = 0; i < sysctrl.length; i++) {
          res4.push(sysctrl[i])
        }
        that.numArr4 = res4
        for (let i = 0; i < save.length; i++) {
          res5.push(save[i])
        }
        that.numArr5 = res5
        for (var i in that.hostlist) {
          that.arr.push(that.hostlist[i].host)
        }
        that.position = that.arr.indexOf(content.data.host)
        that.radarSub[that.position].feedbacknum = content.data.feedbackNo
        that.radarSub[that.position].sendnum = content.data.faNodeNo
        that.radarSub[that.position].takenum = content.data.receiveNodeNo
        that.radarSub[that.position].insreceivestatus = content.data.cmdReceiveStatus
        that.radarSub[that.position].webworkheat = content.data.frontEndWorkTemperature
        that.radarSub[that.position].cabliworkheat = content.data.fenjiWorkTemperature
        that.radarSub[that.position].pulsenum = content.data.numCount
        that.radarSub[that.position].radiant = content.data.dataPagCount
        that.radarSub[that.position].IFdata = content.data.zhongDataPagCount
        that.radarSub[that.position].devicenum = content.data.deviceNo
      })
      // this.stomp.subscribe("/receiveHeartbeatCMD/sendToHeartBeat", function (result) {
      //   var content = JSON.parse(result.body);
      //   console.log(content.data.host)
      //   this.$emit('updatecolor', true);
      // })
    },
    errorCallback () { // 连接失败时的回调函数，此函数重新调用连接方法，形成循环，直到连接成功
      alert('当前登录状态信息已过期，请重新登录')
      this.stomp.unsubscribe('/uploadRadarSubSystemWorkStatusMessage/send', function (result) {
      }, {})
      this.stomp.unsubscribe('/uploadDeviceNetWorkParamMessage/send', function (result) {
      }, {})
      this.stomp.unsubscribe('/uploadSelfInspectionResult/send', function (result) {
      }, {})
      this.stomp.unsubscribe('/uploadHeartBeatMessage/send', function (result) {
      }, {})
      this.stomp.unsubscribe('/receiveHeartbeatCMD/sendToHeartBeat', function (result) {
      }, {})
    }
  },
  mounted () {
    // let con = document.getElementsByClassName('smallBlock')
    // con[0].style.backgroundImage = 'url(./../../../assets/a.jpg)'
    // // console.log(con[0].style.backgroundImage)
    // con[1].style.backgroundImage = con[6].style.backgroundImage = con[11].style.backgroundImage = 'url(../../assets/b.jpg)'
    // con[2].style.backgroundImage = con[7].style.backgroundImage = con[12].style.backgroundImage = 'url(../../assets/c.jpg)'
    // con[3].style.backgroundImage = con[8].style.backgroundImage = con[13].style.backgroundImage = 'url(../../assets/d.jpg)'
    // con[4].style.backgroundImage = con[9].style.backgroundImage = con[14].style.backgroundImage = 'url(../../assets/e.jpg)'
  },
  components: {
    devicenetParamsinfo,
    heartbeatInspection,
    reportHeartbeatinfo,
    reportInspectionresult,
    reportVersioninfo,
    radarSubsystemworklabelpac
  },
  computed: {
    ...mapGetters(['ip', 'hostlist'])
  }
}
</script>
 <style scoped>
.content {
  width: 100%;
  padding: 10px 0 0 0;
  position: relative;
}
.tabs1 {
  width: 62%;
  margin: 0 auto;
  margin-top: 3.5%;
  margin-left: 300px;
}
.smallBlock {
  font-size: 14px;
  color:#fff;
  text-align: center;
  vertical-align: middle;
  writing-mode: vertical-lr;
  /* background-image: url(../../assets/a.jpg); */
  font-weight: 800;
  width: 19%;
  height: 300px;
}
.smallBlock1 {
  background:url(../../assets/a.jpg);
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.smallBlock2 {
  background:url(../../assets/b.jpg);
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.smallBlock3 {
  background:url(../../assets/c.jpg);
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.smallBlock4 {
  background:url(../../assets/d.jpg);
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.smallBlock5 {
  background:url(../../assets/e.jpg);
  background-size:100% 100%;
  background-repeat: no-repeat;
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
.ivu-icon {
  width: 25px;
  height: 23px;
  font-size: 23px;
  vertical-align: middle;
}
.lishow {
  width: 110px;
  height: 30px;
  padding: 0;
  font-size: 12px;
  line-height: 0;
}
.inp .ivu-form-item {
  display: inline-block;
}
.inp .lishow {
  width: 140px;
  margin-left: 10px;
}
.radar .ivu-form-item {
  display: inline-block;
}
</style>
