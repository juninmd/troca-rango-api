module.exports = (app) => {
    app.get("/error", (req, res, next) => {
        Errors
        res.status(200).send({ retorno: 'ok' })
    })
}