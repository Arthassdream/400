<template>
  <div class="overview">
    <div class="msg">
      <div class="msg-head">个人信息</div>
      <div class="msg-body">
        <ul>
          <li><span>员工姓名：</span><span>刘德华</span></li>
          <li><span>员工姓名：</span><span>刘德华</span></li>
          <li><span>员工姓名：</span><span>刘德华</span></li>
        </ul>
      </div>
    </div>
    <div class="msg">
      <div class="msg-head">个人信息</div>
      <div class="msg-body">
        <ul>
          <li><span>员工姓名：</span><span>刘德华</span></li>
          <li><span>员工姓名：</span><span>刘德华</span></li>
          <li><span>员工姓名：</span><span>刘德华</span></li>
        </ul>
      </div>
    </div>
    <div class="msg">
      <div class="msg-head">个人信息</div>
      <div class="msg-body">
        <ul>
          <li><span>员工姓名：</span><span>刘德华</span></li>
          <li><span>员工姓名：</span><span>刘德华</span></li>
          <li><span>员工姓名：</span><span>刘德华</span></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        activeNames:['1']
      }
    },
    methods: {
      senior() {
        this.checked = !this.checked
      },
    },
    computed: {},
    compontes: {},
    mounted: function () {

    },
    created: function () {
      this.$http.get('http://text.com').then(function(res){
        console.log(res);
      });
    }
  }
</script>
<style scoped>
  .overview{
    padding-left: 22%;
    padding-top: 3%;
  }
  .msg{
    width: 39%;
    float: left;
    background: #fff;
    border: 1px solid #ccc;
    min-height: 30px;
    margin: 20px;
  }
  .msg-head{
    line-height: 50px;
    font-size: 16px;
    padding-left: 10px;
  }
  .msg-body{
    border-top: 1px solid #ccc;
    padding-left: 20px;

  }
  .msg-body li{
    line-height: 30px;
    font-size: 14px;
  }
</style>
