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
   
} = require("../controller/controller");

//Posts requests
dcrouter.route('/addProduct').post(addProduct)
dcrouter.route('/deleteProduct/:name').delete(deleteProduct)
dcrouter.route('/getAllProducts').get(GetAllProducts)



//user Requests
dcrouter.route("/getUser/:name").get(getUser); 
dcrouter.route("/getUser/:name").put(UpdateUser); 
dcrouter.route('/getAllUsers').get(getAllUsers)
dcrouter.route('/deleteUser/:name').delete(deleteUser)
dcrouter.route("/signup").post(signUp);
dcrouter.route("/login").post(login);
dcrouter.route("/check").post(CheckUser);

//Recipe Requests
dcrouter.route("/getallproduct").get(GetAllProducts); 
dcrouter.route("/deleteProduct/:id").delete(deleteProduct); 
dcrouter.route("/productlike/:name").put(Like); 
dcrouter.route("/productdislike/:name").put(disLike); 
dcrouter.route("/oneproduct/:name").get(getOneProduct); 
dcrouter.route("/filter/:Ptype").get(FiltertypeProduct)
dcrouter.route("/filters/:Pcategorie").get(FiltercategoProduct)

//



module.exports = dcrouter;