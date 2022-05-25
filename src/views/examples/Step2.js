import { Chip, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { primary } from "../assets/Colors";
import { humanselveswords100 } from "./humanselveswords100";
import SnackbarComponent from "./SnackbarComponent";

export const Step2 =(props)=> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedArr: [],
  //     selectedWordArr: [],
  //     colorChange: false,
  //     succes: "",
  //   };
  // }

    // const { selectedArr, selectedWordArr, success, error } = this.state;
    const [selectedArr, setSelectedArr] = useState([])
    const [selectedWordArr, setSelectedWordArr] = useState([])
    const [colorChange, setColorChange] = useState(false)
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    return (
      <div className="margin30 ">
        {success || error ? (
          <SnackbarComponent
            success={success}
            error={error}
            snackbarClose={() => {
              // this.setState({ success: "", error: "" });
              setSuccess("")
              setError("")
            }}
          />
        ) : (
          ""
        )}
        <div className="width100">
          <h3 className="subHeading">
            Choose the 12 words that best describe how you are orienting
            yourself:
          </h3>
          {selectedWordArr.length === 0 ? (
            ""
          ) : (
            <h3
              className={`subHeading ${
                colorChange ? "boxShadow" : ""
              } marginT20`}
              style={{
                background: colorChange
                  ? "rgb(30, 53, 89, 0.7)"
                  : "",
                width: colorChange ? "fit-content" : "",

                borderRadius: colorChange ? "5px" : "",
                color: colorChange ? "white" : "",
              }}
            >
              You have selected {selectedWordArr.length}{" "}
              {selectedWordArr.length > 1 ? " words" : " word"}.
            </h3>
          )}
        </div>
        <div
          className="marginT20 width100 d-flex heightAuto flexWrap margin30"
          style={{ maxWidth: "999px" }}
        >
          {humanselveswords100.map((singleWord, index) => (
            <Chip
              style={{
                margin: "10px",
                background:
                  selectedWordArr.includes(singleWord.word) && primary,
                color: selectedWordArr.includes(singleWord.word)
                  ? "white"
                  : primary,
              }}
              avatar={
                <Avatar
                  style={{
                    textTransform: "capitalize",
                    color: selectedWordArr.includes(singleWord.word) && primary,
                  }}
                >
                  {singleWord.word.substring(0, 1)}
                </Avatar>
              }
              label={singleWord.word}
              clickable
              color={""}
              onClick={(vie) => {
                let chipArr = selectedArr;
                let chipWordArr = selectedWordArr;
                if (!selectedWordArr.includes(singleWord.word)) {
                  if (selectedWordArr.length === 12) {
                  } else {
                    chipWordArr.push(singleWord.word);
                    chipArr.push(singleWord);
                    // this.setState(
                    //   {
                    //     selectedArr: chipArr,
                    //     selectedWordArr: chipWordArr,
                    //     colorChange: true,
                    //   },
                    //   () => {
                    //     if (selectedWordArr.length === 12) {
                    //       this.setState(
                    //         {
                    //           success: "12 Words selected !",
                    //         },
                    //         () => this.props.goToNextStep(selectedArr)
                    //       );
                    //     }
                    //     if (this.state.colorChange) {
                    //       let timer = setTimeout(
                    //         () =>
                    //           this.setState({
                    //             colorChange: false,
                    //           }),
                    //         500
                    //       );
                    //       return () => {
                    //         clearTimeout(timer);
                    //       };
                    //     }
                    //   }
                    // );
                    setSelectedArr(chipArr)
                    setSelectedWordArr(chipWordArr)
                    setColorChange(true)
                    if (selectedWordArr.length === 12) {
                      setSuccess("12 Words selected !")
                      props.goToNextStep(selectedArr)
                    }
                    if (colorChange) {
                      let timer = setTimeout(
                        () =>
                          setColorChange(false),
                        500
                      );
                      return () => {
                        clearTimeout(timer);
                      };
                    }
                  }
                } else {
                  let newArr = [];

                  let newArrWord = [];
                  chipArr.map((data) => {
                    if (data.word === singleWord.word) {
                    } else {
                      newArr.push(data);
                    }
                  });
                  chipWordArr.map((data) => {
                    if (data === singleWord.word) {
                    } else {
                      newArrWord.push(data);
                    }
                  });
                  // this.setState(
                  //   {
                  //     colorChange: true,
                  //     selectedArr: newArr,
                  //     selectedWordArr: newArrWord,
                  //   },
                  //   () => {
                  //     if (selectedWordArr.length === 12) {
                  //       this.setState(
                  //         {
                  //           success: "12 Words selected !",
                  //         },
                  //         () => this.props.goToNextStep(selectedArr)
                  //       );
                  //     }
                  //     if (this.state.colorChange) {
                  //       let timer = setTimeout(
                  //         () =>
                  //           this.setState({
                  //             colorChange: false,
                  //           }),
                  //         500000
                  //       );
                  //       return () => {
                  //         clearTimeout(timer);
                  //       };
                  //     }
                  //   }
                  // );
                  setColorChange(true)
                  setSelectedArr(newArr)
                  setSelectedWordArr(newArrWord)

                  if(selectedWordArr.length === 12) {
                    setSuccess("12 Words selected !")
                    props.goToNextStep(selectedArr)
                  }
                  if (colorChange) {
                      let timer = setTimeout(
                        () =>
                          setColorChange(false),
                        500000
                      );
                      return () => {
                        clearTimeout(timer);
                      };
                  }
                }
              }}
            />
          ))}
        </div>
      </div>
    );

}

export default Step2;
