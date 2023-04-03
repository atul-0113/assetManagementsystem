import React from "react";
import classes from "./InventoryCard.module.scss";
export const InventoryCard = () => {
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
        <h3> {"iPhone 14"}</h3>
        <p>Category: {"Laptop"}</p>
        <p>SerialNumber: {"AVSFR3341"}</p>
        <div className={classes.statusStyle}>
          <span />
          <p>Alloted</p>
        </div>
      </div>
    </div>
  );
};
