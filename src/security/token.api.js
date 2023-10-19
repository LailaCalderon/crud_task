var auth = require('./auth');

var TokenAPI = {
    generate: function (request, response) {
        response.send(auth.genToken());
    }
};

module.exports = TokenAPI;