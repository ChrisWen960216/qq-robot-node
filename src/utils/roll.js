function roll() {
  const _roll = Math.floor(Math.random() * 100);
  return { type: 'roll', data: _roll };
}

module.exports = roll;
