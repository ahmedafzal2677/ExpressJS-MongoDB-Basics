// const User = require("../model/User");
import User from "../model/User.js";

class LoginController {
  static login = async (req, res) => {
    const { name, password, email } = req.body;

    try {
      const email = await User.findOne({ email });
      const password = await User.findOne({ password });

      if (email && password) {
        console.log("Email found", email, password);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export default LoginController;
