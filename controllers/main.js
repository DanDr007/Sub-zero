
// imports
const { request, response } = require( 'express' );


// getHome
const getHome = ( req = request, res = response ) => {

    res.render( 'index', { title: 'Inicio' });

};


// getOther
const getOther = ( req = request, res = response ) => {

    res.render( 'index', { title: 'Inicio' });

};


// exports
module.exports = {
    getHome,
    getOther
};