import React from "react";
import classes from "./Header.module.scss";
import { BiSearchAlt } from "react-icons/bi";
import {
  MdGridView,
  MdViewList,
  MdFilterAltOff,
  MdFilterAlt,
  MdOutlineAddCircle,
} from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
interface IProps {
  toggleFilter?: () => void;
  filtered?: boolean;
  showButton?: boolean;
  showGrid?: boolean;
  placeholder?: string;
  selectView?:Function |any;
  isGridSelected?:boolean
}
export const SearchHeader = (props: IProps) => {

  return (
    <div className={classes.header}>
      <span>
        <input placeholder={props?.placeholder ||"Search"} />
        <i><BiSearchAlt  /></i>
      </span>

      <div className={classes.viewSelector}>
        {props.showGrid && (
          <>
            <MdGridView
              onClick={()=>props.selectView(1)}
              className={classes.filter}
              style={{ marginInlineEnd: "20px",
              backgroundColor: props?.isGridSelected ? "#56c4ff":"", 
              color: props?.isGridSelected ? "white":"",
              borderRadius:"2rem" }}
            />
            <MdViewList
              onClick={()=>props.selectView(2)}
              className={classes.filter}
              style={{ marginInlineEnd: "20px", 
              backgroundColor: !props?.isGridSelected ? "#56c4ff":"",
              color: !props?.isGridSelected ? "white":"",
              borderRadius:"2rem" }}
            />
          </>
        )}
        {props.filtered ? (
          <MdFilterAltOff
            onClick={props.toggleFilter}
            className={classes.filter}
            style={{
              marginInlineEnd: "20px",
              // backgroundColor: "rgba(47, 46, 46, 0.108)",
              backgroundColor: props.filtered ? "#56c4ff" :"",
              color: props.filtered ? "white":"",
              borderRadius: "20px",
            }}
          />
        ) : (
          <MdFilterAlt
            onClick={props.toggleFilter}
            className={classes.filter}
            style={{ marginInlineEnd: "20px",
          }}
          />
        )}
        {props.showButton && (
          <>
            <p>
              <MdOutlineAddCircle
                size={"1.6rem"}
                style={{ color: " rgb(45, 155, 45)", marginInlineEnd: "10px" }}
              />
              Add new product
            </p>
            <p>
              <SiMicrosoftexcel
                size={"1.5rem"}
                style={{ marginInlineEnd: "10px" }}
              />
              Import as Excel
            </p>
          </>
        )}
      </div>
    </div>
  );
};
