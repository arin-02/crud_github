import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getuser } from "../Service/api";
import { deletinguser } from "../Service/api";
const Crudmain = () => {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    GetAllUsers();
  }, []);
  const GetAllUsers = async () => {
    let res = await getuser();
    setUserdata(res.data);
    // console.log("====>",userdata._id);
  };

  const handledelete=async(naming)=>{
    await deletinguser(naming);
    GetAllUsers();
  }
  return (
    <div>
      <div className="text-center text-xl">CRUD OPERATION</div>
      <div>
        <button className="border text-sm">
          <Link to="/formadd">ADD NEW EMPLOYEE</Link>
        </button>
      </div>
      <div className="pt-10  ">
        <table>
          <thead className=" bg-blue-400">
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>NUMBER</th>
            <th>Gender</th>
          </thead>
          <tbody className="">
            {userdata.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item?.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phonenumber}</td>
                  <td>{item.gender}</td>
                  <button className="border" >
                  <Link to={`/formedit/${item.name}`} >EDIT</Link></button>
                  <button className="border" onClick={() => handledelete(item.name)}>DELETE</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crudmain;
