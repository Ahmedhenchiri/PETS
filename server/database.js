const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect("mongodb://0.0.0.0/catsdogs",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((res) => console.log("data connected"))
    .catch((err) => console.log(err))

    const UserSchema = new mongoose.Schema({
        Uname: {
          type: String,
          unique: true,
        },
        Uemail: {
          type: String,
          unique: true,
        },
        Upassword: {
          type: String,
        },
        Uimage: {
          type: String,
          default:
            "https://res.cloudinary.com/dugewmeeh/image/upload/v1670743970/mawi%20cuisine/blank-profile-picture-973460_1280_pgdqwd.png",
        },
        admin: {
          type: Boolean,
          default: false,
        },
      });

      const ProductsSchema =new mongoose.Schema({
        Pname:{
            type:String,
        },
        Ptype:{
            type:String ,
            enum :['cats','dogs','kittens','puppies']
        },
        Pcategorie:{
            type:String,
            enum:['coats&jackets','sweaters&hoodies','shirts&dresses','accessories']

        },
        Pimage:{
            type:String
        },
        Pprice:{
            type:Number
        },
        Pdesciption:{
            type:String 
        },
      });

      const User = mongoose.model('User', UserSchema);
      const Product=mongoose.model('Product',ProductsSchema)
      module.exports={User,Product}