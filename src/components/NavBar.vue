<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/" class="hoge">Top</router-link></el-menu-item>
  <el-menu-item index="2"> <router-link to="/skills" class="hoge">Skill</router-link> </el-menu-item>
  <el-menu-item index="3"> <router-link to="/works" class="hoge">Works</router-link> </el-menu-item>
</el-menu>
</template>

<script>
export default {  }
</script>

<style scoped>
.hoge {
  text-decoration: none;
}
</style>