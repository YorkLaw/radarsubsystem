<template>
  <div class="home">
    <div class="wrapper">
      <transition name="fade">
        <div class="eqWrapper">
          <Card class="eq"
                v-for="(item, id) in items"
                :key="id"
                :class="{'eq-active':  id=== device - 1||id===device1-1}">
            <div @click="changeCard(id)">
              <span class="description">{{websockData}}</span>
              <div class="squaretop">
                <p class="statuscir"></p>
                <!-- <p class="showworkstatus"></p> -->
              </div>
              <Button type="success"
                      @click="operate(id)"
                      :class="{'btn-active': device - 1 === id}"
                      class="opera">指令操作</Button>
              <Button type="success"
                      @click="showStatus(id)"
                      :class="{'btn-active': device1 - 1 === id}"
                      class="opera">状态显示</Button>
            </div>
          </Card>
        </div>
      </transition>
    </div>
    <div class="LogOut">
      <span class="userlist"
            @click="seeInformation"
            v-show="role==2">管理用户</span>
      <span class="pwd"
            @click="changePassword">修改密码</span>
      <span class="exit"
            @click="exit">退出登陆</span>
    </div>
    <div class="avatar">
      {{userName}}
    </div>
    <table-information v-show="addclick&&role==2"
                       :userlist="userlist"
                       :loading="loading"></table-information>
    <adduser v-show="adduserflag"
             @adduser="addUser(obj)"></adduser>
    <change-password ref="changepassword"
                     :currentuserId="resetUserid"></change-password>
    <information-list :showList="showList"
                      :loading="loadinginformationList"
                      :datalist="datalist"></information-list>
    <inspectionOperation :zjdevice="zjdevice"
                         ref="insopera"></inspectionOperation>
    <showStatus :zjdevice1="zjdevice1"
                :hostlist="this.hostlist"
                ref="showstatus"></showStatus>

  </div>
</template>
<script>
import Stomp from 'stompjs'
import SockJS from 'sockjs-client'
/*eslint-disable*/
import { get, post } from '@/api/axios.js'
// import { Toast } from 'vant'
import { mapState, mapMutations } from 'vuex'
import * as cookie from '@/api/getcookie'
import tableInformation from 'components/tableInformation/tableInformation'
import informationList from 'components/informationList/informationList'
import adduser from 'components/adduser/adduser'
import changePassword from 'components/changePassword/changePassword'
import inspectionOperation from 'components/inspectionOperation/inspectionOperation'
import showStatus from 'components/showStatus/showStatus'

export default {
  data () {
    return {
      websockData: '',
      changeColor: '',
      websock: null,
      IDlist: [],
      content: '',
      arr: [],
      datalist: [],//请求设备的信息
      resetUserid: '',
      device: 1,
      circhangecol: false,
      zjdevice: 1,
      device1: 0,
      zjdevice1: 0,
      loading: true,// 用于table-information的表格加载状态
      loadinginformationList: true,
      showList: false,
      addclick: false,// 默认false，测试用true
      adduserflag: false,
      spinshow1: false,
      // items: [0, 1, 2],//代表三个设备，在下面修改为包含ID的结构
      items: [{
        name: '',//设备名，可能会用到
        id: 0//设备ID
      },
      {
        name: '',
        id: 1
      },
      {
        name: '',
        id: 2
      }],
      currentButtonIndex: [{ 'button': -1 }, { 'button': -1 }, { 'button': -1 }],//维护每个按钮的状态
      itembutton: [
        { 'description': '系统校时', 'class': 'time' },
      ],
      userlist: [],
      stomp: null
    }
  },
  created () {
    if (cookie.getremember()) {
      this._setpassword(cookie.getcookie().password)
    }
    this._setuser(cookie.getcookie().username)
    this._setuserRole(cookie.getcookie().role)
    //this.initWebSocket();
    window.addEventListener("click", function (e) {
      e.preventDefault()
    })
    // this.connect()
  },
  watch: {//监听changeColor的变化，在订阅里改变changecolor的值
    changeColor () {
      let cir = document.getElementsByClassName("statuscir")
      if (this.changeColor === '0') {
        this._setcode('0')
        cir[that.position].style.backgroundColor = "gray"
      } else if (this.changeColor === '1') {
        cir[this.position].style.backgroundColor = "rgb(218,95,99)"
      } else {
        this._setcode('1')
        cir[this.position].style.backgroundColor = "rgb(25,190,107)"
      }
    }
  },
  methods: {
    getchoice (id, index) {
      // 进入就收起用户管理界面，避免界面重冲突
      this.addclick = false
      // 界面收起后，恢复加载状态初始值
      this.loading = true
      // 下面是针对设备信息的处理
      this.currentButtonIndex[id].button = index
      // console.log("当前选择指令--设备 " + id + " :" + this.itembutton[index].description)
      // 获取当前点击的设备，和对当前设备做的哪一步操作（index）
      if (index === 0) {
        //请求数据--系统校时
        this.$refs.sysTime.changeShowstate()
        this.$refs.sysTime.setId(id)
      }
      if (index === 1) {
        //请求数据--分机控制
        this.$refs.extenControl.changeShowstate()
        this.$refs.extenControl.setId(id)
      }
      if (index === 2) {
        //请求数据--系统控制
        this.$refs.sysco.changeShowstate()
        this.$refs.sysco.setId(id)
      }
    },
    changeCard (id) {
      this.device = id + 1
      this.device1 = id + 1
      if (this.$refs.insopera.card) {
        this.operate(id)
      } else if (this.$refs.showstatus.card2) {
        this.showStatus(id)
      }
    },
    operate (id) {
      this.spinshow1 = true
      this.$refs.insopera.card = true
      this.$refs.showstatus.card2 = false
      if (id === 0) {
        this.device = id + 1;
        this.device1 = 0;
        this.$refs.insopera.tempdevice = this.device
        this.$refs.insopera.showOrnot();
      } else if (id === 1) {
        this.device = id + 1;
        this.device1 = 0;
        this.$refs.insopera.tempdevice = this.device
        this.$refs.insopera.showOrnot();
      } else if (id === 2) {
        this.device = id + 1;
        this.device1 = 0;
        this.$refs.insopera.tempdevice = this.device
        this.$refs.insopera.showOrnot();
      }
      this.$refs.insopera.id = id
      this.spinshow1 = false
    },
    showStatus (id) {
      this.spinshow1 = true
      this.$refs.insopera.card = false
      this.$refs.showstatus.card2 = true
      if (id === 0) {
        this.device1 = id + 1;
        this.device = 0;
        this.$refs.showstatus.tempdevice = this.device1
        this.$refs.showstatus.showOrnot();
      } else if (id === 1) {
        this.device1 = id + 1;
        this.device = 0;
        this.$refs.showstatus.tempdevice = this.device1
        this.$refs.showstatus.showOrnot();
      } else if (id === 2) {
        this.device1 = id + 1;
        this.device = 0;
        this.$refs.showstatus.tempdevice = this.device1
        this.$refs.showstatus.showOrnot();
        this.spinshow1 = false
      }
    },
    exit () {
      this._setToken('')
      cookie.removetoken()
      let obj = { 'exituser': this.userName }
      post('/logout', obj).then((data) => {
        this.$Message.success({
          content: '退出成功',
          duration: 1
        })
        // 清除token
        this.$router.push({
          name: 'Login'
        })
        // this.connect()
      }).catch(() => {
        this.$Message.error({
          content: '请求出错',
          duration: 1
        })
      })
    },
    seeInformation () {
      // 查看用户信息时隐藏设备信息
      this.showList = false
      this.loadinginformationList = true
      // 获取所有用户信息
      if (this.addclick) {
        this.addclick = false
        // 界面收起后，恢复加载状态初始值
        this.loading = true
      }
      else {
        get('/users').then((data) => {
          this.addclick = true
          // 将数据传给列表组件
          this.userlist = data.data.content
          this.loading = false
        }).catch(() => {
          this.addclick = false
          this.$Message.error({
            content: '请求出错 , 请重试',
            duration: 1
          })
        })
      }
    },
    addUser (obj) {
      post('/adduser', obj).then((data) => {
        // 更新列表组件数据
        this.data = data
        this.adduserflag = false
        this.$Message.success({
          content: '添加成功',
          duration: 1
        })
      }).catch(() => {
        this.adduserflag = false
        this.$Message.error({
          content: '添加失败，请重试',
          duration: 1
        })
      })

    },
    setadd () {
      // 关闭查看页面
      this.addclick = false
      this.adduserflag = true
    },
    changePassword () {
      this.$refs.changepassword.isshow(true)
      this.resetUserid = cookie.gettoken()
    },
    ...mapMutations({
      _setuser: 'SET_USER',
      _setToken: 'SET_TOKEN',
      _setpassword: 'SET_PWD',
      _setuserRole: 'SET_ROLE',
      _sethostlist: 'SET_HOST',
      _setcode: 'SET_CODE',
    }),
    connect () {	//定义连接函数
      // console.log(this.stomp)
      if (this.stomp == null || (this.stomp !== null && !this.stomp.connected)) {
        this.stomp = Stomp.over(new SockJS('http://127.0.0.1:8090' + '/stomp'))
        // this._setstomp(stomp)
        this.stomp.heartbeat.outgoing = 20000; //若使用STOMP 1.1 版本，默认开启了心跳检测机制（默认值都是10000ms）
        this.stomp.heartbeat.incoming = 0; //客户端不从服务端接收心跳包
        this.stomp.connect({}, this.connectCallback, this.errorCallback);
      } else {
        console.log("当前处于连接状态");
      }
    },
    connectCallback (frame) {  //连接成功时的回调函数
      let that = this
      this.$refs.showstatus.connect(this.stomp)//父组件里订阅了一个话题，使用$refs可以使子组件里连接上并订阅四个话题
      this.$refs.insopera.connect(this.stomp)
      this.stomp.subscribe("/deviceConnectSuccess/send", function (result) {
        let content = JSON.parse(result.body);
        if (content.device <= 3) {
          that.changeColor = true
          that.$Message.success({
            content: content.message,
            duration: 3
          })
          get('/deployment').then((data) => {
            that._sethostlist(data.data)
            for (let i in that.hostlist) {
              that.arr.push(that.hostlist[i].host)
            }
            that.position = that.arr.indexOf(content.data.host)
            that.changeColor = '2'
          })
        }
      })
      this.stomp.subscribe("/deviceUnConnect/send", function (result) {
        let content = JSON.parse(result.body);
        let cir = document.getElementsByClassName("statuscir")
        for (let i in that.hostlist) {
          that.arr.push(that.hostlist[i].host)
        }
        that.position = that.arr.indexOf(content.data.host)
        if (content) {
          that.changeColor = '0'
        }
      })
      this.stomp.subscribe("/receiveHeartbeatCMD/sendToHeartBeat", function (result) {
        let content = JSON.parse(result.body);
        for (let i in that.hostlist) {
          that.arr.push(that.hostlist[i].host)
        }
        that.position = that.arr.indexOf(content.data.host)
        if (content) {
          that.changeColor = '1'
          that.content = content
        }
        let fn = function () {
          if (that.content == content) { that.changeColor = '2' }
        }
        // console.log(that.changeColor)
        setTimeout(fn, 10000)
      })
    },
    errorCallback (e) {//连接失败时的回调函数，此函数重新调用连接方法，形成循环，直到连接成功
      // console.log(this.$store.state.token)
      if (this.$store.state.token && this.$store.state.token !== '') {
        alert("当前登录状态信息已过期，请重新登录");
        this.stomp.unsubscribe("/receiveHeartbeatCMD/sendToHeartBeat", function (result) {
        }, {});
        this.stomp.unsubscribe("/uploadRadarSubSystemWorkStatusMessage/send", function (result) {
        }, {});
        this.stomp.unsubscribe("/uploadDeviceNetWorkParamMessage/send", function (result) {
        }, {});
        this.stomp.unsubscribe("/uploadSelfInspectionResult/send", function (result) {
        }, {});
        this.stomp.unsubscribe("/uploadHeartBeatMessage/send", function (result) {
        }, {});
        this.stomp.unsubscribe("/receiveHeartbeatCMD/sendToHeartBeat", function (result) {
        }, {});
        this.exit()
      }
    }
  },
  computed: {
    computeClass () {
      return function (id, index) {
        let obj = this.itembutton[index].class
        if (this.currentButtonIndex[id].button === index) {
          obj = 'active' + ' ' + this.itembutton[index].class
        }
        return obj
      }
    },
    ...mapState([//从store中获取全局变量
      // 映射 this.count 为 store.state.count
      'userName',
      'role',
      'hostlist',
      'code'
    ])
  },
  mounted () {
    this.connect();
    if (this.hostlist[0].host && this.hostlist[1].host && this.hostlist[2].host === "无") {
      this.$Message.error({
        content: '当前无设备连接!',
        duration: 3
      })
    }
  },
  components: {
    tableInformation,
    adduser,
    changePassword,
    informationList,
    inspectionOperation,
    showStatus
  }
}
</script>
<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  color: black;
  background: #2d3a4b;
  /* background: url(../../assets/bg.jpg);
  background-size: 100% 100%; */
  /* background-image: linear-gradient(135deg, #f6d4d8, #b3c2db); */
}
.wrapper {
  position: absolute;
  top: 5%;
  left: 2%;
  right: 15%;
  width: 210px;
  height: 700px;
  /* width: 100vw;
  height: 100vh; */
  overflow: hidden;
  /* background: rgba(32, 32, 35, 0.5); */
}
.eqWrapper {
  position: relative;
  /* display: flex; */
  width: 100%;
  /* background: #eee; */
  height: 700px;
  margin: 0 auto;
  /* justify-content: center; */
  /* align-items: center; */
  /* top: 10%; */
  /* justify-content: space-around; */
}
.eqWrapper .eq {
  flex: 0 0 1;
  width: 210px;
  height: 200px;
  margin-top: 20px;
  /* border: 1px solid white; */
  border-radius: 10px;
  position: relative;
  background-image: url("../../assets/truth.jpg");
  background-size: cover;
  overflow: hidden;
  text-align: center;
  box-shadow: 2px 1px 8px 0px #444;
}
.eqWrapper .eq:last-child {
  margin-right: 0;
}
.choice {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  /* background: #ffffff47; */
  background: white;
  /* border-top: 1px solid black; */
  padding: 5px 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
}
.choice span {
  flex: 1;
  border-radius: 4px;
  text-align: center;
  line-height: 30px;
  /* background: #2d8cf052; */
  /* border: 1px solid #2d8cf0; */
  box-shadow: 0px 1px 5px #3f3333;
  margin-right: 5px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
}
.choice span:last-child {
  margin-right: 0;
}
.choice span:hover {
  background: #2d8cf0;
}
.active {
  background: #2d8cf0;
}
.fade {
  transition: all 0.5s;
}
.LogOut {
  position: absolute;
  right: 40px;
  top: 0;
  width: 80px;
  height: 150px;
  text-align: center;
  padding: 30px 0 0 0;
  color: white;
}
.LogOut .exit {
  text-align: center;
  line-height: 40px;
  /* border: 1px solid; */
  display: inline-block;
  cursor: pointer;
  background: rgb(218, 99, 95);
  user-select: none;
  width: 60px;
  height: 40px;
  box-shadow: 2px 1px 8px 0px #444;
  border-radius: 8px;
}
.LogOut .userlist,
.LogOut .adduser,
.LogOut .pwd {
  text-align: center;
  line-height: 40px;
  /* border: 1px solid; */
  display: inline-block;
  cursor: pointer;
  background: rgb(25, 190, 107);
  user-select: none;
  width: 60px;
  height: 40px;
  box-shadow: 2px 1px 8px 0px #444;
  border-radius: 8px;
  margin-bottom: 10px;
}
.avatar {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  right: 150px;
  top: 25px;
  font-family: fantasy;
  /* background: gray; */
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  box-shadow: 0px 2px 11px 1px #69635d;
  overflow: hidden;
  color: #fff;
}
.cirsty {
  background-color: green;
}
form {
  width: 100%;
}
.squaretop {
  position: relative;
}
.statuscir {
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  /* float: left; */
  width: 25px;
  height: 25px;
  display: inline-block;
  background-color: gray;
}
.opera {
  margin-top: 80%;
}
.tabs {
  width: 65%;
  margin: 0 auto;
  margin-top: 5%;
  margin-left: 300px;
}
.tabs1 {
  width: 62%;
  margin: 0 auto;
  margin-top: 9%;
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
.eq.eq-active {
  box-shadow: inset 0px 1px 1px 2px rgb(218, 95, 99),
    inset 0px -5px 5px -5px rgb(218, 95, 99),
    inset -5px 0 5px -5px rgb(218, 95, 99);
}
.showworkstatus {
  display: inline-block;
  /* float: right; */
  position: absolute;
  top: 0;
  right: 0;
}
.ivu-input-number-handler-wrap {
  width: 35px;
}
.demo-spin-container {
  display: inline-block;
  width: 1000px;
  height: 600px;
  position: relative;
  left: 50%;
  margin-left: -450px;
  top: 80px;
  border-radius: 8px;
  border: 1px solid #eee;
}
.ivu-spin {
  border-radius: 8px;
}
.ivu-modal .ivu-form-item-content {
  margin: 0;
  display: inline-block;
}
.ivu-form-item .ivu-form-item-required {
  display: inline-block;
}
</style>
