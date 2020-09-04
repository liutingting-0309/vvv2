<template>
  <div id="footer">
    <ul>
      <li>
        <img src="../../images/movie.png" alt="" style="width:25px; height:25px">
        <p>电影</p>
      </li>
      <li class="movie" >
        <img src="../../images/cinema.png" alt="" style="width:25px; height:25px">
        <p>影院</p>
      </li>
      <li class="movie">
        <img src="../../images/my.png" alt="" style="width:25px; height:25px">
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
  #footer{
    width:100%;
    height:60px;
    background-color: indianred;
    justify-content: space-between;
    position:absolute;
    bottom:0;
  }
  li{
      float:left;
      list-style: none;
      text-align: center;
      margin-top:5px;
      margin-left: 20px;
    }
  .movie{
    margin-left:32%;
  }
  p{
    margin: 0;
    font-size:15px;
  }
</style>
