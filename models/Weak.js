
// imports
const { Schema, model } = require( 'mongoose' );


// SchemaWeak
const SchemaWeak = new Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true
    }

});


// exports
module.exports = model( 'weak', SchemaWeak );