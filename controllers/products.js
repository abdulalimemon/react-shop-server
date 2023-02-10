const getAllProduct = async(req,res) => {
    res.status(200).json({msg: "get all products"})
};

const getAllProductTesting = async(req,res) => {
    res.status(200).json({msg: "get all products testing"})
};

module.exports = { getAllProduct, getAllProductTesting};