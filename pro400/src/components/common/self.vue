<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu
        default-active="01"
        active-text-color="blue"
        text-color="#fff"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item @click="jump(item.link, item.id)" v-for="(item) in menuList" :key="item.id" :index=item.id>
          <i :class="item.icon" class="el-icon-menu"></i>
          <span class="el-menu-vertical-demo-span" slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data(){
      return {
      }
    },
    props:{
      menuList:{
        type: Array,
        required: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      jump(link,id){
        this.$router.push(link)
        // this.$emit('initBreadCrumb', id)
      }
    }
  }
</script>
<style scoped>
  .tac{
    width: 14%;
    float: left;
  }
  .el-col{
    width: 100%;
  }
  .el-menu-vertical-demo{
    background: rgb(51, 51, 51);
  }
  .el-menu-vertical-demo-span{
    /*color: azure;*/
  }
</style>
