const axios = require("axios");

const user = {
  getUserName: (username) => axios(`https://api.github.com/users/${username}`),
};

module.exports = user;
