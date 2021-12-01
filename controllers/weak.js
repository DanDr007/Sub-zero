
// imports
const { request, response } = require( 'express' );
const Weak = require( '../models/Weak' );


// getWeaks
const getWeaks = async( req = request, res = response ) => {


    const weaks = await Weak.find({ user: req.user.id }).lean();
    res.render( 'weaks', {
        title: 'Debilidades',
        weaks
    });

};


// getAddWeak
const getAddWeak = ( req = request, res = response ) => {

    res.render( 'addWeak', { title: 'Añadir debilidad' } );

};


// postAddWeak
const postAddWeak = async( req = request, res = response ) => {

    const { name, description } = req.body;
    const user = req.user.id;
    const weak = new Weak({ name, description, user });
    await weak.save();
    req.flash( 'succes', 'Debilidad agregada correctamente' );
    res.redirect( '/weaks' );

};


// getEditWeak
const getEditWeak = async( req = request, res = response ) => {

    const weak = await Weak.findById( req.params.id ).lean();
    if ( weak.user != req.user.id ) {
        req.flash( 'errors', 'Esa nota no la puedes editar' );
        res.redirect( '/weaks' );
        return;
    };
    res.render( 'editWeak', {
        title: 'Editar debilidad',
        weak
    });

};


// putEditWeak
const putEditWeak = async( req = request, res = response ) => {

    const { name, description } = req.body;
    await Weak.findByIdAndUpdate( req.params.id, { name, description });
    req.flash( 'succes', 'Debilidad editada correctamente' );
    res.redirect( '/weaks' );

};


// deleteDelWeak
const deleteDelWeak = async( req = request, res = response ) => {

    const id = req.params.id;
    await Weak.findByIdAndDelete( id );
    req.flash( 'succes', 'Debilidad eliminada correctamente' );
    res.redirect( '/weaks' );

};


// exports
module.exports = {
    getWeaks,
    getAddWeak,
    postAddWeak,
    getEditWeak,
    putEditWeak,
    deleteDelWeak
};