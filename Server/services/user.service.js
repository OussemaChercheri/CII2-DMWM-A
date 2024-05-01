
const getAllUsers = async() =>{
    try{
    const users = await user.findMany({
        include: {
            products: true
        }
    });
    return users;
    }catch (error){
        return error.message;
    }
}


const getOneUser = async({userId}) =>{
    try {
        
    const user = await user.findUnique({
        where: {
            userId
        },
    });
    return user;
    }catch(error){
       return error.message;
    }
}


const updateUser = async({userId,email,  userName, pwd}) =>{
    try{    
    
    const updated = await user.update({
            where:{
                userId
            },
            data:{
                userName,
                email,
                pwd
            },
    });
    return updated;
}catch(error){
    return error.message;
}
}

const deleteUser = async({userId}) => {
    try{
    
    const deleted = await user.delete({
        where: {
            userId
        },
    });
    return deleted
    }catch(error){
        return error.message;
    }
}

const userName = async({userId, userName}) => {
    try{
        const username = await user.findUnique({
            where:{
                userId
            },
            select:{
                userName: true
            }
        })
        return username
    } catch(error) {
        return error.message;
    }
}

module.exports ={
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    userName
}