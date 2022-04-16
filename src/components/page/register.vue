<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">高校教师科研管理系统</div>
            <el-form ref="register" :model="param" :rules="rules"  label-width="0px" class="ms-content">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <!-- 学校 -->
                <el-form-item prop="school">
                    <el-input v-model="param.school" placeholder="school">
                        <el-button slot="prepend" icon="el-icon-lx-group"></el-button>
                    </el-input>
                </el-form-item>
                <!-- 身份 -->
                <div class="identiy">
                    <el-radio v-model="radio" label="1">管理员</el-radio>
                    <el-radio v-model="radio" label="2">教师</el-radio>
                    <el-radio v-model="radio" label="3">普通用户</el-radio>
                </div>
                
                <!-- 注册 -->
                <div class="login-btn">
                    <el-button type="primary" @click="register()">注册</el-button>
                </div>
                <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            radio: '3',
            param: {},
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                school: [{ required: true, message: '请输入您所在的学校', trigger: 'blur' }],
                // identity: [{ required: true, message: '请选择您注册的身份', trigger: 'blur' }],
            },
        };
    },
    methods: {
        register() {
             this.$refs.register.validate(valid => {
                if (valid) {
                    this.$message.success('注册成功');
                    localStorage.setItem('ms_username', this.param.username);
                    this.$router.push('/dashboard');
                } else {
                    this.$message.error('请填写完整信息！');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.identiy{
    display: flex;
    height: 20px;
    justify-content: center;
    padding-bottom: 5px;
}
.el-radio {
    color: #fff;
}
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    /* background-image: url(../../assets/img/login-bg.jpg); */
    background-size: 100%;
    background-color: #242f42;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>