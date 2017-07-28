const webconfig = require('../webconfig');
const mysql = require('jano-mysql')(webconfig.database.MYSQL);

module.exports = {
        getById: (id) => {
                return mysql.executeString(`SELECT * FROM smn_tro_cardapio_alimento WHERE IDCARDAPIO = ${id}`);
        },
        getAll: () => {
                return mysql.executeString(`SELECT * FROM smn_tro_cardapio_alimento`);
        },
        insert: (body) => {
                return mysql.executeObject(`INSERT INTO smn_tro_cardapio_alimento SET ?`, { IDALIMENTO: body.IDALIMENTO });
        },
        insertTransaction: (connection, body) => {
                return mysql.executeTransaction(connection, `INSERT INTO smn_tro_cardapio_alimento SET ?`, { IDALIMENTO: body.IDALIMENTO });
        },
        update: (body) => {
                return mysql.executeObject(`UPDATE smn_tro_cardapio_alimento SET ? WHERE IDCARDAPIO = ${body.IDCARDAPIO}`, { IDCARDAPIO: body.IDCARDAPIO, IDALIMENTO: body.IDALIMENTO });
        },
        delete: (id) => {
                return mysql.executeString(`DELETE FROM smn_tro_cardapio_alimento WHERE IDCARDAPIO = ${id}`);
        },
};
