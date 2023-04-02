import classes from "./Header.module.scss";
import { BiSearchAlt } from "react-icons/bi";
import { MdFilterList, MdFilterListOff } from "react-icons/md";

interface IProps {
    toggleFilter: ()=>void
    filtered?: boolean
 }
export const SearchHeader = (props: IProps) => {
    
  return (
    <>
      <div className={classes.header}>
        <span>
          <BiSearchAlt size={"25px"} style={{ color: "black" }} />
          <input placeholder="Search User" />
        </span>
        {!props.filtered ? (
          <MdFilterListOff
            onClick={props.toggleFilter}
            className={classes.filter}
            style={{
              marginInlineEnd: "20px",
              backgroundColor: "rgba(47, 46, 46, 0.108)",
              borderRadius: "20px",
            }}
          />
        ) : (
          <MdFilterList
            onClick={props.toggleFilter}
            className={classes.filter}
            style={{ marginInlineEnd: "20px" }}
          />
        )}
      </div>
      <hr className={classes.dashed} />
    </>
  );
};
