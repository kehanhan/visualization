import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
function setSize() {
  const SCALE = 16 / 9;
  const cWidth = document.documentElement.clientWidth;
  const cHeight = document.documentElement.clientHeight;
  const width = cWidth / cHeight > SCALE ? cHeight * SCALE : cWidth;
  const height = width / SCALE;
  const app = (window as any).app;
  app.style.width = width + "px";
  app.style.height = height + "px";
  app.style.marginTop = (cHeight - height) / 2 + "px";
  document.documentElement.style.fontSize = `${width / 100}px`;
}
setSize();
window.onresize = setSize;
