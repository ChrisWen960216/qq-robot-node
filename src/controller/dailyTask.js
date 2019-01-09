const axios = require('axios');

const URL = 'https://www.jx3tong.com/?m=api&c=info&a=content_list&add_ad=1&category_id=0&num=20&p=1';


async function getDailyTasks() {
  const [error, data] = await axios(URL).then(res => [null, res.data.daily_info]).catch(_error => [_error, null]);
  if (error) { console.error(error); return false; }
  return { type: 'dailyTask', data };
}

module.exports = getDailyTasks;
