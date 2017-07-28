const usuarioRepository = require('../repository/usuarioRepository');

module.exports = {
    getById: (query) => {
        return new Promise((resolve, reject) => {
            usuarioRepository.getById(query.email, query.senha)
                .then(q => {
                    if (q.content.length == 0) {
                        return reject({
                            message: {
                                userMessage: "Por favor, confira e-mail/senha",
                                developerMessage: ""
                            },
                            statusCode: 404
                        });
                    }
                    q.content = q.content[0];
                    return resolve(q);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    insert: (body) => {
        return usuarioRepository.insert(body);
    }
};
