const dcrouter = require('express').Router();
const {
    deleteUser,
    getOneProduct,
    Like,
    disLike,
    GetAllProducts,
    addProduct,
    signUp,
    login,
    getUser,
    UpdateUser,
    deleteProduct,
    getAllUsers,
    CheckUser,
    FiltercategoProduct,
    FiltertypeProduct,
    updateOne,
   
} = require("../controller/controller");

//Posts requests
dcrouter.route('/addProduct').post(addProduct)

dcrouter.route('/deleteProduct/:id').delete(deleteProduct)

dcrouter.route('/getAllProducts').get(GetAllProducts)
dcrouter.route('/updateOneProduct/:_id').put(updateOne)


//user Requests
dcrouter.route("/getUser/:name").get(getUser); 
dcrouter.route("/getUser/:name").put(UpdateUser); 
dcrouter.route('/getAllUsers').get(getAllUsers)
dcrouter.route('/deleteUser/:name').delete(deleteUser)
dcrouter.route("/signup").post(signUp);
dcrouter.route("/login").post(login);
dcrouter.route("/check").post(CheckUser);

//product Requests
dcrouter.route("/getallproduct").get(GetAllProducts); 
dcrouter.route("/deleteProduct/:id").delete(deleteProduct); 
dcrouter.route("/productlike/:name").put(Like); 
dcrouter.route("/productdislike/:name").put(disLike); 
dcrouter.route("/oneproduct/:name").get(getOneProduct); 
dcrouter.route("/filter/:Ptype").get(FiltertypeProduct)
dcrouter.route("/filters/:Pcategorie").get(FiltercategoProduct)

//



module.exports = dcrouter;