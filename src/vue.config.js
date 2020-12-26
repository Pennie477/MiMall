module.exports={
  devServer:{
    host:"localhost",
    post: 8080,
    proxy:{
      "/common":{
        target: "https://www.imooc.com/",
        changeOrigin : false,

      }
    }
  }
}