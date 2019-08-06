<template>
  <div class="content">
    <Form ref="formValidate"
          :label-width="100">
      <FormItem label="指令操作码"
                prop="inspectionOperacode">
        <Card class="lishow"
              style="padding:0">{{inspectionOperacode}}</Card>
      </FormItem>
      <FormItem label="软件版本信息表">
        <Table border
               :columns="columns1"
               :data="data1"></Table>
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
      inspectionOperacode: '查询版本信息',
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
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
