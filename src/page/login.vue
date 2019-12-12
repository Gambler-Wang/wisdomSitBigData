<template>
  <section id="login">
    <section class="banner"></section>
    <section class="form-box">
      <section class="form">
        <section class="logo">
          <!-- <img src="../assets/img/logo.png" alt="" /> -->
          <div>
            <p>设备管理平台</p>
            <p>{{form.code}}</p>
            <span>equipment management</span>
          </div>
        </section>
        <el-form  :model="form" status-icon :rules="rules" ref="form" label-width="100">
          <el-form-item  prop="account">
            <el-input type="text" v-model="form.account" placeholder="用户名" autocomplete="off">
              <i slot="prefix" class="el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" v-model="form.pwd" placeholder="密码" autocomplete="off">
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="text" v-model="form.code" placeholder="验证码" autocomplete="off">
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
        </el-form>
        <section class="operation-box">
          <div>
            <el-checkbox v-model="isRecordLoginInfo">记住密码</el-checkbox>
          </div>
          <router-link to="/findAccount">忘记密码?</router-link>
        </section>
        <el-button class="loginBtn theme" type="primary" @click.prevent="loginBtn('form')">登录</el-button>
        <p>没有账号?<router-link to="/register">立即注册</router-link></p>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        isRecordLoginInfo:true,
        form:{
          account:'',
          pwd:'',
          code:''
        },
        rules:{

        }
      };
    },
    created(){
      // this.delCookie("token");
      // this.login();
      // this.$router.push({'path':'/index'});
      this.getCode();
    },
    methods: {
      loginBtn(){
        this.login();
        // this.$router.push({'path':'/index'});
      },
      // login(){
      //   //默认登录
      //   let params={
      //     accountNumber:'13871573647@163.com',
      //     password:'123456'
      //   }
      //   this.postRequest(this.api.getToken,params).then(res=>{
      //     if(res.state){
      //       // this.setCookie('token', res.data.accessToken, res.data.expiresIn)
      //       // this.setCookie('account', res.data.account, res.data.expiresIn)
      //       // this.setCookie('accType', res.data.accType, res.data.expiresIn)
      //       // this.setCookie('avatar', res.data.avatar)
      //       this.setCookie('smartdeviceToken', res.datas.token, 7)
      //       this.$message({
      //         message: res.msg,
      //         type: 'success'
      //       });
      //       this.$go('/index')
      //     }
      //   })
      // },
      
      login(){
        //默认登录
        let params={
          username:'cajsadmin1',
          password:'123456',
          captcha:this.form.code
        }
        this.request(this.api.loginAPI,params,'get').then(res=>{
          if(res.code==0){
            this.setCookie('JSESSIONID', res.JSESSIONID, 3)
            this.$go('/index')
          }
        })
      },
      getCode(){
        var that =this;
        this.request(this.api.excitCodeAPI,{},'get').then(res=>{
          if(res.code==0){
           this.form.code =res.captcha;
          }
        })
      }
    }
  }
</script>

<style lang="less">
  #login {
    width: 100%;
    height: 100%;
    min-height: 768px;
    background-color: #298DDB;
    display: flex;
    .banner{
      flex: 1;
    }
    .form-box{
      display: flex;
      flex:0 0 620px;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      a{
        color: #298DDB;
      }
      .form{
        width: 520px;   
        text-align: center; 
        padding: 0 10px;
        box-sizing: border-box;
        .el-form{ 
          .el-form-item{
            margin-bottom: 40px;
            &:nth-last-of-type(1){
              margin-bottom: 26px;
            }
            i{
              font-size: 18px;
            }
            .el-input__inner{
              height: 66px;
              border-top: none;
              border-left: none;
              border-right: none;
            }
            .el-input__prefix{
              left: 20px;
              line-height: 66px;
            }
            .el-input--prefix .el-input__inner{
              padding-left: 58px;
            }
          }
        }
        .logo{
          display: flex;
          margin-bottom: 70px;
          img{
            width: 137px;
            margin-right: 15px;
          }
          div{
            text-align: left;
            p{
              font-size: 28px;
            }
            span{
              font-size: 12px;
            }
          }
        }
        .operation-box{
          display: flex;
          justify-content: space-between;
          margin-bottom: 70px;
          padding-left: 26px;
          box-sizing: border-box;
        }
        .loginBtn{
          margin-bottom: 36px;
          height: 50px;
          width: 100%
        }
      }
    }
  }
</style>
