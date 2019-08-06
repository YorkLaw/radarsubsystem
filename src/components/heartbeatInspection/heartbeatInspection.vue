<template>
  <div class="content">
    <Form ref="formValidate"
          :label-width="100">
      <FormItem label="心跳"
                prop="heartbeat">
        <Card class="lishow"
              style="padding:0">1</Card>
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
      heartbeat: 1
    }
  },
}
</script>
<style scoped>
.content {
  width: 100%;
  padding: 10px 0 0 0;
  position: relative;
}
.lishow {
  width: 55px;
  height: 30px;
  text-align: center;
  padding: 0;
  line-height: 0;
}
</style>
