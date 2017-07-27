module.exports = (app) => {
    app.get("/ping", (req, res, next) => {
        res.status(200).send({ status: 'ONLINE' })
    })
}