const webconfig = require('../webconfig');
const mysql = require('jano-mysql')(webconfig.database.MYSQL);

module.exports = {
        getById: (id) => {
                return mysql.executeString(`SELECT * FROM smn_tro_cardapio WHERE IDCARDAPIO = ${id}`);
        },
        getAll: (query) => {
                return mysql.executeString(`SELECT * FROM smn_tro_cardapio WHERE DATA BETWEEN ${query.DATAINI} AND ${query.DATAFIM}`);
        },
        insert: (body) => {
                return mysql.executeObject(`INSERT INTO smn_tro_cardapio SET ?`, { DATA: body.DATA });
        },
        insertTransaction: (connection, body) => {
                return mysql.executeTransaction(connection, `INSERT INTO smn_tro_cardapio SET ?`, { DATA: body.DATA });
        },
        update: (body) => {
                return mysql.executeObject(`UPDATE smn_tro_cardapio SET ? WHERE IDCARDAPIO = ${body.IDCARDAPIO}`, { IDCARDAPIO: body.IDCARDAPIO, DATA: body.DATA });
        },
        delete: (id) => {
                return mysql.executeString(`DELETE FROM smn_tro_cardapio WHERE IDCARDAPIO = ${id}`);
        },
};
