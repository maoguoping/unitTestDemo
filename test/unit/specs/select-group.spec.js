import { expect } from 'chai'
import 'element-ui/lib/theme-chalk/index.css'
import SelectGroup from '../../../src/modules/select-group/select-group'
const list = [{
  value: 'fps',
  label: '第三人称射击',
  disabled: false
}, {
  value: 'rpg',
  label: '角色扮演',
  disabled: false
}, {
  value: 'rts',
  label: '即时战略',
  disabled: false
}, {
  value: 'act',
  label: '动作',
  disabled: false
}]
describe('select-group.js', () => {
  it('create', () => {
    let selectList = ['', '']
    let singleList = []
    let groupOne = new SelectGroup(selectList, list, (values, list) => {
      singleList = list
      selectList = values
    }, {})
    setTimeout(1000, () => {
      expect(groupOne.$list.length).to.equal(selectList.length)
      expect(singleList[0].list.length).to.equal(list.length)
      expect(singleList[1].list.length).to.equal(list.length)
    })
  })
  it('set', () => {
    let selectList = ['', '']
    let singleList = []
    let groupOne = new SelectGroup(selectList, list, (values, list) => {
      singleList = list
      selectList = values
    }, {})
    selectList = ['fps', 'rpg']
    groupOne.set(selectList, list, (values, list) => {
      singleList = list
      selectList = values
    }, {})
    setTimeout(1000, () => {
      expect(groupOne.$list.length).to.equal(selectList.length)
      expect(singleList[0].list.length).to.equal(list.length - 1)
      expect(singleList[1].list.length).to.equal(list.length - 1)
    })
  })
  it('change', () => {
    let selectList = ['', '']
    let singleList = []
    let groupOne = new SelectGroup(selectList, list, (values, list) => {
      singleList = list
      selectList = values
    }, {})
    selectList = ['fps', '']
    groupOne.$list[0].change('fps')
    setTimeout(1000, () => {
      expect(groupOne.$list.length).to.equal(selectList.length)
      expect(singleList[0].list.length).to.equal(list.length)
      expect(singleList[1].list.length).to.equal(list.length - 1)
      expect(singleList[1].list.map(item => item.value)).to.not.contain('fps')
    })
  })
  it('empty list', () => {
    let selectList = []
    let groupOne = new SelectGroup(selectList, [], (values, list) => {
      selectList = values
    }, {})
    setTimeout(1000, () => {
      expect(groupOne.$list.length).to.equal(0)
    })
  })
  it('error value', () => {
    let selectList = ['aaa', '']
    let singleList = []
    let groupOne = new SelectGroup(selectList, list, (values, list) => {
      singleList = list
      selectList = values
    }, {})
    setTimeout(1000, () => {
      expect(groupOne.$list.length).to.equal(4)
      expect(singleList[0].list.length).to.equal(4)
      expect(singleList[1].list.length).to.equal(4)
    })
  })
})
