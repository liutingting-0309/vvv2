<template>
  <div class="infoContent">
    <div class="iImg">
     <img class="infoImg" src="../../../src/assets/wyomingite.jpg" alt="">
    </div>
    <div class="mask">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.iImg{
  width:100%;
  height:200px;
  overflow: hidden;
}
.infoImg{
  width: 100%;
}
.mask{
  width: 100%;
  height: 200px;
  position: absolute;
  top:101px;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.6));
}
</style>
