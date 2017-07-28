const trocaRep = require('../repository/trocaRepository');

module.exports = (app) => {
    app.get("/troca/:ID", (req, res, next) => {
        trocaRep.getById(req.params.ID)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/troca/", (req, res, next) => {
        trocaRep.getAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/troca", (req, res, next) => {
        trocaRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/troca", (req, res, next) => {
        trocaRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/troca/:ID", (req, res, next) => {
        trocaRep.delete(req.params.ID)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}