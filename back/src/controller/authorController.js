const authService = require('../services/authService');
const { generateToken } = require('../_utils/generateToken');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

console.log('API_KEY:', process.env.API_KEY);
console.log('DOMAIN:', process.env.DOMAIN);

const mailgun = require('mailgun-js')({
    apiKey: process.env.API_KEY || '86220e6a-a35e9581',
    domain: process.env.DOMAIN || 'sandbox92ce5b030d354b20a6b0ca0680beb507.mailgun.org'
});

const loginController = async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const user = await authService.findData({ email });

        if (!user) {
            return res.status(400).json({ success: 0, message: "Incorrect email" });
        }

        const auth = await bcrypt.compare(pwd, user.pwd);

        if (auth) {
            const token = generateToken(user);
            return res.json({ token: token, user: user });
        } else {
            return res.status(400).json({ success: 0, message: "Incorrect password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: 0, message: "Internal server error" });
    }
}

const signUpController = async (req, res) => {
    if (!req.body || !req.body.email || !req.body.pwd || !req.body.userType || !req.body.userName) {
        return res.status(400).json({ success: 0, message: "All fields are required" });
    }

    const { email, pwd, userName, userType } = req.body;

    // Validate email address
    if (!validateEmail(email)) {
        return res.status(400).json({ success: 0, message: "Invalid email address" });
    }

    // Validate password complexity
    // if (!validatePassword(pwd)) {
    //     return res.status(400).json({ success: 0, message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number" });
    // }

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const signedUp = await authService.signUp({ email, pwd: hashedPwd, userName, userType });

        // Generate authentication token
        const token = generateToken(signedUp);

        res.status(201).json({ success: 1, message: "Signup successful", token });
    } catch (error) {
        console.error(error);
        if (error.code === 11000) {
            return res.status(400).json({ success: 0, message: "Email address already exists" });
        } else {
            return res.status(500).json({ success: 0, message: "Internal server error" });
        }
    }
};

// Helper functions
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// function validatePassword(pwd) {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     return passwordRegex.test(pwd);
// }

const forgotPwd = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await authService.findData({ email });

        if (!user) {
            return res.status(400).json({ success: 0, message: "User with this email does not exist" });
        }

        const token = jwt.sign({ userId: user.userId }, process.env.RESET_PASSWORD_KEY, { expiresIn: '50m' });
        const data = {
            from: 'noreply@hello.com',
            to: email,
            subject: 'Account Activation Link',
            html: `<h2>Please click on the link below to reset your password:</h2><a>${process.env.CLIENT_URL}/reset/${token}</a>`
        };

        const update = await authService.updateReset({ email, resetLink: token });

        if (update) {
            mailgun.messages().send(data, (error, body) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ success: 0, message: "Failed to send email" });
                }
                return res.json({ message: "Email has been sent. Check your mailbox" });
            });
        } else {
            return res.status(400).json({ success: 0, message: "Error updating reset link" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: 0, message: "Internal server error" });
    }
}

const resetPwd = async (req, res) => {
    try {
        const { pwd } = req.body;
        const resetLink = req.params.resetLink;

        if (!resetLink) {
            return res.status(400).json({ success: 0, message: "Authentication error" });
        }

        jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Incorrect token or it is expired" });
            }

            const user = await authService.findUserByResetLink({ resetLink });

            if (!user) {
                return res.status(400).json({ success: 0, message: "User with this token does not exist" });
            }

            const email = user.email;
            const reset = await authService.resetPwd({ email, pwd, resetLink });

            if (!reset) {
                return res.status(400).json({ error: "Error resetting password" });
            }

            return res.status(200).json({ message: "Your password has been changed" });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: 0, message: "Internal server error" });
    }
}

module.exports = {
    loginController,
    signUpController,
    forgotPwd,
    resetPwd
}
