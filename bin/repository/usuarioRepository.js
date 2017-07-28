const webconfig = require('../webconfig');
const mysql = require('jano-mysql')(webconfig.database.MYSQL);

module.exports = {
        getById: (email, senha) => {
                return mysql.executeString(`SELECT * FROM smn_tro_usuario WHERE EMAIL = '${email}' AND SENHA = '${senha}'`);
        },
        getAll: () => {
                return mysql.executeString(`SELECT * FROM smn_tro_usuario`);
        },
        insert: (body) => {
                return mysql.executeObject(`INSERT INTO smn_tro_usuario SET ?`, { EMAIL: body.EMAIL, SENHA: body.SENHA, HASH: body.HASH, NOME: body.NOME, CELULAR: body.CELULAR, PUSHID: body.PUSHID, ADMINISTRADOR: body.ADMINISTRADOR });
        },
        update: (body) => {
                return mysql.executeObject(`UPDATE smn_tro_usuario SET ? WHERE IDUSUARIO = ${body.IDUSUARIO}`, { IDUSUARIO: body.IDUSUARIO, EMAIL: body.EMAIL, SENHA: body.SENHA, HASH: body.HASH, NOME: body.NOME, CELULAR: body.CELULAR, PUSHID: body.PUSHID, ADMINISTRADOR: body.ADMINISTRADOR, BLOQUEADO: body.BLOQUEADO });
        },
        delete: (id) => {
                return mysql.executeString(`DELETE FROM smn_tro_usuario WHERE IDUSUARIO = ${id}`);
        },
};
