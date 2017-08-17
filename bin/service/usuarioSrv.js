const usuarioRepository = require('../repository/usuarioRepository');
const md5 = require('md5');
const randomstring = require("randomstring");

module.exports = {
    getById: (query) => {
        return new Promise((resolve, reject) => {
            usuarioRepository.getById(query.email)
                .then(q => {
                    if (q.content.length == 0) {
                        return reject({
                            message: {
                                userMessage: "Por favor, confira seu e-mail",
                                developerMessage: "Por favor, confira seu e-mail"
                            },
                            statusCode: 404
                        });
                    }
                    let body = q.content[0];

                    let senhaRequest = md5(query.senha + body.HASH);
                    if (senhaRequest != body.SENHA) {
                        return reject({
                            message: {
                                userMessage: "Por favor, confira e-mail/senha",
                                developerMessage: "Por favor, confira e-mail/senha"
                            },
                            statusCode: 404
                        });
                    }

                    delete body.SENHA;
                    delete body.HASH;
                    
                    return resolve(body);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    insert: (body) => {
        body.HASH = randomstring.generate();
        body.SENHA = md5(body.SENHA + body.HASH);
        return usuarioRepository.insert(body);
    }
};
