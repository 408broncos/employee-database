const connection = require('./js/server.js');

connection.connect(err => {
    if (err) throw err;
})

const homePage = require('./lib/user-prompt.js');
homePage();