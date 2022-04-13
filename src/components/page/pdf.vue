<template>
    <div>
    <el-upload accept=".pdf, .jpg, .jpeg, .png"
                action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileArr"
                :show-file-list="false" :auto-upload="false" :before-upload="beforeUpload"
                :on-success="upSuccess" :on-error="upError" :on-change="imgPreview">
                <el-input v-model="form.position" class="upload-input" />
           <el-button size="small" type="primary" class="upload-btn">
              <span class="iconfont icon-shangchuan" />上传文件
           </el-button>
    </el-upload>
    </div>
</template>
 
<script>
import pdf from "vue-pdf";
export default {
  components: { pdf },
  data() {
    return {
      pdfUrl: "",
      numPages: [],
      fileArr: [],
      upLoadImgUrl: ""
    }
  },
  methods: {
    beforeUpload(file) {
      const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);
      const whiteList = ["pdf", "jpg", "jpeg", "png"];
      if (whiteList.indexOf(fileSuffix) === -1) {
        this.$msg("上传文件只能是 pdf、jpg、jpeg、png", "error");
        return false;
      }
    },
    imgPreview(file) {
      this.fileArr = [];
      this.fileArr.push(file);
      this.form.position = "";
      console.log(file);
      this.form.position = file.name;
      let fileName = file.name;
      let regex = /(.jpg|.jpeg|.gif|.png|.pdf)$/;
      if (regex.test(fileName.toLowerCase())) {
        this.upLoadImgUrl = URL.createObjectURL(file.raw); // 获取URL
        this.pdfUrl = this.getPdfUrl(file);
        console.log(this.upLoadImgUrl);
      } else {
        this.$message.error("请选择图片文件");
      }
    },
    // 上传成功
    upSuccess(res) {
      this.$message({
        message: "上传成功",
        type: "success",
      });
    },
    // 上传失败
    upError(e) {
      this.$message({
        message: "上传失败",
        type: "error",
      });
    },
    //处理pdf
    getPdfUrl(file) {
      console.log(file);
      let url = window.URL.createObjectURL(file.raw); //将文件转化成url
      //加载pdf
      let loadingTask = pdf.createLoadingTask(url);
      loadingTask.promise
        .then((pdf) => {
          this.numPages = pdf.numPages;
          console.log(this.numPages);
        })
        .catch((err) => {
          console.error("pdf 加载失败", err);
        });
      return url;
    }
  }
}
</script>