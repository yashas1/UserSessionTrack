import User from "../models/userModel.js";



const logedUser = async (req, res) => {
    const { email, password,ipaddress } = req.body;
   
    console.log(req.socket.remoteAddress);
    console.log(ipaddress)
    const user = await User.findOne({ email });
    if(!user){
      res.status(401).send("User not registred");
    

    }
    if (user && (await user.matchPassword(password))) {
   
     user.ipdata=ipaddress;
     user.loggedAt= new Date();
      const updatelogeddetails= await user.save();


      res.json(updatelogeddetails);
    } else {
      res.status(401).send("Invalid email or password");
    
    }
  };
  

  const getUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users);
  };
const regesterUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name)

    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400).send("User already exists");
    
    }
  
    const user = await User.create({
      name,
      email,
      password,
      loggedAt:Date.now()
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        loggedAt:user.loggedAt
      });
    } else {
      res.status(400).send("Invalid user data");
    
    }
  };

  export {
    regesterUser,
    logedUser,
    getUsers  
  }