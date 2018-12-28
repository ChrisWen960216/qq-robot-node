const axios = require('axios');


const option = {
  method: 'post',
  url: 'https://m.5173.com/pc-game/goodsSearch/goodsSearch',
  data: {
    betweenMap: { unitprice: '0-999999' },
    unitprice: '0-999999',
    from: 1,
    queryMap: {
      gameid: 'a36ead01453c40b584f8e1e687723f2d',
      gameareaid: '',
      flag: '',
      gameraceid: '',
      gameserverid: ['7e8f17c36b7d42e8be014975ea56702e', 'b6527a0f357a47a6aa41ce74dfbea5df', '507d101609174a578e4208f87da105c1', '6d8ea3c829e9478fad1bc26e630f4165', '9137a525fc934401acca8df57b9b684e', 'e61aafdcd6ab4336ad00fa6a77ab606b', '4413a49341ea49e7a0028a1508753f04'],
      gametypeid: 'ed797e24ba8f40488e80a800ff0975d6',
      generaltypeid: '682b60e289f045339cae13d208023fc6',
      hasnostockassuricon: '',
      sellertime: 10,
      tradingtype: '',
    },
    size: 10,
    sortMap: { baseitemprice: '+' },
    baseitemprice: '+',
  },
};

async function getGold() {
  const [error, data] = await axios(option)
    .then(res => JSON.parse(res.data.result))
    .then((seqRes) => {
      const { hits } = seqRes;
      const _hits = hits.slice(0, 3);
      const _data = _hits.map(item => ({
        gamemoneyamount: item.gamemoneyamount,
        unitprice: item.unitprice,
      }));
      return [null, _data];
    })
    .catch(_error => [_error, null]);

  if (!error) {
    return { type: 'goldSearch', data };
  }
  console.log(error);
  return false;
}

module.exports = getGold;
