const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Product} = require("../database");
const cloudinary = require("../cloudinary");


// const deleteProduct = async (req, res) => {
//   let _id = req.params._id
//   try {
//     Product.deleteOne({ _id: _id }, (err, result) => {
//       if (err) console.log(err)
//       res.json(result)
//     })

//   } catch (error) {
//     res.json(error)
//   }
// }

const GetAllProductsCart = async (req, res) => {
  try {
    await Cart.find({}).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}
const DeleteAllProductsCart = async (req, res) => {
  try {
    await Cart.deleteMany({}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};
const addProductCart = async (req, res) => {

  const body = req.body
  console.log(body);
  try {
    await Cart.create(body, (err, result) => {
      if (err) res.json(err)
      res.json(result)
    })
  }
  catch (err) {
    console.log(err);
  }
}

const DeleteOneProductsCart = async (req, res) => {
  try {
    await Cart.deleteOne({ Pname:req.body.Pname }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};

const UpdateOneProductCart = async (req, res) => {
  try {
    

    await Cart.updateOne(
      { Pname: req.body.Pname },
      { $set: { Pquantity: req.body.Pquantity } }
    ).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};

const deleteProduct = async (req, res) => {

  await Product.findByIdAndDelete(req.params.id);
  try {
    res.status(201).json({ message: " success to delete product " });

  } catch (error) {
    res.status(404).json(error);
  }
};



const signUp = async (req, res) => {
  try {
    // const pw = bcrypt.hashSync(req.body.Upassword, 8);

    // await User.create({
    //   Uname: req.body.username,
    //   Uemail: req.body.email,
    //   Upassword: pw
    // })

    await User.create(req.body)

    res.json({ message: `${req.body.Uname} added successfuly` });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
    console.log(error);
  }
};
  

const login = async (req, res) => {
  let body = req.body;

  const user = await User.findOne({ Uemail: body.Uemail });

  if (!user) {
    return { status: "error", error: "username not found" };
  } else {
    const token = jwt.sign(

      // modified by ahlem
      
      { name: user.Uname, email: user.Uemail, Uimage: user.Uimage , admin:user.admin,},
      "topsecret"
    );
    return res.json({ user: token, status: "all good" });
  }
  }





// const SignUp= async(req,res)=>{
//     let body= req.body
//     try{
// const Password= await bcrypt.hash(body.password,10)


//     await User.create({
//       Uname: body.username,
//       Uemail: body.email,
//       Upassword: Password
//     }, (err, result) => {
//       if (err) console.log(err);

//       else res.json(result);
//     })
//   } catch (err) {

 
//     console.log('err')
//   }
// }

const CheckUser = async (req, res) => {

  try {
    const oldPassword = await bcrypt.hash(req.body.oldPassword, 10);
    const NewPassword = req.body.newPassword

    

    let Check = await bcrypt.compare(NewPassword, oldPassword);
   
    if (Check) {

      return res.json(true);
    } else {

      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    console.log(err);
  }
}
const UpdateUser = async (req, res) => {
  const username = req.params.name;
  let body = req.body;
  const { Uname, Uimage, Upassword } = body
  try {





    const Password = await bcrypt.hash(body.password, 10);

    const result = await cloudinary.uploader.upload(Uimage, {
      folder: 'D&C'
    })


 
    await User.findOneAndUpdate(
      { Uname: username },
      { Uname, Uimage: result.url, Upassword: Password }
    ).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err, 'errorrororoeeeee');
  }
};
// const Login = async (req, res) => {
//   let body = req.body


//   const user = await User.findOne({ Uname: body.username })

//   if (!user) {
//     return { status: 'error', error: 'username not found' }
//   }
//   let Check = await bcrypt.compare(
//     body.password, user.Upassword
//   )
//   if (Check) {
//     const token = jwt.sign({ name: user.Uname, email: user.Uemail }, 'topsecret')
//     return res.json({ user: token, status: 'all good' })
//   }
//   else {
//     return res.json({ status: 'error', user: false })
//   }
// }



const addProduct = async (req, res) => {

  const body = req.body
  console.log(body);
  try {
    await Product.create(body, (err, result) => {
      if (err) res.json(err)
      res.json(result)
    })
  }
  catch (err) {
    console.log(err);
  }
}

const GetAllProducts = async (req, res) => {
  try {
    await Product.find({}).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}
const getUser = async (req, res) => {
  const username = req.params.name
  try {
    await User.findOne({ Uname: username }).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}


const getAllUsers = async (req, res) => {
  try {
    await User.find({ admin: false }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};






const disLike = async (req, res) => {
  try {
    Product.findOneAndUpdate(
      { Pname: req.params.name },
      {
        $inc: { Pdislike: 1 },
      },
      (err, result) => {
        if (err) console.log(err);
        res.json(result);
      }
    );
  } catch (err) {
    res.json(err);
  }
};
const Like = async (req, res) => {

  Product.findOneAndUpdate(
    { Pname: req.params.name },
    {
      $inc: { Plike: 1 },
    },
    (err, result) => {
      if (err) console.log(err);
      res.json(result);
    }
  );

};
const getOneProduct = async (req, res) => {
  try {
    await Product.find({ _id: req.params.id }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};

const deleteUser = async (req, res) => {
  let name = req.params.name;
  try {
    User.deleteOne({ Uname: name }, (err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  } catch (error) {
    res.json(error);
  }
};

const FiltercategoProduct = async (req, res) => {
  try {
    Product.find({ Pcategorie: req.params.Pcategorie }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};
const FiltertypeProduct = async (req, res) => {
    try {
      Product.find({ Ptype: req.params.Ptype }).then((result) => {
        res.json(result);
      });
    } catch (err) {
      res.json(err);
    }
  };

  // ahlem function update product

  const updateOne = async (req, res) => {
    // console.log(req.params);
  
    // console.log(id);
  
    try {
      const productUpdated = await Product.findByIdAndUpdate(
        { _id: req.params._id },
        { $set: req.body },
        { new: true }
      );
  
      res.send(productUpdated);
    } catch (err) {
      console.log(err);
    }
  };
module.exports = {

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
  GetAllProductsCart,
  DeleteAllProductsCart,
  addProductCart,
  DeleteOneProductsCart ,
  UpdateOneProductCart
  
  
};