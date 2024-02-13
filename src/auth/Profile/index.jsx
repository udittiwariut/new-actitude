import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { dbFirestore } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Header from "./header";
import AdminHeader from "./header";
const Profile = () => {
  const [usersData, setUsersData] = useState([]);
  const [usersDataEamil, setUsersDataEmail] = useState(null);
  const [isBool, setBool] = useState(false);
  const [isBool1, setBool1] = useState(false);
  const navigate = useNavigate();
  const fetchPost = async () => {
    await getDocs(collection(dbFirestore, "Users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsersData(newData);
      console.log("todos", newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, [isBool]);

  const deleteP = async (id) => {
    const reference = doc(dbFirestore, "Users", id);
    await deleteDoc(reference).then(() => {
      alert("user delete");
    });
    setBool(!isBool);
  };

  useEffect(() => {
    const userD = localStorage.getItem("userData");
    if (userD && userD === "admin@admin.com") {
      console.log("userD", userD);
      setUsersDataEmail(userD);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="profile">
      {/* <h1 style={{ color: "#000", textAlign: "center", marginBottom: 100 }}>
        Welcome <span style={{ color: "Highlight" }}>{usersDataEamil}</span> !!
      </h1> */}

      <div
        style={{
          backgroundColor: "lightgray",
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h5 style={{ color: "#000", paddingLeft: 20 }}>admin </h5>
        <h5 style={{ color: "#000", paddingRight: 20, textAlign: "right" }}>
          mails
        </h5>
      </div>

      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem
            onClick={() => {
              setBool1(!isBool1);
            }}
          >
            {" "}
            User List
          </MenuItem>

          <MenuItem> Mails</MenuItem>
          <MenuItem>Charts</MenuItem>
          <MenuItem> Calender</MenuItem>
          <MenuItem>Layout options</MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/login");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>

      <div
        style={{
          position: "absolute",
          top: "5vw",
          left: "20vw",
        }}
      >
        {isBool1 &&
          usersData?.length &&
          usersData?.map((item, index) => {
            if (usersDataEamil === item.email) return;
            return (
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  //   justifyContent: "center",

                  marginBottom: 10,
                }}
              >
                <h3>{item?.email}</h3>
                <p
                  style={{ paddingLeft: 10, color: "red", cursor: "pointer" }}
                  onClick={() => deleteP(item.id)}
                >
                  delete
                </p>
              </div>
            );
          })}
      </div>

      {!isBool1 && (
        <h1 style={{ color: "#000", textAlign: "center", marginBottom: 100 }}>
          Welcome <span style={{ color: "Highlight" }}>{usersDataEamil}</span>{" "}
          !!
        </h1>
      )}
    </div>
  );
};
export default Profile;
