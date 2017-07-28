const webconfig = require('../webconfig');
const mysql = require('jano-mysql')(webconfig.database.MYSQL);

module.exports = {
        getById: (id) => {
                return mysql.executeString(`SELECT * FROM smn_tro_tipo_alimento WHERE IDTPALIMENTO = ${id}`);
        },
        getAll: () => {
                return mysql.executeString(`SELECT * FROM smn_tro_tipo_alimento`);
        },
        insert: (body) => { 
                return mysql.executeObject(`INSERT INTO smn_tro_tipo_alimento SET ?`, { DESCRICAO: body.DESCRICAO });
        },
        update: (body) => { 
                return mysql.executeObject(`UPDATE smn_tro_tipo_alimento SET ? WHERE IDTPALIMENTO = ${body.IDTPALIMENTO}`, { IDTPALIMENTO: body.IDTPALIMENTO, DESCRICAO: body.DESCRICAO });
        },
        delete: (id) => { 
                return mysql.executeString(`DELETE FROM smn_tro_tipo_alimento WHERE IDTPALIMENTO = ${id}`);
        },
};
