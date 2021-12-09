const adminService = require('./adminService');
exports.register = async (req, res) => {
    const {username, email, name, password, number} = req.body;
    const admin = await adminService.register(username, email, name, password, number);
    res.redirect('/admin');
};
exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
}

exports.login = (req, res) => {
    const wrongPassword = req.query['wrong-password'] !== undefined;
    res.render('login', {wrongPassword});
}