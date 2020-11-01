<template>
  <div class="home">
    <el-container class="container">
      <el-header class="header">{{ time }}</el-header>
      <el-container class="main">
        <el-aside width="200px" class="aside">
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            class="menu"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view /></el-main>
      </el-container>
      <el-footer class="footer"><i class="el-icon-location"></i></el-footer>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.container {
  width: 100vw;
  height: 100vh;
}
.header {
  height: 8vh !important;
  background-color: #545c64;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  height: 80vh;
}
.aside {
  height: 80vh;
  overflow: hidden;
}
.menu {
  height: 80vh;
}
.footer {
  height: 10vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import moment from 'moment'
export default {
  data: function () {
    return {
      time: ""
    }
  },
  mounted: function () {
    this.timer = setInterval(() => {
      this.time = moment(Date.now()).format('YYYY-mm-DD h:mm:ss')
    }, 1000)
  },
  beforeDestroy: function () {
    clearInterval(this.timer)
  }
}
</script>>