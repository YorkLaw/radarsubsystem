<template>
  <div class="content">
    <Form ref="formValidate"
          
          :label-width="100">
      <FormItem label="自检结果"
                prop="selfInspectionResult">
        <Card class="lishow"
              style="padding:0">{{selfInspectionResult}}</Card>
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
      selfInspectionResult: '雷达子系统'
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
