<template>
  <div id = "continer">
        <el-col :span="18">
            账号：<el-input
              placeholder="请输入用户名"
              v-model="loginForm.username"
              clearable>
            </el-input>
        </el-col>
      </el-row>
      <el-row class="center">
        <el-col :span="18">
          密码： <el-input placeholder="请输入密码" v-model="loginForm.password" show-password>
          </el-input>
        </el-col>
     </el-row>

    <el-button

                type="primary"
                :loading="loading"
                @click.native.prevent="handleLogin"
              >登录</el-button>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(response => {
              this.loading = false;
              let code = response.data.code;
              if (code == 200) {
                this.$router.push({
                  path: "/success",
                  query: { data: response.data.data }
                });
              } else {
                this.$router.push({
                  path: "/error",
                  query: { message: response.data.message }
                });
              }
            })
            .catch(() => {
              this.loading = false;
            }); 
    }
  }
};
</script>

<style>
  #continer {
    width: 100%;
    height: 100%;
  }
</style>
