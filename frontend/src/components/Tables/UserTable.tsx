import React from "react";
import { Divider } from "../Divider/Divider";
import classes from "./UserTable.module.scss"

interface TableProps{
tableData?:any
}
export const UserTable = (props: TableProps) =>{
    return(
        <>
          <div className={classes.listHeader}>
            <p className={classes.name}>Name</p>
            <p className={classes.email}>Email</p>
            <p className={classes.code}>Emp code</p>
            <p className={classes.code}>Alloted Items</p>
            <p className={classes.status}>Status</p>
          </div>

          {props?.tableData.map((item:string|any, index: number) => {
            return (
              <>
                <div key={index} className={classes.body}>
                  <p className={classes.name}>{item?.name}</p>
                  <p className={classes.email}>{item?.email}</p>
                  <p className={classes.code}>{item?.empCode}</p>
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