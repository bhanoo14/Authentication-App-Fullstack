import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import  User from '../model/user.model.js'; // assuming this is your User model}


const secret_key = process.env.SECRET_KEY || 'mysecret';

export const loginAuth = async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
}

export const registerAuth = async (req, res) => {
    const { username, email, password } = req.body;
    
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.status(300).send("User already exists");
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign({ username, email }, secret_key);
  
      await User.create({
        username,
        email,
        password: hashedPassword,
      });
  
      res.json({ status: "ok", token });
    } catch (error) {
      res.status(500).json({ status: "error", message: "Something went wrong" });
    }
}

export const qouteAuth = async (req, res) => {
    const tokenByUser = req.headers['authorization']?.split(' ')[1];
  
    if (!tokenByUser) {
      return res.status(401).send("No token provided");
    }
  
    try {
      const verifiedToken = await jwt.verify(tokenByUser, secret_key);
      if (verifiedToken) {
        res.send("This is a quote by Ronin");
      } else {
        res.status(403).send("Invalid token");
      }
    } catch (error) {
      res.status(500).send("Something went wrong while verifying the token");
    }
}