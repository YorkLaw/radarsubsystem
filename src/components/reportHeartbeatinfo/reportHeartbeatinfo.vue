<template>
  <div class="content">
    <Form ref="formValidate"
          :label-width="100">
      <FormItem label="雷达子系统"
                prop="sysworkstatus">
        <Card class="lishow"
              style="padding:0">{{sysworkstatus}}</Card>
      </FormItem>
      <FormItem label="敌我子系统"
                prop="eneworkstatus">
        <Card class="lishow"
              style="padding:0">{{eneworkstatus}}</Card>
      </FormItem>
      <FormItem label="二次电源设备"
                prop="secondworkstatus">
        <Card class="lishow"
              style="padding:0">{{secondworkstatus}}</Card>
      </FormItem>
      <FormItem label="其他设备"
                prop="otherworkstatus">
        <Card class="lishow"
              style="padding:0">{{otherworkstatus}}</Card>
      </FormItem>
    </Form>
  </div>

</template>
<script>
import Stomp from 'stompjs'
import SockJS from 'sockjs-client'
import { GMTToStr } from '@/api/transformDate'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      sysworkstatus: '正常',
      eneworkstatus: '正常',
      secondworkstatus: '正常',
      otherworkstatus: '正常',
      stomp: null
    }
  },
  methods: {
    // connect () {	//定义连接函数
    //   if (this.stomp == null || !this.stomp.connected) {
    //     //var url = 'http://132.122.237.68:8164/websocket';
    //     let url = 'http://172.20.10.12:8090' + '/stomp'
    //     var sockJS = new SockJS(url);
    //     this.stomp = Stomp.over(sockJS);
    //     //this.stomp.heartbeat.outgoing = 20000; //若使用STOMP 1.1 版本，默认开启了心跳检测机制（默认值都是10000ms）
    //     //this.stomp.heartbeat.incoming = 0; //客户端不从服务端接收心跳包
    //     this.stomp.connect({}, this.connectCallback, this.errorCallback);
    //   } else {
    //     console.log("当前处于连接状态");
    //   }
    // },
    // connectCallback (frame) {  //连接成功时的回调函数
    //   this.stomp.subscribe("/topic", function (result) {
    //     var content = result.body;
    //     console.log("接收订阅消息=" + content);
    //   }, {});
    // },
    // errorCallback () {//连接失败时的回调函数，此函数重新调用连接方法，形成循环，直到连接成功
    // alert("当前登录状态信息已过期，请重新登录");	
    //    this.stomp.unsubscribe("/topic", function (result) {
    //   }, {});
    // }
  },
  // mounted () {
  //   this.connect()
  // }
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
