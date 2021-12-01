
// imports
const { Router } = require( 'express' );
const { getWeaks,
        getAddWeak,
        postAddWeak,
        getEditWeak,
        putEditWeak,
        deleteDelWeak } = require('../controllers/weak');
const auth = require( '../helpers/auth' );


// router
const router = Router();


// get /weaks
router.get( '/weaks', auth ,getWeaks );


// get /addWeak
router.get( '/addWeak', auth, getAddWeak );


// post /addWeak
router.post( '/addWeak', auth, postAddWeak );


// get /editWeak
router.get( '/editWeak/:id', auth, getEditWeak );


// put /editWeak
router.put( '/editWeak/:id', auth, putEditWeak );


// delete /delWeak
router.delete( '/delWeak/:id', auth, deleteDelWeak );


// exports
module.exports = router;