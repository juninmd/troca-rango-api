const shazam = require('shazam-middleware')({
    api: {
        name: 'Troca-Rango',
        version: 1
    }
});

module.exports = (app) => {
    app.use(shazam.log);
    app.use(shazam.exception);
};