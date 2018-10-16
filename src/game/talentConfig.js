/**
 *  Created By ChristianWen
 *  2018/10/16 签到 - 天赋配置
 */
const talentConfig = [
  {
    id: '1',
    title: '最后遗言',
    from: '告诉我，安德森先生，如果一个人连嘴巴都没有，他该怎么打电话呢?',
    desc: '指定群内一位群员，禁言1分钟。',
    order: '发动口令: [@机器人 沉默 @被禁言的可怜人]',
    cost: 5,
    type: 'active',
    details: { startCost: 1 },
  },
  {
    id: '2',
    title: '沉默的羔羊',
    from: '如果我全是被动技能，那么沉默就对我无效了，对吧?',
    desc: '机器人无法主动将你禁言',
    order: '无',
    cost: 20,
    type: 'passive',
    details: { startCost: 0 },
  },
];

module.exports = talentConfig;
