<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加专利</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="110px">
                    <el-form-item label="专利名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="专利编号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="专利所有人">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="第一发明人">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="发明人">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="专利类型">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="授权日期">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseform',
    data() {
        return {
                   form: {
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    }
};
</script>