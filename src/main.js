import Vue from 'vue'
import App from './App'
import 'vue-block/dist/block.css';
import Block from 'vue-block';

Vue.config.productionTip = false;
Vue.use(Block);

/* eslint-disable no-new */
const MAX_COUNT = 10000;
let count = MAX_COUNT;
let createTime = 0;
let destroyTime = 0;

function runTest() {
  if (count <= 0) {
    console.log('create: ' + (createTime / MAX_COUNT));
    console.log('destroy: ' + (destroyTime / MAX_COUNT));
    return;
  }

  document.getElementById('app').innerHTML = '';
  const startTime = performance.now();
  new Vue({
    el: '#app',
    render: h => h(App),
    mounted() {
      createTime += performance.now() - startTime;
      setTimeout(() => {
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
