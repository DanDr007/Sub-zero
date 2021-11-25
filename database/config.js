const mongoose = require( 'mongoose' );
const connection = async() => {

    try {
        await mongoose.connect( process.env.MONGODB_CNN );
        console.log( `base de datos conectada :D` );
    } catch ( err ) {
        throw new Error( `ERROR : `+err+` ` );
    };

};
module.exports = connection;