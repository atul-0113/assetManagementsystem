import { useState } from "react";
import { UserCard } from "../../components/Cards/UserCard";
import classes from "./Access.module.scss";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import { useStrictDroppable } from "../../utils/Dragable/useDragable";

const Access = () => {
  const data = [
    {
      name: "Atul",
      department: "Dev",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s",
    },
    {
      name: "Mohan",
      department: "Sales",
      img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    },
    {
      name: "Mohit",
      department: "HR",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkxkw4_Jroi5sHXGeyoLXKvEQdHcwNd6kuIGA-fkwbdUfh76NOlI9V_9Bi5Y0RrnMkQ&usqp=CAU",
    },
    {
      name: "Rohit",
      department: "Admin",
      img: "https://manager.almadarisp.com/user/img/user.png",
    },
    {
      name: "Purohit",
      department: "Accounts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s",
    },
  ];
  const [enabled] = useStrictDroppable(false);
  const [accessList, setAccessList]: any = useState(data);
  const [revokedList, setRevokedList]: any = useState([]);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    console.log(result, "result");
    if (
      result.destination.droppableId === "revokedList" &&
      result.source.droppableId === "accessList"
    ) {
      const items: any = Array.from(accessList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      setAccessList(items);
      setRevokedList([...revokedList, reorderedItem]);
    }
    if (
      result.destination.droppableId === "accessList" &&
      result.source.droppableId === "revokedList"
    ) {
      const items: any = Array.from(revokedList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      // items.splice(result.destination.index, 0, reorderedItem);
      setRevokedList(items);
      setAccessList([...accessList, reorderedItem]);
    }
    resetServerContext();
  }
  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <h1>Add new user</h1>
        <form>
          <input placeholder={"Name"} />
          <input placeholder="Email" />
          <input placeholder="Password" />
        </form>
        <button> submit</button>
      </div>
      <div className={classes.right}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {enabled && (
            <>
              <Droppable droppableId="accessList" direction="horizontal">
                {(provided) => (
                  <div className={classes.manageAccess}>
                    <h2>Access list</h2>
                    <div
                      className={classes.listing}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {accessList?.length > 0 &&
                        accessList.map((item: any, index: any) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={item?.name}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <UserCard
                                    key={index}
                                    title={item?.name}
                                    department={item?.department}
                                    image={item?.img}
                                  />
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="revokedList" direction="horizontal">
                {(provided) => (
                  <div className={classes.revoked}>
                    <h2>Revoked list</h2>
                    <div
                      className={classes.listing}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {!!revokedList &&
                        revokedList.map((item: any, index: any) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={item?.name}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <UserCard
                                    key={index}
                                    title={item?.name}
                                    department={item?.department}
                                    image={item?.img}
                                  />
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </>
          )}
        </DragDropContext>
        <div className={classes.buttonContainer}>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default Access;
