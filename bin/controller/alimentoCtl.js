const alimentoRep = require('../repository/alimentoRepository');

module.exports = (app) => {
    app.get("/alimento/:ID", (req, res, next) => {
        alimentoRep.getById(req.params.ID)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/alimento/", (req, res, next) => {
        alimentoRep.getAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/alimento", (req, res, next) => {
        alimentoRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/alimento", (req, res, next) => {
        alimentoRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/alimento/:ID", (req, res, next) => {
        alimentoRep.delete(req.params.ID)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}