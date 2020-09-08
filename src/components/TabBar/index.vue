<template>
  <div id="footer">
    <div class="tabbar">
      <router-link tag="div" to="/movie">
        <i class="icon iconfont icon-movie"></i>
        <p>电影</p>
      </router-link>
      <router-link class="movie" tag="div" to="/cinema">
        <i class="icon iconfont icon-cinema"></i>
        <p>影院</p>
      </router-link>
      <router-link class="movie" tag="div" to="/mine">
        <i class="icon iconfont icon-custom-my"></i>
        <p>我的</p>
      </router-link>
    </div>
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
    position:fixed;
    bottom:0;
  }
  .tabbar{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .tabbar div{
      list-style: none;
      text-align: center;
      margin-top:5px;
      margin-left: 20px;
      color:darkgrey;
    }
  div.active{
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
  #footer .tabbar div.router-link-active{
    color:#f03d37;
  }
  #footer .tabbar div.active{
    color:#f03d37;
  }
</style>
