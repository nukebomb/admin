<template>
  <div class="home fillcontainer">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="header-container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="control-pannel">
      <el-menu class="menu-table" default-active="2" background-color="#324057" text-color="#fff" active-text-color="#ffd04b" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>内容管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="additem">增加条目</el-menu-item>
            <el-menu-item index="showitem">查询/修改</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-view"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-date"></i>
            <span>日志管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-service"></i>
            <span>访问分析</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-upload"></i>
            <span>数据备份</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style>
.home {
  position: relative;
}
/*
 * header-top
 */
.header-container {
  width: 100%;
  height: 60px;
  background-color: #eff2f7;
  padding-left: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*
 * control-pannel
 */
.control-pannel {
  position: absolute;
  top: 0px;
  height: 100%;
  z-index: 100;
}
.menu-table {
  padding-top: 7px;
  text-align: left;
  height: 100%;
  width: 200px;
}
/**
* content-area
*/
.content-area{
  margin-left: 200px;
  text-align: left;
}
</style>
