import React from "react";
import { UserCard } from "../../components/Cards/UserCard";
import classes from "./Access.module.scss";
const Access = () => {
  const data = [
    {
      name: "Atul",
      department: "Dev",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s",
    },
    {
      name: "Mohan",
      department: "Sales",
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    },
    {
      name: "Mohit",
      department: "HR",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkxkw4_Jroi5sHXGeyoLXKvEQdHcwNd6kuIGA-fkwbdUfh76NOlI9V_9Bi5Y0RrnMkQ&usqp=CAU",
    },
    {
      name: "Rohit",
      department: "Admin",
      img: "https://manager.almadarisp.com/user/img/user.png",
    },
    {
      name: "Purohit",
      department: "Accounts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s",
    },
  ];
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <h1>Add new user</h1>
        <form>
          <input placeholder={"Name"} />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button> submit</button>
        </form>
      </div>
      <div className={classes.right}>
        {/* <h3>Manage Access</h3> */}
        <div className={classes.manageAccess}>
          <h1>Access list</h1>
          <div className={classes.listing}>
            {data.map((item, index) => (
              <UserCard
                key={index}
                title={item?.name}
                department={item?.department}
                image={item?.img}
              />
            ))}
          </div>
        </div>
        <div className={classes.revoked}>
          <h1>Revoked list</h1>
          <div className={classes.listing}>
            {data.reverse().map((item, index) => (
              <UserCard
                key={index}
                title={item?.name}
                department={item?.department}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};
export default Access;
