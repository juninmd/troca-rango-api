const tipoAlimentoRep = require('../repository/tipoAlimentoRepository');

module.exports = (app) => {
    app.get("/tipoAlimento/:ID", (req, res, next) => {
        tipoAlimentoRep.getById(req.params.ID)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/tipoAlimento/", (req, res, next) => {
        tipoAlimentoRep.getAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/tipoAlimento", (req, res, next) => {
        tipoAlimentoRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/tipoAlimento", (req, res, next) => {
        tipoAlimentoRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/tipoAlimento/:ID", (req, res, next) => {
        tipoAlimentoRep.delete(req.params.ID)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}