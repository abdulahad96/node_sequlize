const companyController = require('../controllers').company;
const userContoller = require('../controllers').user
module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.status(200).send(
            {
                message: 'welcome to the todo Api'
            }
        )
    });
    app.post('/api/company',companyController.create)
    app.post('/api/register',userContoller.create)
}