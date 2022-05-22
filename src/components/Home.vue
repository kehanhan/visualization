<template>
  <TopBar></TopBar>
  <main>
    <section id="left"><TodayAlert></TodayAlert></section>
    <section id="middle"></section>
    <section id="right"></section>
  </main>
</template>

<script setup lang="ts">
import TopBar from "./TopBar.vue";
import TodayAlert from "./panels/TodayAlert.vue";
</script>

<style lang="scss" scoped>
main {
  height: px(720-70);
  background-color: #0a1032;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: px(12) px(14);
  #left {
    width: px(346);
  }
  #middle {
    width: px(532);
  }
  #right {
    width: px(346);
  }
}
section {
  border: 1px solid red;
}
</style>
