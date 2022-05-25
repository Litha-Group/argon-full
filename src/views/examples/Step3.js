import React, { useState, useEffect } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { StyledButton } from "../components/StyledComponents/StyledLayouts";

const styles = {
  root: {
    width: "100%",
    maxWidth: "100%",
    padding: "30px 0 0 0",
  },
};

const Step3 = (props) => {
const [selectedArr, setSelectedArr] = useState([])

  useEffect(() => {
    setSelectedArr(props.selectedData.selectedWords);
}, [props])

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(selectedArr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
setSelectedArr(items)
  };
    return (
      <div className="margin30 ">
        <div className="width100">
          <h3 className="subHeading">
            Rank your chosen words in order of significance by dragging and
            dropping them, with the most significant word at the top:{" "}
          </h3>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ui
                  style={styles.root}
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {selectedArr.map((data, index) => {
                    return (
                      <Draggable
                        key={data.word}
                        draggableId={data.word}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            className="boxShadow ListItemWidth d-flex margin20 border7 padding10"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ListItemAvatar>
                              <Avatar
                                style={{
                                  textTransform: "capitalize",
                                }}
                              >
                                {data.word.substring(0, 1)}
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              className="d-flex alignC"
                              primary={data.word}
                            />
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ui>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="margin30 textfieldWidth">
          <StyledButton
            onClick={() => {
              props.goToNextStep(selectedArr);
            }}
            withBg={true}
            name={"Identify"}
            width="100px"
          />
        </div>
      </div> 
    );
  }


export default Step3;

