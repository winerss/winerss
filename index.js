/*
*  默认格式2018-04-17 11:55:33
*  timeStamp 时间戳
*  typeDate 日期分隔符
*  typeTime 时间分隔符
* */
function winTime(timeStamp, typeDate, typeTime) {
  if (!timeStamp) return false;
  if (!typeDate) typeDate = '-';
  if (!typeTime) typeTime = ':';
  let date = new Date(parseInt(timeStamp))
  let Y = date.getFullYear() + typeDate;
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + typeDate;
  let D = date.getDate() + ' ';
  let h = date.getHours() + typeTime;
  let m = date.getMinutes() + typeTime;
  let s = date.getSeconds();
  time = Y + M + D + h + m + s;
  return time;
}
/*
* price传入的金额
* type为 $ ￥符号
**/
function winPrice(price, type) {
  var intPrice = price.toString().split('.')[0];
  let decPrice = price.toString().split('.')[1];
  var resInt = '';
  for (let i = 0; i < intPrice.length; i++) {
    resInt += intPrice[i];
    if (i % 3 === 0 && i !== intPrice.length - 1) {
      resInt += ',';
    }
  }
  let result = '';
  let unit = type;
  if (!Boolean(type)) {
    unit = '';
  }
  if (Boolean(decPrice)) { // 是否有小数
    result = unit + resInt + '.' + decPrice;
  } else {
    result = unit + resInt;
  }
  return result;
}
/**
 * value 校验的值
 * type 校验类型
 * length 限制校验的长度
 */
function winCheck(value, type, length) {
  let result;
  // 邮箱验证
  if (type === 'email') {
    result = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value);
  }
  // 电话验证
  if (type === 'telphone') {
    result = /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
  }
  // 中文名字验证（2-4个汉字）
  if (type === 'name') {
    result = /^([\u4e00-\u9fa5]){2,4}$/.test(value);
  }
  // 校验车牌号码
  if (type === 'car') {
    result = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(value);
  }
  // 校验数字 length数字个数
  if (type === 'number') {
    var reg = `/^[\\d*\.?\\d]{${length}}$/`
    result = eval(reg).test(value);
  }
  return result;
}
module.exports = {
  winTime: winTime, // 时间戳转换格式
  winPrice: winPrice, // 转行金额的格式
  winCheck: winCheck // 数据排序
}
/**
 * 正则表达式
 * var str = 'absAadhfj{46496}fBff';
 * reg = /A(\S*)B/;
 * console.log(reg.exec(str))
 */