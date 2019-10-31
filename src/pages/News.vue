<template>
<div>
    <!--面包屑导航-->
    <div class="breadcrumb">
    <div class="container">
        <h2>
        <a href="">首页</a>&gt;<a href="">公司动态</a>
        </h2>
    </div>
    </div>
    <!--页面主体-->
    <div class="main container">
    <div class="news">
        <ul>
        <li v-for="item in news.data" :key="item.nid"><span>{{item.pubTime|dateFormat}}</span>
            <router-link :to="{name:'NewsDetail',params:{nid:item.nid}}">{{item.title}}</router-link>
        </li>
        <!--<li><span>2016-02-21</span><a href="">净美仕新风净化系统助力校园新风行动</a></li>-->
        <!--<li><span>2016-02-21</span><a href="">全国新风行动全面启动 助推净美仕战略升级</a></li>-->
        <!--<li><span>2016-02-21</span><a href="">智能空气净化器翻盘：净美仕能否领衔?</a></li>-->
        </ul>
    </div>
    <!-- 分页导航-->
    <div class="pages">
        <a v-show="curPage>1" @click.prevent="curPage--;getNews()">上一页</a>
        <a v-for="index in news.pageCount" 
        :key="index" 
        @click.prevent="curPage=index;getNews()"
        :class="{cur:index==curPage}">{{index}}</a>
        <!--<a href="">2</a>-->
        <!--<a href="">3</a>-->
        <!--<a href="">4</a>-->
        <!--<a href="">5</a>-->
        <!-- v-show="curPage<news.pageCount"//当前页小于总页数的时候才显示 -->
        <a v-show="curPage<news.pageCount" @click.prevent="curPage++;getNews()">下一页</a>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name:"News",
    //数据 固定写法
    data(){
        return{
            news:{},//存放信息
            curPage:1//存放数据
        }
    },
    methods:{
        getNews(){
            // 回调函数中的this，是axios then方法中的函数，作用域不同所以先
            // 当前作用域that
             var that=this
            // URL: http://www.codeboy.com/mfresh/data/news_select.php
            // post请求：第一个参数是请求地址，第二个是请求参数xxx&xxx&xxx
            this.axios.post('news_select.php',"pageNum="+this.curPage).then(res=>{
                console.log(res)
                // 把数据保存到news
                that.news=res.data
               
            })
            .catch(err=>{console.log(err)})
        }
    },
    //监听挂载完毕的时间点触发
    mounted(){
        // 挂载到网上以后，立刻调用方法，获取新闻数据
        this.getNews()
    },
    // 新建一个过滤器，把时间截过滤成标准日期格式
    filters:{
        dateFormat(val){
            var time=parseInt(val);
            var date=new Date(time);
            var year=date.getFullYear();
            var month=date.getMonth();
            var day=date.getDate();
            // 拼成xx年xx月xx日
            return year+"年"+month+"月"+day+"日";
        }
    }
}
</script>

<style>

</style>