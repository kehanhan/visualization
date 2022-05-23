<template>
  <div class="panel">
    <header class="title">
      <span>网络舆情预警</span>
      <More></More>
    </header>
    <ol>
      <li class="item" v-for="(item, index) in networkTop4" :key="index">
        <span class="index">{{ index + 1 }}</span>
        <span class="date">{{ item.date }}</span>
        <span class="platform">{{ item.platform }}</span>
        <span class="keyword">{{ item.keyword }}</span>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import More from "../More.vue";
const networkTop4 = ref([
  {
    date: "2018-10-12 12:23:20",
    platform: "百度贴吧",
    keyword: "平定区、李xx、吸毒、贩卖人口、盗窃商品",
  },
  {
    date: "2018-10-12 12:23:20",
    platform: "网易新闻",
    keyword: "西虹市、xxx街道、砍杀人",
  },
  {
    date: "2018-10-12 12:23:20",
    platform: "腾讯新闻",
    keyword: "西虹市、xxx街道、砍杀人",
  },
  {
    date: "2018-10-12 12:23:20",
    platform: "雅虎论坛",
    keyword: "里西区、李xx、传销、吸毒",
  },
]);
</script>

<style lang="scss" scoped>
.panel {
  margin-top: px(12);
  height: px(133);
}
ol {
  margin: px(6);
}
.item {
  display: flex;
  font-size: px(8);
  text-align: left;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: px(6);
  height: px(14);
  line-height: px(14);
  > span {
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .date {
    padding-left: px(5);
    flex: 2;
  }
  .platform {
    flex: 1;
    color: $color-highlight;
  }
  .keyword {
    flex: 2.5;
  }
}
.index {
  display: block;
  border-radius: 50%;
  text-align: center;
  min-width: px(12);
  max-width: px(12);
  max-height: px(12);
  min-height: px(12);
  background-color: #1b85da;
}
</style>
