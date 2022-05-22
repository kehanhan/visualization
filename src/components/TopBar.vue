<template>
  <header>
    <div class="info">
      <span class="city">当前城市:{{ status.city }}</span>
      <span class="weather">{{ status.weather }}</span>
      <span class="temperature"
        >{{ status.minTemperature }} ~ {{ status.maxTemperature }}</span
      >
    </div>
    <div class="time">
      <span class="today">{{ currentTime.today }}</span>
      <span class="weekday">{{ currentTime.weekDay }}</span>
      <span class="time">{{ currentTime.time }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const status = ref({
  city: "西虹市",
  weather: "多云",
  minTemperature: "23℃",
  maxTemperature: "32℃",
});
const currentTime = ref({
  today: "",
  weekDay: "",
  time: "",
});
const setTime = () => {
  const format = (value: number) => {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = format(date.getMonth() + 1);
  const day = format(date.getDate());

  const weeks = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  );
  const weekDay = weeks[date.getDay()];
  const hour = format(date.getHours());
  const minute = format(date.getMinutes());
  const second = format(date.getSeconds());

  currentTime.value.today = year + "年" + month + "月" + day + "日";
  currentTime.value.weekDay = weekDay;
  currentTime.value.time = hour + ":" + minute + ":" + second;
};
setTime();
setInterval(setTime, 1000);
</script>

<style lang="scss" scoped>
header {
  height: px(70);
  background: url("../assets/images/header_bg.jpg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: px(15) px(80);
  > div {
    font-size: px(14);
    > span {
      margin-right: px(16);
    }
  }
}
</style>
