/**
 *  Created By Christian Wen
 *  2018/10/08
 *  奇遇推送，通过轮询获取奇遇数据，如果有新的那就推送.
 */

const request = require('request-promise');

// const URL = 'https://jx3.derzh.com/serendipity/?m=1&test=1&R=%E7%94%B5%E4%BF%A1%E5%85%AB%E5%8C%BA&S=%E7%BB%9D%E4%BB%A3%E5%A4%A9%E9%AA%84&t=&s=&n=&csrf=';
const URL = 'https://jx3.derzh.com/serendipity/?m=1&test=1&R=%E7%94%B5%E4%BF%A1%E5%85%AB%E5%8C%BA&S=%E7%BB%9D%E4%BB%A3%E5%A4%A9%E9%AA%84&t=%E7%BB%9D%E4%B8%96%E5%A5%87%E9%81%87&s=&n=&csrf=';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let latestTime = 0;
class Serendipity {
  static analyze(serendipityList) {
    // 获取奇遇列表中最新的那个奇遇
    const { result } = JSON.parse(serendipityList);
    const latestSerend = result[0];

    // 根据时间分析是否是新触发的奇遇
    const { time: _latestTime } = latestSerend;


    if (_latestTime === latestTime) { return null; }

    // 更新最新的奇遇时间
    latestTime = _latestTime;

    // 对比当前时间和奇遇触发的时间
    const now = new Date().getTime();
    const realLatestTime = Number(_latestTime) * 1000;
    // 如果在当前时间的五分钟之前，那么依旧不上报
    if ((now - realLatestTime) < (1 * 60 * 1000)) { return latestSerend; }
    return null;
  }

  static fetchList() {
    return new Promise((resolve, reject) => request(URL)
      .then(serendipityList => resolve(serendipityList))
      .catch(error => reject(error)));
  }
}

module.exports = Serendipity;
