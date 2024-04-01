const mongoose=require('mongoose');
//model ye5ou name de type string w schema
const author=mongoose.model('Author',{
    name:{
        type:String
    },
    // lastName:{
    //     type:String
    // },
    // adress:{
    //     type:String
    // },
    // phone:{
    //     type:Number
    // },
    email:{
        type:String,
        unique:true//5tr famech mail bch yt3awd
    },
    password:{
        type:String
    },
    photo:{
        type:String
    }

});
module.exports= author;
