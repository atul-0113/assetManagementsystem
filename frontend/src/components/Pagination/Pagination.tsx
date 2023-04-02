import { FcNext, FcPrevious } from "react-icons/fc";
import classes from "./Pagination.module.scss";
interface PaginationProps{
    currentPage?: string|number
    nextPage?: string
    prevPage?: string
    maxPage?: string
    total?: string
}
export const Pagination = (props: PaginationProps) => {
  return (
    <>
      <div className={classes.buttonGroup}>
        <FcPrevious style={{ fontSize: "35px", padding: "5px" }} />
        {props?.currentPage}
        <FcNext style={{ fontSize: "35px", padding: "5px" }} />
      </div>
    </>
  );
};
