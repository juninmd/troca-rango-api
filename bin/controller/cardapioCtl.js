const cardapioRep = require('../repository/cardapioRepository');
const cardapioSrv = require('../service/cardapioSrv');

module.exports = (app) => {
    app.get("/cardapio/:ID", (req, res, next) => {
        cardapioRep.getById(req.params.ID)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/cardapio/", (req, res, next) => {
        cardapioRep.getAll(req.query)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/cardapio", (req, res, next) => {
        cardapioSrv.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/cardapio", (req, res, next) => {
        cardapioSrv.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/cardapio/:ID", (req, res, next) => {
        cardapioRep.delete(req.params.ID)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}