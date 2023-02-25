const usermongoose = require("../models/UserSchema");

const adduserfunction = async (req, res) => {
  console.log("helloooo");
  const user = req.body;
  //   console.log(user);
  const newuser = new usermongoose(user);
  try {
    await newuser.save();
    res.status(201).json(newuser);
  } catch (err) {
    // console.log(err);
    res.status(409).json({ message: err.message });
  }
};

const gettingUserData = async (req, res) => {
  // console.log("getting from routes");
  try {
    // finOne,findMany,find..khali chda to saara data aega
    const allusers = await usermongoose.find({});
    res.status(200).json(allusers);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
const gettingSingleUser = async (req, res) => {
  try {
    const singleuser = await usermongoose.find({ name: req.params.name });
    res.status(201).json(singleuser);
  } catch (err) {
    res.status(501).json({ message: err.message });
    // console.log({message:err.message});
  }
};
const editUserDetails = async (req, res) => {
  let user = req.body;
  const editUser = new usermongoose(user);
  console.log(req.params.name)
  try {
    await usermongoose.findOneAndUpdate({ name: req.params.name }, editUser);
    res.status(200).json(editUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
    // console.log({message:err.message});
  }
};
const deletinguserdata = async (req, res) => {
  try {
    await usermongoose.deleteOne({ name: req.params.name });
    res.status(202).json({ message:"user data deleted successfully" });
  } catch (err) {
    res.status(499).json({ message: err.message });
    // console.log({message:err.message});
  }
};

module.exports = {
  adduserfunction,
  gettingUserData,
  gettingSingleUser,
  editUserDetails,
  deletinguserdata
};
