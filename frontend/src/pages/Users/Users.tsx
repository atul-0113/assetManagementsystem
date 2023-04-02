import React, { useState } from "react";
import classes from "./Users.module.scss";
import { SearchHeader } from "../../components/Headers/SearchHeader";
import { Divider } from "../../components/Divider/Divider";
import { UserTable } from "../../components/Tables/UserTable";
import { Pagination } from "../../components/Pagination/Pagination";
const Users = () => {
  const [filtered, setFiltered] = useState(false);
  const toggleFilter = () => setFiltered(!filtered);
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
  return (
    <>
      <div className={classes.userContainer}>
        <SearchHeader toggleFilter={toggleFilter} filtered={filtered} />
        <Divider />
        <div className={classes.userList}>
          <UserTable tableData={dummyData} />
          <Pagination 
          currentPage={1}
          />
        </div>
      </div>
      <div style={{ paddingBottom: "2rem" }} />
    </>
  );
};
export default Users;
