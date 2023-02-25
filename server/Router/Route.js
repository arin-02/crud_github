const express = require("express");
const router = express.Router();
const {adduserfunction,gettingUserData, gettingSingleUser,editUserDetails,deletinguserdata} = require("../controllers/Usercontroller");

router.post('/add',adduserfunction);
router.get('/getting',gettingUserData);
router.get('/:name',gettingSingleUser);
router.put('/:name',editUserDetails);
router.delete('/:name',deletinguserdata);

module.exports = router;
