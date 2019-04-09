# NianQi_Robot_MK.II

> By node,based on node-cq-websocket


## Docker

```sh
docker run --name=coolq --rm -p 9999:9000 -p 6700:6800  -v ~/coolq-data:/home/user/coolq -e COOLQ_URL=https://dlsec.cqp.me/cqp-full -e VNC_PASSWD=12345678 coolq/wine-coolq

```

## 功能
+ `Roll` 点
  + 口令：roll
  + 过高或者过低机器人会有吐槽

+ 签到
  + 口令：签到

+ 小游戏
  + 签到可以获得糖果，糖果可以用来在天赋商店中兑换天赋，进行趣味互动
  + 口令：天赋商店，呼出天赋商店列表
  + 口令：购买天赋 天赋名称，可以购买天赋商店中的天赋

+ 剑三相关 --- 目前只支持绝代天骄
  + 奇遇上报
    + 自动上报三分钟之内的奇遇
  + 金价查询
    + 口令: 金价
  + 日常查询
    + 口令： 日常