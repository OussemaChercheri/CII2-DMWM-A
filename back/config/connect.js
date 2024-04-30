const mongoose=require('mongoose');
const uri ="mongodb+srv://Ons:TzhMrjjB3PTFKWNk@backenddb.3yansug.mongodb.net/Node-API/?retryWrites=true&w=majority&appName=BackendDb";
mongoose.connect(uri)
.then(
    //fi westha arrow function bch wa9t t5dm todhher w catch bch ken famma error
    ()=>{
        console.log('connected successufully');
    }
)
.catch(
    (err)=>{
        console.error('Failed to connect:', err);
    }
)

module.exports=mongoose;