<template>
  <div class="test">
    <div>
        <el-select v-model="valueOne" placeholder="请选择" @change="groupOne.$list[0].change">
          <el-option
            v-for="item in listOne"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      <el-select v-model="valueTwo" placeholder="请选择" @change="groupOne.$list[1].change">
        <el-option
          v-for="item in listTwo"
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
  data () {
    let groupOne = new SelectGroup(['', ''], [], {
    })
    return {
      valueOne: '',
      valueTwo: '',
      listOne: [],
      listTwo: [],
      groupOne: groupOne
    }
  },
  created () {
  },
  mounted () {
    this.list = [{
      value: 'fps',
      label: '第三人称射击'
    }, {
      value: 'rpg',
      label: '角色扮演'
    }, {
      value: 'rts',
      label: '即时战略'
    }, {
      value: 'act',
      label: '动作'
    }]
    this.groupOne.set([this.valueOne, this.valueTwo], this.list, {
    })
    this.listOne = this.groupOne.$list[0].list
    this.listTwo = this.groupOne.$list[1].list
    console.log(this.listOne)
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
