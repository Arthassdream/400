<template>
  <div id="app">
    <!--<left-menu :menuList="menuList" @toggle="toggleSubMenu"-->
    <!--&gt;</left-menu>-->
    <self :menuList="menuList"></self>
    <router-view/>
  </div>
</template>

<script>
  import LeftMenu from './components/common/LeftMenu'
  import self from './components/common/self'
  import {MENU_LIST} from './assets/js/menu.js'

  export default {
    name: 'app',
    created() {
    },
    data() {
      return {
        menuList: MENU_LIST
      }
    },
    components: {
      LeftMenu,
      self
    },
    methods: {
      // 更新菜单列表，显示/隐藏子菜单
      toggleSubMenu(payload) {
      	let mList = this.menuList
      	for (let item of mList) {
      		if (item.id === payload.id) {
      			item.isChildrenHide = !item.isChildrenHide || false
      		}
      	}
      	this.menuList = [...mList]
      }
    }
  }
</script>

<style scoped>

</style>
