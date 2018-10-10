const userIdCollection = [];

function signInLimit(userId) {
  if (userIdCollection.indexOf(userId) > -1) {
    return false;
  }
  userIdCollection.push(userId);
  return true;
}


module.exports = { signInLimit };
