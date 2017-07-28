const cardapioRepository = require('../repository/cardapioRepository');
const cardapioAlimentoRepository = require('../repository/cardapioAlimentoRepository');
const mysql = require('jano-mysql')(webconfig.database.MYSQL);

module.exports = {
    insert: (body) => {
        return new Promise(() => {
            let connection = {};
            mysql.beginTransaction()
                .then(q => {
                    connection = q;
                    return cardapioRepository.insertTransaction(connection, body);
                })
                .then(q => {
                    let ID = q.insertId;
                    body.alimentos.map(i => i.IDCARDAPIO = ID);
                    return cardapioAlimentoRepository.insertTransaction(connection, body);
                })
                .then(q => {
                    connection.endConnection()
                        .then(qq => {
                            return resolve(q);
                        });
                })
                .catch(err => {
                    connection.endConnection(false)
                        .then(q => {
                            return reject(err);
                        });
                });
        });
    }
};
