<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加论文</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="论文名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="第一作者">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="刊物名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="所有作者">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="表单名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="发表时间">
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

                    <!-- 文件上传 -->
                    

                    <div>
                        <el-button class="btn-upload" type="primary" @click="handleUpdate">上传文件</el-button>
                        <el-dialog
                            title="提示"
                            :visible.sync="dialogVisible"
                            width="30%"
                            >
                            <span>
                                <el-upload class="upload-demo"
                                    ref="upload"
                                    drag 
                                    action="http://localhost:9999/api/v1/upload" 
                                    multiple
                                    :auto-upload="false"
                                    :limit="5"
                                    :on-success="handleFilUploadSuccess"
                                    :on-remove="handleRemove"
                                    >
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                    <div class="el-upload__tip" slot="tip">只能上传 Excel 文件，且不超过500kb</div>
                                </el-upload>
                            </span>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="handleUpload">确 定</el-button>
                            </span>
                        </el-dialog>
                    </div>

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
            form: {},
            dialogVisible: false
        };
    },
    methods: {

        handleRemove(file,fileList) {
				console.log(file,fileList);
			},
			submitUpload() {
				this.$refs.upload.submit();
			},
			// 文件上传成功时的函数
			handleFilUploadSuccess (res,file,fileList) {
				console.log(res,file,fileList)
				this.$message.success("上传成功")
			},
			handleUpdate () {
				this.dialogVisible = true;
			},
			// 处理文件上传的函数
			handleUpload () {
				// console.log(res,file);
				this.submitUpload()
				this.dialogVisible = false
			},


        onSubmit() {
            this.$message.success('提交成功！');
        }
    }
};
</script>

<style scoped>

.btn-upload {
		/* top: 70px;
		right: 40px; */
		/* position: fixed; */
		/* z-index: 100; */
		/* border-radius: 30px; */
		box-shadow: 0 2px 12px 0 rgba(91, 156, 255, 0.9);
        margin-bottom: 18px;
	}
	
	.el-upload {
		margin: 5px;
	}
    .el-dialog__body {
    padding: 30px 30px;
    }
    .el-dialog{
        width: 22%;
    }

</style>