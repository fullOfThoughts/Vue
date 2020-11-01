<template>
  <div class="login">
    <div class="con">
      <el-form
        class="form"
        label-width="100px"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item label="账号" prop="ID">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="ruleForm.ID"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            prefix-icon="el-icon-cherry"
            v-model="ruleForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="less" scoped>
.login {
  background-color: #2b4b6b;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.con {
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 399px;
}
</style>
<script>
export default {
  name: 'Login',
  data: function () {
    //  自定义验证
    // let pass = (rule, value, callback) => {
    //   if (value !== '123456') {
    //     callback(new Error("密码不正确"))
    //   }
    // }

    return {
      ruleForm: {
        ID: '',
        password: ''
      },
      rules: {
        ID: [
          { required: true, message: 'ID不能为空', trigger: "blur" },
          { min: 2, max: 18, message: "ID长度不能大于18" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          // { validator: pass, trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let { data: res } = await this.$axios.post('login')
          if (res.code === 200) {
            this.$message({
              message: "登录成功",
              type: "success",
              duration: 800,
              onClose: () => {
                this.$router.push('/home')
              }
            })
          } else {
            this.$message({
              message: "登录失败",
              type: "warning"
            })
          }
        } else {
          return false
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
