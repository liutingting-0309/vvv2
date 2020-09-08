<template>
  <div id="onShowing">
      <div id="movieHe" v-for="item in movies" :key="item.id">
        <div class="imgxuan" >
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="inTro" @click="toInfo">
          <p class="title">{{item.title}}</p>
          <p class="score">评分 {{item.score}}</p>
          <p class="toStar"><span class="star">主演:</span> {{item.toStar}}</p>
          <p class="intro">今天{{item.cine}}家影院放映{{item.sess}}场</p>
        </div>
        <div class="tickets">
          <div class="btn">购票</div>
        </div>
      </div>
  </div>
</template>

<script >
export default {
  data () {
    return {
      movies: [{
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
      },
      {
        id: 1002,
        title: '世界尽头',
        actor: '约翰·D·鲍斯韦尔',
        toStar: ' 大卫·爱登堡/Sean Carroll/Craig Childs/布莱恩·考克斯/Alex Filippenko/史蒂芬·霍金 /加来道雄/Lawrence Krauss/Janna Levin/Phil Plait/马丁·里斯 Mike Rowe/Michelle Thaller/尼尔·德格拉塞·泰森',
        type: '科幻/短片',
        score: '9.1',
        cine: 34,
        sess: 332,
        imgUrl: require('../../../src/assets/shijiejintou.jpg'),
        intro: '穿越时间，从人类繁盛的现在到黑洞蒸发，再到宇宙的尽头，时间的终结。沧海桑田与之相比也不过一息之间。\n' +
          '　　本片的音乐为melodysheep。最喜欢的是黑洞的部分，从大小黑洞合并的鼓声，到黑洞蒸发的圆舞曲，震撼无比。\n' +
          '　　本片解说众多，包括来自BBC的著名解说David Attenborough老爷子，里面有关黑洞蒸发部分的解说使用的是Stephen Hawking 的原音。\n' +
          '　　建议豆瓣在分类增加科普或科学分类。这已经不像是科幻，但是没得选。'
      },
      {
        id: 1003,
        title: '无名之辈',
        actor: '陈建斌',
        toStar: ' 陈建斌/任素汐/潘斌龙/章宇/王砚辉/九孔/马吟吟/程怡/宁桓宇/邓恩熙/谢波/范翔/赵梓冲/史策/马睿瀚/林海/邓钢',
        type: '剧情/喜剧',
        score: '8.1',
        imgUrl: require('../../../src/assets/wyomingite.jpg'),
        cine: 56,
        sess: 607,
        intro: '来自乡村的笨贼眼镜（章宇 饰）和大头（潘斌龙 饰）抢了一家手机店，慌乱之中逃进坐着轮椅的单身女子嘉旗（任素汐 饰）的家中。嘉旗早已失去活着的欲望，她强横地要求俩笨贼杀死自己。另一边，某楼盘老板资金链断裂跑路，留下保安马先勇（陈建斌 饰）与讨债者周旋。马曾经是立功无数的协警，可就在转正的关头因为一场车祸毁了原本看似美好的一切。不久前他挖到一把喷子，原本打算交给当初的警察好友立功，却发现喷子被换成了水枪。而成为了新闻的手机抢劫案，让马先勇意识到喷子正在劫匪的手上。\n' + '　　漫长的一天，所有与之相关的老老少少都在纠结煎熬。他们是渺小的无名之辈，却真真切切感受到来自命运的重压……'
      },
      {
        id: 1004,
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
      ]
    }
  },
  methods: {
    toInfo () {
      this.$router.push('/movie/info')
    }
  }
}
</script>

<style lang="less" scoped>
#movieHe{
  height: 120px;
  /*width: 100%;*/
  /*border: 1px solid red;*/
  display: flex;
  padding: 10px 7px;
  background-color:#f5f2f0;
  border-bottom: 1px solid #666666;
}
.imgxuan img{
  width: 87px;
  height: 116px;
  margin-right:7px;
}
.inTro{
  width: 57%;
  font-size:14px;
}
.inTro .score,.toStar{
  font-size:11px;
  margin-top:5px;
}
.inTro .title{
  font-size: 18px;
  font-weight: 700;
}
.inTro .toStar{
  width:78%;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.inTro .intro{
  height:30px;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-top:5px;
}
.inTro .star{
  font-size:15px;
}
.btn{
  background-color:red;
  width: 52px;
  height:28px;
  text-align: center;
  line-height:28px;
  border-radius: 3px;
  margin-top:40px;
  color: #e9e9e9;
}
.btn:active{
  background-color: pink;
}
</style>
