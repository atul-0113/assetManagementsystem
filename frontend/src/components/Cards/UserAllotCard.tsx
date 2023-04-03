import React from "react";
import classes from "./UserAllot.module.scss";
import {FaUserAlt} from "react-icons/fa"
import {MdBallot} from "react-icons/md"
export const UserAllotCard = () => {
  return (
    <div className={classes.main}>
      <div className={classes.image}>
        <img
          src={
            "https://www.cnet.com/a/img/resize/cb4f65b0a78c0d86ea0aeb0a95e9461dcc2f96b3/hub/2022/03/30/e841545d-e55c-47fc-b24a-003bf14e58c8/oneplus-10-pro-cnet-review-12.jpg?auto=webp"
          }
        />
      </div>
      <div className={classes.description}>
        <p><FaUserAlt style={{marginRight:"10px"}}/>{"Atul"}</p>
        <p><MdBallot style={{marginRight:"10px"}}/> Alloted item : {"3"}</p>
      </div>
    </div>
  );
};
