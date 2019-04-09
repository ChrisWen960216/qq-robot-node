/**
 *  Created By ChristianWen
 *  2018/10/16 签到 - 天赋配置
 */
const talentConfig = [
  {
    id: '1',
    title: '最后遗言',
    desc: '【主动】指定群内一位群员，禁言1分钟。',
    from: '我什么也不想听',
    order: '发动口令: [@机器人 沉默 @被禁言的可怜人]',
    cost: 5,
    type: 'active',
    details: { startCost: 1 },
  },
  {
    id: '2',
    title: '缄默',
    desc: '【被动】机器人无法主动将你禁言',
    from: '沉默是最好的良药',
    order: '无',
    cost: 50,
    type: 'passive',
    details: { startCost: 0 },
  },
  {
    id: '3',
    title: '黑鬼的坟墓',
    desc: '【被动】20%概率将禁言反射。',
    from: '生死有命,富贵在天',
    cost: 10,
    type: 'passive',
    details: { startCost: 0 },
  },
  {
    id: '4',
    title: '马太福音',
    desc: '【被动】签到时，当天获得的糖果数在5个以上那么数量翻倍，在5个以下那么数量减半。',
    from: '凡有的，还要加给他，叫他有余；没有的，连他所有的也要夺过来。',
    cost: 15,
    type: 'passive',
    details: { startCost: 0 },
  },
  {
    id: '5',
    title: '最后的财富',
    desc: '【被动】签到时，你最少获得1个糖果',
    from: '钱如果不能给你带来幸福，它至少能让你在欢乐中痛苦',
    cost: 10,
    type: 'passive',
    details: { startCost: 0 },
  },
  {
    id: '6',
    title: '女神的馈赠',
    desc: '【被动】签到时，你不再随机而是固定获得4个糖果',
    cost: 30,
    type: 'passive',
    details: { startCost: 0 },
  },
  {
    id: '7',
    title: '下一个牺牲者',
    desc: '【主动】目标角色下一次签到必定无法获得糖果',
    from: '接下来，是私人恩怨了',
    order: '[@机器人] 锁定 [@可怜人]',
    cost: 5,
    type: 'active',
    details: { startCost: 5 },
  },
  {
    id: '10',
    title: '命运的左手',
    desc: '【被动】用三个骰子的最大值来模拟你的roll点',
    cost: 5,
    type: 'passive',
    details: { startCost: 0 },
  },
  {
    id: '100',
    title: '天煌圣女',
    desc: '【超绝强化】煌光驰而星流，圣女驾临。反射所有对你发动的指向性技能。',
    cost: 999,
    type: 'super_passive',
    details: { startCost: 0 },
  },
  {
    id: '999',
    title: '光之起源',
    desc: '【超绝强化】万物的起源，一切的开端。你roll点和签到永远是最大值，反射所有指向性技能，你可以不需要装备就可以使用所有的主动技能，并且不需要花费糖果',
    cost: 9999,
    type: 'super_passive',
    details: { startCost: 0 },
  },
];

module.exports = talentConfig;
