const webconfig = require('../webconfig');
const mysql = require('jano-mysql')(webconfig.database.MYSQL);

module.exports = {
        getById: (id) => {
                return mysql.executeString(`SELECT * FROM smn_tro_alimento WHERE IDALIMENTO = ${id}`);
        },
        getAll: () => {
                return mysql.executeString(`SELECT * FROM smn_tro_alimento`);
        },
        insert: (body) => {
                return mysql.executeObject(`INSERT INTO smn_tro_alimento SET ?`, { DESCRICAO: body.DESCRICAO, IDTPALIMENTO: body.IDTPALIMENTO });
        },
        update: (body) => {
                return mysql.executeObject(`UPDATE smn_tro_alimento SET ? WHERE IDALIMENTO = ${body.IDALIMENTO}`, { IDALIMENTO: body.IDALIMENTO, DESCRICAO: body.DESCRICAO, IDTPALIMENTO: body.IDTPALIMENTO });
        },
        delete: (id) => {
                return mysql.executeString(`DELETE FROM smn_tro_alimento WHERE IDALIMENTO = ${id}`);
        },
};
