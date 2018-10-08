/**
 *  Created By Christian Wen
 *  2018/10/08
 *  奇遇推送，通过轮询获取奇遇数据，如果有新的那就推送.
 */

const request = require('request');

const URL = 'https://jx3.derzh.com/serendipity/?m=1&test=1&R=%E7%94%B5%E4%BF%A1%E5%85%AB%E5%8C%BA&S=%E7%BB%9D%E4%BB%A3%E5%A4%A9%E9%AA%84&t=&s=&n=&csrf=44577543';

class Serendipity {
  constructor() {
    // this.domain = domain;
    // this.server = server;
    this.lastestTime = 0;
  }

  fetchSerendipityList() {
    return new Promise((resolve, reject) => request(URL, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      const { result } = JSON.parse(body);
      const latestSerend = result[0];
      const { time: latestTime } = latestSerend;
      if (latestTime === this.lastestTime) { return resolve(null); }
      this.lastestTime = latestTime;
      const now = new Date().getTime();
      const realLatestTime = Number(latestTime) * 1000;
      if (now - realLatestTime < 5 * 60 * 1000) {
        return resolve(latestSerend);
      }
      return resolve(null);
    }));
  }
}

module.exports = Serendipity;

// const TEST_GROUP_NUMBER = 869911196;
