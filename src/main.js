import Vue from 'vue'
import App from './App'
import AppCss from './AppCss'
import 'vue-block/dist/block.css';
import Block from 'vue-block';

Vue.config.productionTip = false;
Vue.use(Block);

/* eslint-disable no-new */
const MAX_COUNT = 1;
let count = MAX_COUNT;
let createTime = 0;
let destroyTime = 0;
const TestApp = location.search.match(/type=2/) ? AppCss : App;

function runTest() {
  if (count <= 0) {
    alert(`
      create: ${createTime / MAX_COUNT}
      create: ${destroyTime / MAX_COUNT}
    `);
    return;
  }

  document.getElementById('app').innerHTML = '';
  const startTime = performance.now();
  new Vue({
    el: '#app',
    render: h => h(TestApp),
    mounted() {
      createTime += performance.now() - startTime;
    this.$nextTick(() => {
        const startDestroyTime = performance.now();
        this.$destroy();
        destroyTime += performance.now() - startDestroyTime;
        count--;
        runTest();
      });
    }
  });
}

runTest();
