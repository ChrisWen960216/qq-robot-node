const axios = require('axios');

const URL = 'https://www.jx3tong.com/?m=api&c=info&a=content_list&add_ad=1&category_id=0&num=20&p=1';

axios(URL).then(res => console.log(res.data));
