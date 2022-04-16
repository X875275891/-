<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加教师</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="110px" class="center">
                    <el-form-item label="教师名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="教师身份证号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="教师性别" prop="sex">
                        <el-radio-group v-model="form.isGroupcompany">
                            <el-radio label="男" value="1"></el-radio>
                            <el-radio label="女" value="2"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="政治面貌" prop="food">
                        <el-select v-model="form.politicalOutlook" placeholder="请选择政治面貌">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="住址">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="职称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="入职日期">
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
                        <el-button type="primary" @click="onSubmit">提交 </el-button>
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
             form: {},
            options: [{
            value: '1',
            label: '共产党员'
            }, {
            value: '2',
            label: '共青团员'
            }, {
            value: '3',
            label: '群众'
            },],
            rules: {
                name: [{ required: true, message: "请输入名称", trigger: "blur" }],
                // 下拉选择的触发条件是change，一定不要搞错了
                politicalOutlook: [{ required: true, message: "请选择政治面貌", trigger: "change" }],
            },
        
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    }
};
</script>
