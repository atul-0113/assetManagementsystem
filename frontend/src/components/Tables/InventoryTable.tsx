import React from "react";
import classes from "./InventoryTable.module.scss"
import { Divider } from "../Divider/Divider";
interface TableProps{
    tableData?:any
    }
export const InventoryTable = (props: TableProps)=>{
    return(
        <>
          <div className={classes.listHeader}>
            <p className={classes.image}></p>
            <p className={classes.name}>Model</p>
            <p className={classes.email}>Serial No</p>
            <p className={classes.code}>Type</p>
            <p className={classes.code}>Color</p>
            <p className={classes.code}>Year</p>
            <p className={classes.code}>OS</p>
            <p className={classes.status}>Status</p>
          </div>

          {props?.tableData.map((item:string|any, index: number) => {
            return (
              <>
                <div key={index} className={classes.body}>
                  <span className={classes.image}>
                <img 
                   src={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"}/>
                </span>
                  <p className={classes.name}>{item?.name}</p>
                  <p className={classes.email}>{item?.email}</p>
                  <p className={classes.code}>{item?.empCode}</p>
                  <p className={classes.code}>Color</p>
                    <p className={classes.code}>Year</p>
                  <p className={classes.code}>{20}</p>
                  <p className={classes.status}>
                    {item?.status ? "Active" : "inActive"}
                  </p>
                </div>
               <Divider/>
              </>
            );
          })}
        </>
    )
}