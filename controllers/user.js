
// imports
const { request, response } = require( 'express' );
const User = require( '../models/User' );
const bcryptjs = require( 'bcryptjs' );
const passport = require( 'passport' );


// getLogin
const getLogin = ( req = request, res = response ) => {

    res.render( 'login', { title: 'Iniciar sesion' } );

};


// postLogin
const postLogin = passport.authenticate( 'local', {
    failureRedirect: '/login',
    successRedirect: '/weaks',
    failureFlash: true
});



// getRegister
const getRegister = ( req = request, res = response ) => {

    res.render( 'register', { title: 'Inscribirse' } );

};



// postRegister
const postRegister = async( req = request, res = response ) => {

    const { email, password, reppassword } = req.body;
    if ( password.length < 4 ) {
        req.flash( 'errors', 'Las contraseñas debes ser mayores a 4 carácteres' );
        res.redirect( '/register' );
        return;
    } else if ( password != reppassword ) {
        req.flash( 'errors', 'Las contraseñas no coinciden' );
        res.redirect( '/register' );
        return;
    } else {
        const userEmail = await User.findOne({ email });
        if ( !userEmail ) {
            const user = new User({ email, password });
            const salt = bcryptjs.genSaltSync( 10 );
            user.password = bcryptjs.hashSync( password, salt );
            await user.save();
            req.flash( 'succes', 'Te has registrado correctamente' );
            res.redirect( '/login' );
        } else {
            req.flash( 'errors', 'Oops, ese correo ya esta registrado !' );
            res.redirect( '/register' );
        };
    };

};



// getLogout
const getLogout = ( req = request, res = response ) => {

    req.logout();
    req.flash( 'succes', 'Sesion cerrada con exito' );
    res.redirect( '/login' )

};


// exports
module.exports = {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    getLogout
};