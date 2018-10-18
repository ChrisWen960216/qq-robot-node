/**
 *  Created By ChristianWen
 *  2018/10/16 签到 - 天赋配置
 */
const talentConfig = [
  {
    id: '1',
    title: '最后遗言',
    desc: '【主动】指定群内一位群员，禁言1分钟。',
    order: '发动口令: [@机器人 沉默 @被禁言的可怜人]',
    cost: 5,
    type: 'active',
    details: { startCost: 1 },
  },
  {
    id: '2',
    title: '缄默',
    desc: '【被动】机器人无法主动将你禁言',
    order: '无',
    cost: 50,
    type: 'passive',
    details: { startCost: 0 },
  },
  {
    id: '3',
    title: '黑鬼的坟墓',
    desc: '【被动】【Designed by 南居客】20%概率将禁言反射。',
    cost: 10,
    type: 'passive',
    details: { startCost: 0 },
  },
  // {
  //   id: '3',
  //   title: '神卫【暂未实装】',
  //   from: '壁立千仞，无欲则刚',
  //   desc: '受到攻击时，用防御的1.5倍代替攻击。你装备防具时，额外获得20%的防御加成。',
  //   order: '无',
  //   cost: 20,
  //   type: 'passive',
  //   details: { startCost: 0 },
  // },
  // {
  //   id: '4',
  //   title: '影袭【暂未实装】',
  //   from: '银鞍照白马，飒沓如流星',
  //   desc: '你的攻击无视被动。',
  //   order: '发动口令: [@机器人 影袭 @被影袭的可怜人]',
  //   cost: 10,
  //   type: 'active',
  //   details: { startCost: 5 },
  // },
  // {
  //   id: '100',
  //   title: '天煌圣女',
  //   desc: '【超绝强化】煌光驰而星流，圣女驾临。反射所有对你发动的指向性技能。',
  //   cost: 99999,
  //   type: 'super_passive',
  //   details: { startCost: 0 },
  // },
  // {
  //   id: '200',
  //   title: '日月齐辉',
  //   desc: '【超绝强化】与日月齐光兮昭昭然。所有对你发动的指向性技能无效。',
  //   cost: 33333,
  //   type: 'supre_passive',
  //   details: { startCost: 0 },
  // },
];

module.exports = talentConfig;
