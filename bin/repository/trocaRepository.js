const webconfig = require('../webconfig');
const mysql = require('jano-mysql')(webconfig.database.MYSQL);

module.exports = {
        getById: (id) => {
                return mysql.executeString(`SELECT * FROM smn_tro_troca WHERE IDUSUARIO = ${id}`);
        },
        getAll: () => {
                return mysql.executeString(`SELECT * FROM smn_tro_troca`);
        },
        insert: (body) => { 
                return mysql.executeObject(`INSERT INTO smn_tro_troca SET ?`, { IDCARDAPIO: body.IDCARDAPIO, IDALIMENTO: body.IDALIMENTO, DATA: body.DATA });
        },
        update: (body) => { 
                return mysql.executeObject(`UPDATE smn_tro_troca SET ? WHERE IDUSUARIO = ${body.IDUSUARIO}`, { IDUSUARIO: body.IDUSUARIO, IDCARDAPIO: body.IDCARDAPIO, IDALIMENTO: body.IDALIMENTO, DATA: body.DATA });
        },
        delete: (id) => { 
                return mysql.executeString(`DELETE FROM smn_tro_troca WHERE IDUSUARIO = ${id}`);
        },
};
