const js = require('./js/server.js');
const homePage = require('./lib/user-prompt.js');

js.connect(err => {
    if (err) throw err;
})

homePage();