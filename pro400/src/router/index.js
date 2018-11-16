import Vue from 'vue'
import Router from 'vue-router'
import overview from '@/components/overview'
import callShare from '@/components/callShare'
import callRecord from '@/components/callRecord'
import noticeRecord from '@/components/noticeRecord'
import employeeManage from '@/components/employeeManage'
import authorityManage from '@/components/authorityManage'
import callSetting from '@/components/callSetting'
import sysSetting from '@/components/sysSetting'
import billingStatistics from '@/components/billingStatistics'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/overview',
      name: 'overview',
      component: overview
    },
    {
      path: '/callShare',
      name: 'callShare',
      component: callShare
    },
    {
      path: '/callRecord',
      name: 'callRecord',
      component: callRecord
    },
    {
      path: '/noticeRecord',
      name: 'noticeRecord',
      component: noticeRecord
    },
    {
      path: '/employeeManage',
      name: 'employeeManage',
      component: employeeManage
    },
    {
      path: '/authorityManage',
      name: 'authorityManage',
      component: authorityManage
    },
    {
      path: '/callSetting',
      name: 'callSetting',
      component: callSetting
    },
    {
      path: '/sysSetting',
      name: 'sysSetting',
      component: sysSetting
    },
    {
      path: '/billingStatistics',
      name: 'billingStatistics',
      component: billingStatistics
    },
  ]
})
