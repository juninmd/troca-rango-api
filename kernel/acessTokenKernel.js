const webconfig = require("../bin/webconfig.js");
const md5 = require('md5');

module.exports = (app) => {
    app.use((req, res, next) => {
        if (1 == 1) {
            next();
            return;
        }
        let header = (req.headers['authorization']);
        if (header) {
            try {
                if (header != 'aqui vai ter uma lógica muito legal de validação')
                    return res.status(401).send({
                        success: false,
                        message: {
                            userMessage: 'Token inválido!',
                            developerMessage: 'Token inválido!',
                            isSuccess: false,
                            statusCode: 403
                        }
                    });
                next();
            } catch (err) {
                return res.status(401).send({
                    success: false,
                    message: {
                        userMessage: 'Token inválido!',
                        developerMessage: 'Token inválido!',
                        isSuccess: false,
                        statusCode: 403
                    }
                });
            }
        } else {
            return res.status(401).send({
                success: false,
                message: {
                    userMessage: 'Token inválido!',
                    developerMessage: 'No token provided.',
                    isSuccess: false,
                    statusCode: 401
                }
            });
        }
    });
};