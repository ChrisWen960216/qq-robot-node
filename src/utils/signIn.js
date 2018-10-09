const userIdCollection = [];

function signInLimit(userId) {
  if (userIdCollection.indexOf(userId) > -1) {
    return false;
  }
  userIdCollection.push(userId);
  return true;
}

// function luckyGenerate(userId) {
//   if (userId === 957638221) { return 100; }
// }

module.exports = { signInLimit };
