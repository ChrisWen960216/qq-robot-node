const { User: UserModel } = require('./models.js');

function updateUserById(id, userDetails) {
  return UserModel
    .findOneAndUpdate({ id }, { ...userDetails }, { upsert: true, new: true })
    .then(user => [null, user])
    .catch(error => [error, null]);
}

module.exports = { updateUserById };
