import axios from "axios";
const url = "http://localhost:4000";
export const Adduser = async (data) => {
  try {
    const res = await axios.post(`${url}/add`, data);
    return res;

  } catch (err) {
    console.log(err);
  }
};

export const getuser = async (data) => {
  try {
    const res = await axios.get(`${url}/getting`,data);
    return res;

  } catch (err) {
    console.log("error while getting user api",err);
  }
};
export const gettingUserSingleDetail = async (name) => {
  try {
    const res = await axios.get(`${url}/${name}`);
    return res;

  } catch (err) {
    console.log("error while getting gettinguser api",err);
  }
};

export const EditingUser=async(User,name)=>{
  try{
    const res = await axios.put(`${url}/${name}`,User);
    return res;
  }
  catch (err) {
    console.log("editing user failed",err);
  }
}
export const deletinguser=async(name)=>{
  try{
    await axios.delete(`${url}/${name}`);
  
  }
  catch (err) {
    console.log("deleting user failed",err);
  }
}
