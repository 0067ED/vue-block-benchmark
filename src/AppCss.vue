<template>
<div class="main" id="app">
  <div class="e col-1">
    <div class="e col-1-1 area-1"><span class="middle">b1</span></div>
    <div class="e col-1-2">
      <div class="e col-1-2-1 area-4">
        <span class="middle">b4</span>
      </div>
      <div class="e col-1-2-2">
        <div class="e col-1-2-2-1 area-5">
          <span class="middle">b5</span>
        </div>
        <div class="e col-1-2-2-2 area-7">
          <span class="middle">b7</span>
        </div>
      </div>
    </div>
  </div>

  <div class="e col-2">
    <div class="e col-2-1 area-2">
      <span class="middle">b2</span>
    </div>
    <div class="e col-2-2 area-6">
      <span class="middle">b6</span>
    </div>
  </div>

  <div class="e col-3">
    <div class="e col-3-1 area-3">
      <span class="middle">b3</span>
    </div>
    <div class="e col-3-2 area-8">
      <span class="middle">b8</span>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'appCss'
}
</script>

<style>
body {
  margin: 0;
}
.main {
  color: #495057;
  font-size: 32px;
  width: 100vw;
  height: 100vh;
}

.e {
  position: relative;
  float: left;
}
.e:after {
  content: '';
  display: table;
  clear: left;
}
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}


.col-1 {
  width: calc(100px + (100% - 300px) * 1 / 3);
  height: 100%;
}
.col-1-1 {
  width: 100%;
  height: 100px;
}
.col-1-2 {
  width: 100%;
  height: calc(100% - 100px);
}
.col-1-2-1 {
  width: 100px;
  height: 100%;
}
.col-1-2-2 {
  width: calc(100% - 100px);
  height: 100%;
}
.col-1-2-2-1 {
  width: 100%;
  height: calc(100% - 200px);
}
.col-1-2-2-2 {
  width: 100%;
  height: 200px;
}

.col-2 {
  width: calc((100% - 300px) * 2 / 3);
  height: 100%;
}
.col-2-1 {
  width: 100%;
  height: 100px;
}
.col-2-2 {
  width: 100%;
  height: calc(100% - 100px);
}

.col-3 {
  width: 200px;
  height: 100%;
}
.col-3-1 {
  width: 100%;
  height: calc(100% - 200px);
}
.col-3-2 {
  width: 100%;
  height: 200px;
}



.area-1 {
    background: #ffe8cc;
}
.area-2 {
    background: #ffd8a8;
}
.area-3 {
    background: #ffc078;
}
.area-4 {
    background: #ffa94d;
}
.area-5 {
    background: #ff922b;
}
.area-6 {
    background: #fd7e14;
}
.area-7 {
    background: #f76707;
}
.area-8 {
    background: #e8590c;
}
</style>
