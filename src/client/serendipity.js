/**
 *  Created By Christian Wen
 *  2018/10/08
 *  奇遇推送，通过轮询获取奇遇数据，如果有新的那就推送.
 */

const request = require('request');

const URL = 'https://jx3.derzh.com/serendipity/?m=1&test=1&R=%E7%94%B5%E4%BF%A1%E5%85%AB%E5%8C%BA&S=%E7%BB%9D%E4%BB%A3%E5%A4%A9%E9%AA%84&t=&s=&n=&csrf=44577543';

let latestTime = 0;
class Serendipity {
  static fetchSerendipityList() {
    return new Promise((resolve, reject) => request(URL, (error, response, body) => {
      if (error) { return reject(error); }
      const { result } = JSON.parse(body);
      const latestSerend = result[0];
      const { time: _latestTime } = latestSerend;
      console.log('最近一次奇遇时间', new Date(Number(_latestTime) * 1000));
      console.log('本地存储的奇遇时间', new Date(Number(latestTime) * 1000));
      if (_latestTime === latestTime) {
        console.log('没有新的奇遇出现');
        return resolve(null);
      }

      latestTime = _latestTime;
      console.log('本地存储的奇遇时间更新为', new Date(Number(latestTime) * 1000));
      const now = new Date().getTime();
      const realLatestTime = Number(_latestTime) * 1000;
      console.log('现在的时间为', new Date());
      if ((now - realLatestTime) < 5 * 60 * 1000) {
        console.log('准备上报奇遇', latestSerend);
        return resolve(latestSerend);
      }
      console.log('时间超出上报范围，取消上报');
      return resolve(null);
    }));
  }
}

module.exports = Serendipity;
