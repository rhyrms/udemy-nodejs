// let dbConnection = require('../../config/db-connection');

module.exports = (srv) => {
    srv.get('/noticias', (req, res) => {
        let connection = srv.config.db();
        let noticiasModel = srv.app.models['noticias.model'];

        noticiasModel.getNoticias(connection, (error, result) => {
            // res.send(result);
            res.render('noticias/noticias', { noticias: result });
        });
    });
}