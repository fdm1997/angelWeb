<template>
  <div>
    home
    <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/404">Go to 404</router-link>
        <router-link to="/login">Go to login</router-link>
        <router-link to="/home/menu1">Go to menu1</router-link>
        <router-link to="/home/menu2">Go to menu2</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>

</template>

<script>
</script>

<style>
</style>
