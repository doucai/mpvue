//index.js
//获取应用实例
const app = getApp()
Page({

  data: {
    imgurl:null,
    dataTuiJian:[{
      tit:"国庆七天假如何防毒",
      msg:"国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒",
      imgUrl:"../img/index_10.jpg"
    }, {
      tit: "国庆七天假如何防毒",
      msg: "国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒",
      imgUrl: "../img/index_12.jpg"
      }, {
        tit: "国庆七天假如何防毒",
        msg: "国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒",
        imgUrl: "../img/index_14.jpg"
    }, {
      tit: "国庆七天假如何防毒",
      msg: "国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒",
      imgUrl: "../img/index_16.jpg"
      }, {
        tit: "国庆七天假如何防毒",
        msg: "国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒",
        imgUrl: "../img/index_10.jpg"
    }, {
      tit: "国庆七天假如何防毒",
      msg: "国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒国庆七天假如何防毒",
      imgUrl: "../img/index_12.jpg"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  getData:function(){
    wx.request({
      url: 'https://www.baidu.com/', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("数据加载ok")
      }
    })
  },
 
  chooseimages:function(){
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something

          }
        })
      }
    })
  }
})