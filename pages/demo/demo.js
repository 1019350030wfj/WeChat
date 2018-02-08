Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:"",//save 被加数
    num2:"",//save add number
    result:""//save result
  },

  bindAdd:function(e){
    var r = this.data.num1 * 1 + this.data.num2 * 1;//将两数相加
    this.setData({
      result: r // 更新结果到result变量
    });
  },

  bindInput1:function(e){
    var n = e.detail.value;
    if(!isNaN(n)){
      this.setData({
        num1:n //更新被加数
      });
    }
  },

  bindInput2:function(e){
    var n = e.detail.value;
    this.setData({
      num2:n
    });
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
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})