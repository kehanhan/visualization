<template>
  <div class="panel">
    <header class="title">
      <span>今日重点人预警数</span>
    </header>
    <div class="quick-view">
      <div class="block" v-for="(value, key) in kindsData" :key="key">
        <span class="category">{{ key }}</span>
        <span class="amount">{{ value }}</span>
      </div>
    </div>
    <div class="detail sub-panel">
      <header class="subtitle">
        <span>重点人预警详情</span>
        <More></More>
      </header>
      <ol>
        <li class="item" v-for="(item, index) in personTop5" :key="index">
          <span class="index">{{ index + 1 }}</span>
          <span class="date">{{ item.date }}</span>
          <span class="name">{{ item.name }}</span>
          <td class="kind">{{ item.kind }}</td>
          <span class="activity" :title="item.activity">{{
            item.activity
          }}</span>
        </li>
      </ol>
    </div>
    <div class="space sub-panel">
      <header class="subtitle">
        <span>管控人在重点场所活跃度</span>
        <More></More>
      </header>
      <ol>
        <li class="item" v-for="(item, index) in activityTop6" :key="index">
          <span class="index">{{ index + 1 }}</span>
          <span class="name">{{ item.name }}</span>
          <span class="kind">{{ item.kind }}</span>
          <span class="times">{{ item.times }}次</span>
          <span class="stats" :title="item.stats">{{ item.stats }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import More from "../More.vue";
import { ref } from "vue";

const kindsData = ref({
  前科: 34,
  在逃: 6,
  涉毒: 3,
  上访: 12,
  涉恐: 2,
  涉稳: 54,
  精神病: 67,
  其他: 32,
});
const personTop5 = ref([
  {
    date: "2018-10-12 12:23:20",
    name: "李全才",
    kind: "全科",
    activity:
      "在火山二手车专卖店活动在火山二手车专卖店活动在火山二手车专卖店活动",
  },
  {
    date: "2018-10-12 12:23:20",
    name: "李才",
    kind: "全科",
    activity: "在火山二手车专卖店活动",
  },
  {
    date: "2018-10-12 12:23:20",
    name: "李才",
    kind: "全科",
    activity: "在火山二手车专卖店活动",
  },
  {
    date: "2018-10-12 12:23:20",
    name: "李全才",
    kind: "全科",
    activity: "在火山二手车专卖店活动",
  },
  {
    date: "2018-10-12 12:23:20",
    name: "李全才",
    kind: "全科",
    activity: "在火山二手车专卖店活动",
  },
]);

const activityTop6 = ref([
  {
    name: "李全才",
    kind: "前科",
    times: "164",
    stats: "大山二手车专卖 65;飞哥二手车专卖 24;",
  },
  {
    name: "李全才",
    kind: "精神病",
    times: "4",
    stats: "西虹西红柿酒店 4;",
  },
  {
    name: "李全才",
    kind: "前科",
    times: "3",
    stats: "西虹西红柿酒店 3;",
  },
  {
    name: "李全才",
    kind: "前科",
    times: "2",
    stats: "西虹西红柿酒店 2;",
  },
  {
    name: "李全才",
    kind: "前科",
    times: "2",
    stats: "西虹西红柿酒店 2;",
  },
  {
    name: "李全才",
    kind: "前科",
    times: "1",
    stats: "西虹西红柿酒店 1;",
  },
]);
</script>

<style lang="scss" scoped>
.panel {
  height: px(480);
}
.quick-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: px(12);
  .block {
    border: 1px solid #5f92b6;
    width: px(70);
    height: px(53);
    margin-bottom: px(12);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .category {
      white-space: nowrap;
      background-color: #055786;
      font-size: px(12);
    }
    .amount {
      color: #37aff4;
      font-size: px(18);
      margin: auto;
    }
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
}
.detail {
  height: px(134);
  overflow: hidden;
  margin-bottom: px(10);
  > ol {
    margin: px(10) px(6);
    .date {
      padding-left: px(5);
      flex: 10;
    }
    .name {
      color: #49bfd4;
      flex: 3;
    }
    .kind {
      margin-left: px(5);
      flex: 2;
      margin-right: px(15);
    }
    .activity {
      width: px(110);
      flex: 9;
    }
  }
}
.space {
  height: px(150);
  overflow: hidden;
  ol {
    margin: px(12) px(6);
    > li {
      &:nth-child(1) .index {
        background-color: red;
      }
      &:nth-child(2) .index {
        background-color: orange;
      }
      &:nth-child(3) .index {
        background-color: #dbbf1b;
      }
    }
    .name {
      flex: 3;
      margin-left: px(5);
      margin-right: px(5);
    }
    .kind {
      flex: 3;
    }
    .times {
      flex: 3;
      text-align: center;
      margin-right: px(8);
    }
    .stats {
      flex: 16;
      padding-left: px(10);
      background-color: #16436c;
    }
  }
}
</style>
