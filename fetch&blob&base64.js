// fetch 请求formdata  返回办一张纯图片
fetchOfUrl = () => {
  const url = "";
  const formData = new FormData();
  formData.append("file", this.baseToFBlob(clipImageBase64));
  // 添加参数
  //  formData.append("division", 130);
  fetch(url, {
    method: "POST",
    mode: "cors", // 这里不可以no-cors  要不response读取不到
    // credentials: 'include',
    responseType: "blob",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.blob();
      }
    })
    .then((data) => {
      const base64 = blobToBase64(data);
    });
};

// Base64转化为二进制   用作formdata传参
baseToBlob = (dataUrl) => {
  // 去掉url的头，并转换为byte
  const bytes = window.atob(dataUrl.split(",")[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    ab[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/png" });
};

// blob转化为base64
blobToBase64 = (blob, callback) => {
  const reader = new FileReader();
  reader.onload = function (e) {
    callback(e.target.result);
  };
  reader.readAsDataURL(blob);
};

// antd  upload 自定义上传  不上传到服务器  只是在前端展示
// 获取file，通过FileReader获取图片的 base64
customRequest = (option) => {
  const _this = this;
  const formData = new FormData();
  formData.append("files[]", option.file);
  const reader = new FileReader();
  reader.readAsDataURL(option.file);
  reader.onloadend = function (e) {
    console.log(e.target.result); // 打印图片的base64
    if (e && e.target && e.target.result) {
      option.onSuccess();
      message.success("图片上传成功", 1);
    }
  };
};

// 上传验证格式及大小
beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("只能上传JPG或PNG文件!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("图片大小需小于2MB!");
    return false;
  }
  return isJpgOrPng && isLt2M;
};

const uploadProps = {
  customRequest: this.customRequest,
  showUploadList: false, // 不展示文件列表
  beforeUpload: this.beforeUpload,
};

<Upload {...uploadProps}>
  <Button>
    <Icon type="upload" /> 上传图片
  </Button>
</Upload>;
