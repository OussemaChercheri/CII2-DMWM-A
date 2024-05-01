const bcrypt = require('bcrypt');

const findData = async ({ email}) => {
    try {
        const record = await user.findFirst({
            where: {
                email
            }
        });
        return(record)

        } catch (error) {
        return {
            error: true,
            message: "email doesn't exists"
        }
    }
}

const signUp = async ({ email, pwd, userType, userName }) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(pwd, salt);

        if (pwd.length < 5) {
            return {
                error: true,
                message: "Weak password"
            };
        }

        const createdUser = await user.create({
            data: {
                email,
                pwd: hashed,
                userType,
                userName
            }
        });

        // Save the created user to the database
        const savedUser = await createdUser.save();

        return savedUser;
    } catch (error) {
        return {
            error: true,
            message: error.message
        };
    }
};


const updateReset = async({email,resetLink}) =>{
    try {
        const update = await user.update({
            where:{
                email
            },
            data:{
                resetLink
            }
        });
        return update;
    } catch (error) {
        return {
            error: true,
            message: "reset password link error"
        }
    }
    
}
//user receives a unique link to reset their password via email.
const findUserByResetLink = async({resetLink}) => {
    try {
        const found = await user.findFirst({
            where:{
                resetLink
            }
        });

        return (found);
    
    } catch (error) {
        return {
            error: true,
            message: "reset link not found"
        }
    }
}
const resetPwd = async({email,pwd, resetLink}) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(pwd, salt)
        if(pwd.length < 5) {
            return {
                error: true,
                message: "weak password"
            }
        }
        const updated = await user.update({
            where: {
                email
            },
            data:{
                pwd: hashed,
                resetLink: ''
            }
        });
        return updated;
    } catch (error) {
        return error.message
    }
}
const authService = {
    findData,
    signUp,
    updateReset,
    findUserByResetLink,
    resetPwd
}

module.exports = authService