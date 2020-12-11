import axios from "axios"
import mpAdapter from "axios-miniprogram-adapter";
axios.defaults.adapter = mpAdapter;
// var xmlHttp = new XMLHttpRequest();
// import FB, {FacebookApiException} from 'fb';
var Facebook = require('facebook-node-sdk');
// var facebook = new Facebook({ appID: '411467553326619', secret: '255bf17eab98b4a0948454d0ad0be7f6' });
// const Instagram = require('instagram-web-api')
// import FB, {FacebookApiException} from 'fb';
import * as queryString from 'query-string';

const stringifiedParams = queryString.stringify({
  client_id: 411467553326619,
  redirect_uri: 'https://www.facebook.com/connect/login_success.html',
  scope: ['email', 'user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
  state:"{st=state123abc,ds=123456789}"
});
const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;
import Twitter from 'twitter-lite';
const client = new Twitter({
  consumer_key: "xJcZ9s9bEUYOZUhKAwLLRpyzS",
  consumer_secret: "SuBD0yKPmbRolVHFw9BCQgKwHkAE5whKrO0ZQAonMRHJpVKVob"
});
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );
Page({
  data:{


    url : facebookLoginUrl
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  getImage(){
    var page = this;
      my.chooseImage({
  success: (res) => {
    // formData.append("image",res.apFilePaths[0])
    // formData.append('username', 'Chris');

      page.data.url = res.apFilePaths[0]
    console.log( res.apFilePaths[0])
  },
});
  



// var imagefile = document.querySelector('#file');
// formData.append("image", imagefile.files[0]);
// axios.post('http://localhost:3000/p', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
// }).then(function (response) {
//     console.log(response);
//   }) 
//   .catch(function (error) {
//     console.log(error);
//   });
// facebook.getLoginStatus(function(response) {
//   if (response.status === 'connected') {
//     console.log(response.authResponse.accessToken);
//   }
// });
//       facebook.api('/me', function(err, data) {
//   console.log(data); // => { id: ... }
//   console.log(err)
// });

// //   https://www.facebook.com/v9.0/dialog/oauth?
//   client_id="411467553326619"
//   &redirect_uri=https://www.facebook.com/connect/login_success.html
//   &state="{st=state123abc,ds=123456789}"
// http://localhost:3000/upload


    
  },
  sendImage(){

    console.log(this.data.url)
    my.uploadFile({
  url: 'http://localhost:3000/p',
  fileType: 'image',
  fileName: 'chnageThis',
  filePath: this.data.url,
  success: (res) => {
    my.alert({
      content: 'Upload success'
    });
  },
});
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
