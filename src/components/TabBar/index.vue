<template>
  <div id="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <i class="icon iconfont icon-movie"></i>
        <p>电影</p>
      </router-link>
      <router-link class="movie" tag="li" to="/cinema">
        <i class="icon iconfont icon-cinema"></i>
        <p>影院</p>
      </router-link>
      <router-link class="movie" tag="li" to="/mine">
        <i class="icon iconfont icon-custom-my"></i>
        <p>我的</p>
      </router-link>
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
    background-color: honeydew;
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
      color:darkgrey;
    }
  li.active{
    color:white;
  }
  i{
    font-size:25px;
  }
  .movie{
    margin-left:32%;
  }
  p{
    margin: 0;
    font-size:15px;
  }
  #footer ul li.router-link-active{
    color:#f03d37;
  }
  #footer ul li.active{
    color:#f03d37;
  }
</style>
