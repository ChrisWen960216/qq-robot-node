// function generateWeight(arg) {
//   const weight = isNaN(arg) ? 100 : arg;
// }

function roll(message) {
  const arg = Number(message.split(' ')[1]);
  const weight = Number.isNaN(arg) ? 100 : arg;
  const _roll = Math.floor(Math.random() * Math.max(weight, 100));
  return { type: 'roll', data: _roll };
}

module.exports = roll;
