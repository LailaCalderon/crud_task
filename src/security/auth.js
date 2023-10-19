var jwt = require('jwt-simple');

var auth = {
  genToken: function () {
    var expires = this.expiresIn(7); // 7 days
    var token = jwt.encode({
      exp: expires
    }, require('./secret')());
    return {
      token: token,
      expires: expires
    };
  },
  expiresIn: function (numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
  }
}

module.exports = auth;