const DESTINY_LEFT_HAND = 'DESTINY_LEFT_HAND';
const DESTINY_RIGHT_HAND = 'DESTINY_RIGHT_HAND';
const NEXT_VICTIM = 'NEXT_VICTIM';
const BLACK_TOMB = 'BLACK_TOMB';
const LAST_WORD = 'LAST_WORD';
const MATTHEW_CANDY = 'MATTHEW_CANDY';
const FORBIDEN_SILENCE = 'FORBIDEN_SILENCE';
const GODNESS_GIFT = 'GODNESS_GIFT';
const LAST_CANDY = 'LAST_CANDY';

function reflexTalentCN(talentCN) {
  switch (talentCN) {
    case '最后遗言': return LAST_WORD;
    case '命运的左手': return DESTINY_LEFT_HAND;
    case '命运的右手': return DESTINY_RIGHT_HAND;
    case '缄默': return FORBIDEN_SILENCE;
    case '马太福音': return MATTHEW_CANDY;
    case '女神的礼物': return GODNESS_GIFT;
    case '黑鬼的坟墓': return BLACK_TOMB;
    case '下一个牺牲者': return NEXT_VICTIM;
    case '最后的财宝': return LAST_CANDY;
    default: return null;
  }
}

function reflexTalentEN(talentEN) {
  switch (talentEN) {
    case 'LAST_WORD': return '最后遗言';
    case 'DESTINY_LEFT_HAND': return '命运的左手';
    case 'DESTINY_RIGHT_HAND': return '命运的右手';
    case 'FORBIDEN_SILENCE': return '缄默';
    case 'MATTHEW_CANDY': return '马太福音';
    case 'GODNESS_GIFT': return '女神的礼物';
    case 'BLACK_TOMB': return '黑鬼的坟墓';
    case 'NEXT_VICTIM': return '下一个牺牲者';
    case 'LAST_CANDY': return '最后的财宝';
    default: return null;
  }
}

module.exports = {
  FORBIDEN_SILENCE,
  DESTINY_LEFT_HAND,
  DESTINY_RIGHT_HAND,
  NEXT_VICTIM,
  BLACK_TOMB,
  LAST_WORD,
  MATTHEW_CANDY,
  GODNESS_GIFT,
  LAST_CANDY,
  reflexTalentCN,
  reflexTalentEN,
};
