<template>
  <div>
    <!--页面主体-->
    <div class="register">
    <h2>新用户注册</h2>
    <ul>
        <li>
        <span>邮箱：</span>
        <input type="text" id="uname" placeholder="请输入邮箱名" v-model="uname" />
        <em></em>
        <i></i>
        </li>
        <li>
        <span>密码：</span>
        <input type="password" id="upwd" placeholder="请输入密码" v-model="upwd" />
        <em></em>
        <i></i>
        </li>
        <li>
        <span>重复密码：</span>
        <input type="password" id="upwd2" placeholder="请重复输入密码"/>
        <em></em>
        <i></i>
        </li>
        <li>
        <span>手机号：</span>
        <input type="text" id="phone" placeholder="请输入手机号" v-model="phone" />
        <em></em>
        <i></i>
        </li>
        <li>
        <span>验证码：</span>
        <input type="text" class="inp_yzm" placeholder="请输入验证码"/>
        <img src="../assets/images/yzm.png" alt=""/>
        <strong class="icon_refresh"></strong>
        </li>
        <li class="li_checkbox"><label>
        <input type="checkbox" checked/>
        <span>我已阅读并同意用户注册协议</span>
        </label>
        </li>
        <li class="li_btn">
        <button type="button" @click="register()" >提交注册</button>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
// vue绑定
// {{}}
// v-html
// v-on @
// v-bind: :class=""
// v-model 绑定input
export default {
    name:"Register",
    data(){
      return{
        uname:"",
        upwd:"",
        phone:""
      }
    },
    methods:{
      register(){
      //user_register.php
      //uname=xxx&upwd=xxxx&phone=xxx
    // 发送ajax请求
       var args =
        "uname=" + this.uname + "&upwd=" + this.upwd + "&phone=" + this.phone;
         this.axios.post("user_register.php", args)
        .then(res=>{
          // console.log(res)
          if(res.data.code==1){
            alert("注册成功，将跳到首页");
            // 登录状态要保持session
            sessionStorage.uid=res.data.uid
            sessionStorage.uname=res.data.uname
            // 主动跳转到首页
            // $router只写
            // $route 只读
            this.$router.push({name:"index"})
            // 
          }else{
            alert("注册失败");
          }
          })
        .catch(err=>{console.log(err)})
      }
    }
}
</script>

<style>

</style>