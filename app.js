const app = require("express")();
const webconfig = require('./bin/webconfig.js');
const consign = require('consign');

consign()
    .include('kernel')
    .then('bin/controller')
    .then('middleware')
    .into(app);

app.listen(webconfig.myApi.port, () => {
    console.log(`[${webconfig.myApi.name}] - Ativo :D | ${webconfig.myApi.url}:${webconfig.myApi.port}`);
});

module.exports = app;