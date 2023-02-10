const express = require("express");
const router = express.Router();
const { getAllProduct, getAllProductTesting } = require("../controllers/products");

router.route('/').get(getAllProduct);
router.route('/testing').get(getAllProductTesting);

module.exports = router;