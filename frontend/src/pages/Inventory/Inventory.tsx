import React from "react";
import classes from "./Inventory.module.scss"
import { InventoryCard } from "../../components/Cards";
import { InventoryTable } from "../../components/Tables/InventoryTable";
// import {InventoryHeader} from "../../components/Headers/InventoryHeader"
import { SearchHeader } from "../../components/Headers/SearchHeader";

const Inventory = () => {
  const [isGrid, setGrid]= React.useState(false)
  const [filtered,setFiltered] = React.useState(false)
  const dummyData = [
    {
      name: "Atul Sharma",
      email: "sharma.atul@tftus.com",
      empCode: "12092",
      status: true,
    },
    {
      name: "Mohit Verma",
      email: "vermaa.mohit@tftus.com",
      empCode: "12042",
      status: true,
    },
    {
      name: "Shobhit",
      email: "shiobhut.mandala@tgmail.com",
      empCode: "12192",
      status: true,
    },
    {
      name: "Rekha Awasthi",
      email: "rekha.awasthi@tftus.com",
      empCode: "14392",
      status: true,
    },
    {
      name: "Cheena Purohit",
      email: "cheena.purohita@gmail.com",
      empCode: "14392",
      status: true,
    },
    {
      name: "Vijay Gautam",
      email: "vijay.Gautam@gmail.com",
      empCode: "14392",
      status: true,
    },
    {
      name: "Prashant Lahoti",
      email: "Prashant.Lahoti@tftus.com",
      empCode: "14392",
      status: true,
    },
    {
      name: "Ayesha Romi",
      email: "Romi.ayesha@gmail.com",
      empCode: "14392",
      status: true,
    },
    {
      name: "Bill Gates",
      email: "Billy.gates@microsoft.com",
      empCode: "14392",
      status: true,
    },
    {
      name: "Sheetal Meena",
      email: "sheetal.meena@google.com",
      empCode: "14392",
      status: true,
    },
  ];
  function toggleFilter(){
    setFiltered(!filtered)
  }
  function toggleViews(type:any){
    if(type=== 1 && isGrid) return
    if(type=== 2 && !isGrid) return
    if(type === 1) setGrid(true)
    else setGrid(false)
  }
  return (
    <div className={classes.main}>
      <SearchHeader
      placeholder={"Search Year, Model, Serial Number"} 
      toggleFilter={()=>toggleFilter()}
      showGrid
      isGridSelected={isGrid}
      showButton
      filtered={filtered}
      selectView={toggleViews}
      />
      {isGrid ?
      <div className={classes.gridContainer}>
      <InventoryCard/>
      </div> :       
      <InventoryTable tableData={dummyData}/>
      }
    </div>
  );
};
export default Inventory;
