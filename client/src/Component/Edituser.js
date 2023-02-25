import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gettingUserSingleDetail } from "../Service/api";
import { EditingUser } from "../Service/api";

const Edituser = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [User, setUser] = useState({
    name: "",
    email: "",
    phonenumber: "",
    gender: "",
  });

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    // console.log("loading user details...");
    console.log(name);
    const res = await gettingUserSingleDetail(name);
    console.log(res.data);
    setUser(res.data[0]);
    // console.log("====>",User);
  };

  const handlechange = (e) => {
    console.log(e.target.value);
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
    console.log(User);
  };

  const buttonclick = async () => {
    console.log("editing started");
    await EditingUser(User, name);
    navigate("/");
  };
  return (
    <div className="text-center">
      <div className="text-xl">EDIT FORM</div>
      <div>
        <input
          className="border"
          onChange={(e) => handlechange(e)}
          name="name"
          type="text"
          value={User.name}
          placeholder="Name"
        />
        <input
          className="border"
          onChange={(e) => handlechange(e)}
          name="email"
          type="email"
          value={User.email}
          placeholder="Email"
        />
        <input
          className="border"
          onChange={(e) => handlechange(e)}
          name="phonenumber"
          type="number"
          value={User.phonenumber}
          placeholder="phone number"
        />
      </div>
      <div>GENDER</div>
      <input
        type="radio"
        checked={User.gender === "Male"}
        onChange={(e) => handlechange(e)}
        // value={User.gender==""}
        name="gender"
      />
      Male
      <input
        type="radio"
        onChange={(e) => handlechange(e)}
        // value={User.gender}
        checked={User.gender === "Female"}
        value={User.gender}
        name="gender"
      />
      Female
      <div>
        <button className="border" onClick={buttonclick}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Edituser;
