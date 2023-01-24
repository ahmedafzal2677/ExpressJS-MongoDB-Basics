const User = require("../model/User");


const login = async (req,res) => {
    const { name, password, email } = req.body;

    try {

    const email = await User.find({ email: email });
    const password = await User.find({ password: password });
    
    if(email && password) { 
        console.log('Email found', email, password);
    }
    } catch (error) {
        console.log(error);
    }
}

export default login;