/**
 * Created By ChristianWen
 * 2018/10/16
 *  UserService
 */

class UserService {
  constructor(user) {
    this.user = user;
  }

  getSignTime() {
    const { signIn } = this.user;
    return signIn;
  }

  getUserInfo() {
    const {
      candy, armor, talent, AC, DE, id, locked,
    } = this.user;
    const userInfo = {
      candy, armor, talent, AC, DE, id, locked,
    };
    return userInfo;
  }
}

module.exports = UserService;
