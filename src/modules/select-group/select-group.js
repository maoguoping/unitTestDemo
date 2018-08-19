class SelectGroup {
  constructor (values = [], list = [], update = () => {}, option = {}) {
    this.log('SelectGroup start initing')
    this.values = values
    this.list = list
    this.update = update
    this.option = Object.assign({
      hasConsole: true
    }, option)
    this.$list = this.getInfoList(values, list)
  }
  set values (values) {
    this._values = values
  }
  get values () {
    return this._values
  }
  /**
   * select组设置设置
   * @param values
   * @param list
   * @param option
   */
  set (values = [], list = [], update = () => {}, option = {}) {
    this.log('SelectGroup start seting')
    this.values = values
    this.list = list
    this.update = update
    this.option = Object.assign({
      hasConsole: false
    }, option)
    this.$list = this.getInfoList(values, list)
    this.update(this.values, this.$list)
  }
  /**
   * 对象深复制
   * @param obj
   * @return {Object}
   */
  clone (obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  /**
   * 生成各项列表
   * @param values
   * @param list
   * @return {Array}
   */
  getInfoList (values, list) {
    let tempList = []
    let length = values.length
    if (length > 0) {
      for (let i = 0; i < length; i++) {
        let outList = this.listFilter(this.values[i], this.list)
        tempList.push({
          value: this.values[i],
          list: outList,
          change: (data) => {
            this.values[i] = data
            this.$list[i].value = data
            this.$list.forEach((item, index) => {
              item.list = this.listFilter(item.value, this.list)
            })
            this.update(this.values, this.$list)
          }
        })
      }
    }
    console.log(tempList)
    return tempList
  }
  listFilter (selectItem, list) {
    let outputList = this.clone(list).filter(item => {
      if (item.value === selectItem) {
        return true
      } else if (this.values.includes(item.value)) {
        return false
      } else if (!selectItem) {
        return true
      } else {
        return true
      }
    })
    return outputList
  }
  /**
   * log输出
   * @param obj
   */
  log (obj) {
    this.option && this.option.hasConsole && console.log(obj)
  }
}
export default SelectGroup
