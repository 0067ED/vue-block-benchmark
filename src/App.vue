<template>
  <div id="app">
    <block
        rows="100px 200px 100px"
        cols="100px 300px auto 100px"
        pattern="
          b1 b1 b2 b3,
          b4 b5 b6 b3,
          b4 b7 b6 b8">
        <block slot="b1" class="area-1"><span slot="middle">b1</span></block>
        <block slot="b2" class="area-2"><span slot="middle">b2</span></block>
        <block slot="b3" class="area-3"><span slot="middle">b3</span></block>
        <block slot="b4" class="area-4"><span slot="middle">b4</span></block>
        <block slot="b5" class="area-5"><span slot="middle">b5</span></block>
        <block slot="b6" class="area-6"><span slot="middle">b6</span></block>
        <block slot="b7" class="area-7"><span slot="middle">b7</span></block>
        <block slot="b8" class="area-8"><span slot="middle">b8</span></block>
    </block>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  color: #495057;
  font-size: 32px;
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
