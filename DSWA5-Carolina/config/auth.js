module.exports = function(req, res, next) {
    if (req.isAuthenticated()) {
    return next();
    } else {
    res.status('401').json('Não autorizado');
    }
    };
    Agora, vamos alterar app/controllers/contato.js, que no final
    deverá estar assim:
    var verificaAutenticacao = require('../../config/auth');
    module.exports = function (app) {
    var controller = app.controllers.contato;
    app.route('/contatos')
    .get(verificaAutenticacao, controller.listaTodos)
    .post(verificaAutenticacao, controller.salvaContato);
    app.route('/contatos/:id')
    .get(verificaAutenticacao, controller.obtemContato)
    .delete(verificaAutenticacao, controller.removeContato);
};