function handleTimeStr(timestr) {
  const realTime = Number(timestr) * 1000;
  const realMoment = new Date(realTime);
  const realTimeStr = `${realMoment.getHours()}时${realMoment.getMinutes()}分`;
  return realTimeStr;
}

function getTodayTimeStr() {
  const todayStr = new Date(new Date().toLocaleDateString()).getTime().toString();
  return todayStr;
}

module.exports = { handleTimeStr, getTodayTimeStr };
