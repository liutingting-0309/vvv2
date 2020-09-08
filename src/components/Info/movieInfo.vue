<template>
  <div class="infoContent">
    <div class="iImg">
     <img class="infoImg" src="../../../src/assets/wyomingite.jpg" alt="">
    <div class="mask">
    </div>
    </div>
    <div class="content">
      <p class="title">{{movies.title}}</p>
      <p class="actor"><span class="actorTit">导演: </span>{{movies.actor}}</p>
      <p class="score"><span class="actorTit">评分: </span>{{movies.score}}</p>
      <p class="intro">{{movies.intro}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      movies: {
        id: 1001,
        title: '无名之辈',
        actor: '陈建斌',
        toStar: ' 陈建斌/任素汐/潘斌龙/章宇/王砚辉/九孔/马吟吟/程怡/宁桓宇/邓恩熙/谢波/范翔/赵梓冲/史策/马睿瀚/林海/邓钢',
        type: '剧情/喜剧',
        score: '8.1',
        imgUrl: require('../../../src/assets/wyomingite.jpg'),
        cine: 56,
        sess: 607,
        intro: '来自乡村的笨贼眼镜（章宇 饰）和大头（潘斌龙 饰）抢了一家手机店，慌乱之中逃进坐着轮椅的单身女子嘉旗（任素汐 饰）的家中。嘉旗早已失去活着的欲望，她强横地要求俩笨贼杀死自己。另一边，某楼盘老板资金链断裂跑路，留下保安马先勇（陈建斌 饰）与讨债者周旋。马曾经是立功无数的协警，可就在转正的关头因为一场车祸毁了原本看似美好的一切。不久前他挖到一把喷子，原本打算交给当初的警察好友立功，却发现喷子被换成了水枪。而成为了新闻的手机抢劫案，让马先勇意识到喷子正在劫匪的手上。\n' + '　　漫长的一天，所有与之相关的老老少少都在纠结煎熬。他们是渺小的无名之辈，却真真切切感受到来自命运的重压……'
      }
    }
  }
}
</script>

<style>
.iImg{
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
.content{
  position: absolute;
  top:176px;
  padding:15px;
}
.content .title{
  font-size: 30px;
  font-weight: 700;
  color: #F7F7F7;
}
.content .actor,.score{
  font-size: 16px;
  color: #F7F7F7;
  margin-top: 10px;
}
.content .actorTit{
  font-size: 18px;
  color: #F7F7F7;
}
.content .intro{
  font-size:14px;
  margin-top: 20px;
}
</style>
