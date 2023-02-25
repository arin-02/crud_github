import React, { useState } from "react";
import { Adduser } from "../Service/api";
import {useNavigate} from 'react-router-dom'
const Formadd = () => {
  const navigate = useNavigate();

  const [User, setUser] = useState({
    name: "",
    email: "",
    phonenumber: "",
    gender: "",
  });

  const handlechange = (e) => {
    console.log(e.target.value);
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
    console.log(User);
  };

  const buttonclick = async() => {
    await Adduser(User)
    navigate('/')
  };
  return (
    <div className="text-center">
      <div className="text-xl">Formadd</div>
      <div>
        <input
          className="border"
          onChange={(e) => handlechange(e)}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="border"
          onChange={(e) => handlechange(e)}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="border"
          onChange={(e) => handlechange(e)}
          name="phonenumber"
          type="number"
          placeholder="phone number"
        />
      </div>
      <div>GENDER</div>
      <input
        type="radio"
        value="Male"
        onChange={(e) => handlechange(e)}
        name="gender"
      />{" "}
      Male
      <input
        type="radio"
        onChange={(e) => handlechange(e)}
        value="Female"
        name="gender"
      />{" "}
      Female
      <div>
        <button className="border" onClick={buttonclick}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Formadd;
