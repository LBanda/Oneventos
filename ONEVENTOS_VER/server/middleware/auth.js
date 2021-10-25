const { verify } = require('jsonwebtoken');
const auth = (req, res, next) => {
	const token = req.cookies.jwt;
	// check json web token exists & is verified
	if (token) {
		verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
			if (err) {
				res.redirect('/login');
			} else {
				next();
			}
		});
	} else {
		res.redirect('/login');
	}
};

module.exports = {
	auth
};
