<template>
  <div class="login-wrapper">
    <div class="app-background"></div>
    <div class="login-box">
      <div class="logo">
        <img src="./../../assets/images/logo.png" alt=""></div>
      <el-form :model="form" status-icon :rules="rules"
               ref="form" label-width="100px" class="demo-ruleForm">
        <el-form-item label="OA账号" prop="username">
          <el-input type="username" v-model="form.username"
                    auto-complete="off" @keyup.enter.native="submit"></el-input>
        </el-form-item>
        <el-form-item label="OA密码" prop="password">
          <el-input type="password" v-model="form.password"
                    auto-complete="off" @keyup.enter.native="submit"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">Copyright 2016 - 2018 数字化运营部. All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/page1' });
        }
      });
    },
  },
};
</script>

<style scoped>
  .app-background {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #081222;
  }

  .login-box {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -170px;
    margin-top: -200px;
    z-index: 999;
  }

  .logo {
    margin-bottom: 40px;
    text-align: center;
    font-size: 24px;
    color: #fff;
    font-family: '幼圆';
  }

  .login-wrapper .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    color: rgba(255,255,255,.8);
    text-align: center;
  }

  .el-form-item__label {
    color: rgba(255,255,255, .7);
  }

  .el-form-item__label:before {
    color: #081222 !important;
  }
</style>
