const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatTime_8 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${[year, month, day].map(formatNumber).join('-')}`
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**  
* 计算两个日期之间的天数  
* @param {string} Date_end 结束日期  
* @param {string} Date_start 开始日期  
* @return {number} iDays间隔的天数  
*/ 
const dateDiff=(Date_end, Date_start)=>{ 
  let aDate, oDate1, oDate2, iDays;
  Date_end = Date_end.split(" "); //将时间以空格划分为两个数组  第一个数组是 2019-05-20 第二个数组是 00：00：00
  aDate = Date_end[0].split("-"); //获取第一个数组的值
  oDate1 = new Date(aDate[0] , aDate[1] ,aDate[2]); //将前半个数组以-拆分，每一个是一个数值
  Date_start = Date_start.split(" ");
  aDate = Date_start[0].split("-");
  oDate2 = new Date(aDate[0] , aDate[1] , aDate[2]);
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
  return iDays;
}


module.exports = {
  formatTime,
  dateDiff,
  formatTime_8
}
