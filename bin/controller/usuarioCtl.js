const usuarioSrv = require('../service/usuarioSrv');
const usuarioRep = require('../repository/usuarioRepository');

module.exports = (app) => {
    app.get("/usuario", (req, res, next) => {
        usuarioSrv.getById(req.query)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/usuario", (req, res, next) => {
        usuarioSrv.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/usuario", (req, res, next) => {
        usuarioRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}