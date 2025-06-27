const express = require('express');
const router = express.Router();
const {getContact,createContact,getContacts,updateContact,deleteContact} = require('../Controller/contactController')
router.use(require("../customMiddleware/validateToken"));


router.route('/')
.get(getContact)
.post(createContact)

router.route('/:id').get(getContacts).put(updateContact).delete(deleteContact)

module.exports = router;