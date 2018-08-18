class SelectGroup {
  constructor (values = [], list = [], option = {}) {
    this.log('SelectGroup start initing')
    this.values = values
    this.list = list
    this.option = Object.assign({
      hasConsole: false
    }, option)
    this.$list = this.getInfoList(values, list)
  }
  set values (values) {
    console.log(values)
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
  set (values = [], list = [], option = {}) {
    this.log('SelectGroup start seting')
    this.values = values
    this.list = list
    this.option = Object.assign({
      hasConsole: false
    }, option)
    this.$list = this.getInfoList(values, list)
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
            console.log(this.$list)
            this.$list.forEach((item, index) => {
              if (index === 0) {
                console.log('first', item)
              }
              item.list = this.listFilter(item.value, this.list)
            })
          }
        })
      }
    }
    console.log('$list:', tempList)
    return tempList
  }
  listFilter (selectItem, list) {
    let outputList = this.clone(list).filter(item => {
      if (!selectItem || item.value === selectItem) {
        console.log('1:', selectItem)
        return true
      } else if (this.values.includes(selectItem)) {
        console.log('2:', selectItem)
        return false
      } else {
        console.log('3:', selectItem)
        return true
      }
    })
    console.log(outputList)
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
