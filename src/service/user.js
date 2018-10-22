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
      candy, armor, talent, id, locked,
    } = this.user;
    return {
      candy, armor, talent, id, locked,
    };
  }
}

module.exports = UserService;
