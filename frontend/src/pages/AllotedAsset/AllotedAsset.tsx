import React from "react";
import { UserAllotCard } from "../../components/Cards";
import { Divider } from "../../components/Divider/Divider";
import { SearchHeader } from "../../components/Headers/SearchHeader";
import classes from "./Alloted.module.scss"
const AllotedAsset = () => {
  return (
    <div className={classes.main}>
     <SearchHeader/>
     <Divider/>
     <div className={classes.wraper}>
     <UserAllotCard/>
     <UserAllotCard/>
     <UserAllotCard/>
     <UserAllotCard/>
     <UserAllotCard/>
     <UserAllotCard/>
     <UserAllotCard/>
     <UserAllotCard/>
     <UserAllotCard/>
     </div>
    
    </div>
  );
};
export default AllotedAsset;
