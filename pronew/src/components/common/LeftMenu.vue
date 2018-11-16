<template>
  <div class="left-menu el-border-master">
    <div class="menu-com sp-menu">
      <div class="menu-com-body">
        <i class="iconfont icon-caidan"></i>
      </div>
    </div>
    <div v-for="(item,i) in menuList" :key="item.id" :class="{'menu-com': true,'active-check': isRouterMatch(item.id)}"  @click="jump(item.link, item.id)">
      <div class="menu-com-body">
        <i :class="item.icon" class="iconfont"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },
    props: {
      // 菜单列表
      menuList: {
        type: Array,
        required: true
      }
    },
    computed: {

    },
    methods: {
      // 是否匹配当前路由
      isRouterMatch(id) {
        alert(1)
        return this.$route.meta.menuId === id
      },
      // // 显示/隐藏子菜单
      // toggleSubMenu(id) {
      //   this.$emit('toggle', {id: id})
      //   this.isShow = !this.isShow
      // },
      // 跳转
      jump(link, id) {
        alert(0)
        this.$router.push(link)
        this.$emit('initBreadCrumb', id)
      }
    }
  }
</script>

