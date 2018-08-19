<template>
  <div class="test">
    <div>
      <el-select :value = "selectList[0]"  placeholder="请选择" @change="groupOne.$list[0].change" >
        <el-option
          v-for="item in singleList[0].list"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <el-select :value = "selectList[1]"  placeholder="请选择" @change="groupOne.$list[1].change" >
        <el-option
          v-for="item in singleList[1].list"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import SelectGroup from '../modules/select-group/select-group'
export default {
  name: 'Test',
  props: {
    values: {
      type: Array,
      default: () => {
        return ['', '']
      }
    },
    typeList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    // let selectList = ['', '']
    // let list = [{
    //   value: 'fps',
    //   label: '第三人称射击',
    //   disabled: false
    // }, {
    //   value: 'rpg',
    //   label: '角色扮演',
    //   disabled: false
    // }, {
    //   value: 'rts',
    //   label: '即时战略',
    //   disabled: false
    // }, {
    //   value: 'act',
    //   label: '动作',
    //   disabled: false
    // }]
    let selectList = this.values
    let list = this.typeList
    let groupOne = new SelectGroup(selectList, list, (values, list) => {
      console.log('update')
      this.singleList = list
      this.selectList = values
    }, {})
    return {
      selectList,
      list,
      singleList: groupOne.$list,
      groupOne: groupOne
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test{
  height: 1000px;
}
</style>
