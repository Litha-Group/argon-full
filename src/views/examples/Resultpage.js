import { Divider, Paper } from "@material-ui/core";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { StyledButton } from "../components/StyledComponents/StyledLayouts";
import StyledTextField from "../components/StyledComponents/StyledTextField";
import HumanSelf from "../illustrations/HumanSelf";
import { GroupWordsButton } from "./GroupWordsButton";
import { humanselvesdescriptions } from "./humanselvesdescriptions";

const styles = {
  heading: { fontSize: "0.9rem" },
  widthWithMargin10: { width: "calc(50% - 10px)" },
};
function Resultpage(props) {
  const [filtervalue, setfiltervalue] = useState([]);
  useEffect(() => {
    filterData();
  }, []);
  const filterData = () => {
    var filtervalue = [];

    props.selectedData.selectedWords.map((words, index) => {
      let num = index + 1;
      let val = humanselvesdescriptions
        .filter((data) => data.arcnumber == words.arc)
        .filter((data2) => data2.cadencenumber === num.toString())[0];
      filtervalue.push(val);
    });
    setfiltervalue(filtervalue);
  };
  const [selectedType, setselectedType] = useState("");

  const [singleWord, setSingleWord] = useState("");

  const [textfield, settextfield] = useState([]);

  const [answer1, setanswers1] = useState("");
  const [answer2, setanswers2] = useState("");
  const [answer3, setanswers3] = useState("");
  const [answer4, setanswers4] = useState("");
  const [answer5, setanswers5] = useState("");
  const [answer6, setanswers6] = useState("");
  const [answer7, setanswers7] = useState("");
  const clearData = () => {
    setanswers1("");
    setanswers2("");
    setanswers3("");
    setanswers4("");
    setanswers5("");
    setanswers6("");
    setanswers7("");
  };

  return (
    <div className="width100 d-flex d-flex-column">
      <div className="width100 d-flex">
        <h2 style={{ width: "calc(100% - 64px)" }} className="d-flex marginT20">
          Report
        </h2>
        <div className="d-flex marginT20">
          <StyledButton
            withBg={true}
            onClick={() => {
              props.goToStep1();
            }}
            name={"Back"}
            width="64px"
          />
        </div>
      </div>
      <div
        className="width100 d-flex marginT40 heightAuto"
        style={{ minHeight: "655.28px" }}
      >
        <Paper
          elevation={3}
          className="padding15 border7 height100 width100 d-flex d-flex-column"
        >
          <div className="width100 heightAuto d-flex">
            <div
              className="padding40 height100 d-flex d-flex-column"
              style={styles.widthWithMargin10}
            >
              <div className="boxShadow ListItemWidth margin20 border7 padding10">
                <h4
                  style={styles.fontSize}
                  className="marginT20 flexWrap width100 heightAuto"
                >
                  Situation
                </h4>
                <span>{props.selectedData.yourself}</span>
              </div>
              <div className="boxShadow ListItemWidth margin20 border7 padding10">
                <h4
                  style={styles.fontSize}
                  className="marginT20 flexWrap width100 heightAuto"
                >
                  Description
                </h4>
                <span>{props.selectedData.description}</span>
              </div>
              <div className="boxShadow ListItemWidth margin20 border7 padding10">
                <h4 style={styles.fontSize} className="marginT20">
                  Date Created
                </h4>
                <span>{moment(props.selectedData.createdAt).format("ll")}</span>
              </div>
              <div className="boxShadow ListItemWidth margin20 border7 padding10">
                <h4 style={styles.fontSize} className="marginT20">
                  User
                </h4>
                <span>Freelancer</span>
              </div>
            </div>
            <Divider variant="vertical" className="height100 marginR95" />
            <div
              className="height100 padding40"
              style={styles.widthWithMargin10}
            >
              <div className="width100 height100">
                <HumanSelf data={props.selectedData.selectedWords} />
              </div>
            </div>
          </div>
          <div className="width100 heightAuto padding40 d-flex justifySB">
            <div>
              <StyledButton
                withBg={true}
                name={"Words"}
                width="70px"
                onClick={() => {
                  setselectedType("words");
                }}
              />
              <StyledButton
                withBg={true}
                name={"PDF"}
                width="70px"
                margin={"0 0 0 10px"}
                onClick={() => {
                  setselectedType("pdf");
                }}
              />
            </div>
            <div>
              <StyledButton
                withBg={true}
                name={"Share"}
                width="70px"
                onClick={() => {
                  setselectedType("share");
                }}
              />
              <StyledButton
                withBg={true}
                name={"Send to my E-Mail"}
                width="140.04px"
                margin={"0 10px"}
                onClick={() => {
                  setselectedType("mail");
                }}
              />
              <StyledButton
                withBg={true}
                onClick={() => {
                  setselectedType("identifier");
                }}
                name={"Person identifier report list"}
                width="201.14px"
              />
            </div>
          </div>
          <div className="width100 heightAuto padding40 d-flex justifySB">
            {selectedType === "words" ? (
              <div className="width100 d-flex d-flex-column">
                <div className="width100 flexWrap">
                  {filtervalue &&
                    filtervalue.map((data, i) => (
                      <StyledButton
                        onClick={() => {
                          data.index = i;
                          setSingleWord(data);
                          clearData();
                        }}
                        name={data.cadence}
                        withBg={true}
                        background={GroupWordsButton[i].color}
                        margin="20px"
                        width={"calc(16.66% - 40px)"}
                      />
                    ))}
                </div>
                <div className="width100 heightAuto margin20 d-flex d-flex-column">
                  {filtervalue
                    .filter((data, i) => data.cadence === singleWord.cadence)
                    .map((singleDes) => (
                      <>
                        <Divider className="width100" />
                        <div className="width100 flexWrap margin20">
                          <h4>{singleDes.tagline}</h4>
                        </div>
                        <div className="width100 margin20">
                          <h4> {singleDes.title}</h4>
                        </div>
                        <div className="width100 flexWrap margin20">
                          <span>
                            {singleDes.sentence1}
                            {singleDes.sentence2}
                            {singleDes.sentence3}
                            {singleDes.sentence4}
                            {singleDes.sentence5}
                            {singleDes.sentence6}
                            {singleDes.sentence7}
                          </span>
                        </div>
                        <div className="width100 flexWrap margin20">
                          <h4
                            style={styles.fontSize}
                            className="marginT20 flexWrap width100 heightAuto"
                          >
                            {singleDes.questions}
                          </h4>
                        </div>
                        <div className="width100 flexWrap margin20 d-flex d-flex-column">
                          <span className="width100">
                            1. {singleDes.question1}
                          </span>
                          {textfield.includes(1) ? (
                            <>
                              <div className="marginT20 textfieldWidth">
                                <StyledTextField
                                  placeholder="Eg, Your Answer"
                                  type="text"
                                  handleChange={(e) => {
                                    setanswers1(e.target.value);
                                  }}
                                  value={answer1}
                                />
                              </div>
                              <StyledButton
                                onClick={() => {
                                  settextfield([]);
                                }}
                                withBg
                                name="Submit"
                                margin="20px 0 0"
                              />
                            </>
                          ) : (
                            <StyledButton
                              onClick={() => {
                                settextfield([1]);
                              }}
                              withBg
                              name="Answer"
                              margin="20px 0 0"
                            />
                          )}
                        </div>
                        <div className="width100 flexWrap margin20 d-flex d-flex-column">
                          <span className="width100">
                            2. {singleDes.question2}
                          </span>
                          {textfield.includes(2) ? (
                            <>
                              <div className="marginT20 textfieldWidth">
                                <StyledTextField
                                  placeholder="Eg, Your Answer"
                                  type="text"
                                  handleChange={(e) => {
                                    setanswers2(e.target.value);
                                  }}
                                  value={answer2}
                                />
                              </div>
                              <StyledButton
                                onClick={() => {
                                  settextfield([]);
                                }}
                                withBg
                                name="Submit"
                                margin="20px 0 0"
                              />
                            </>
                          ) : (
                            <StyledButton
                              onClick={() => {
                                settextfield([2]);
                              }}
                              withBg
                              name="Answer"
                              margin="20px 0 0"
                            />
                          )}
                        </div>
                        <div className="width100 flexWrap margin20 d-flex d-flex-column">
                          <span className="width100">
                            3. {singleDes.question3}
                          </span>
                          {textfield.includes(3) ? (
                            <>
                              <div className="marginT20 textfieldWidth">
                                <StyledTextField
                                  placeholder="Eg, Your Answer"
                                  type="text"
                                  handleChange={(e) => {
                                    setanswers3(e.target.value);
                                  }}
                                  value={answer3}
                                />
                              </div>
                              <StyledButton
                                onClick={() => {
                                  settextfield([]);
                                }}
                                withBg
                                name="Submit"
                                margin="20px 0 0"
                              />
                            </>
                          ) : (
                            <StyledButton
                              onClick={() => {
                                settextfield([3]);
                              }}
                              withBg
                              name="Answer"
                              margin="20px 0 0"
                            />
                          )}
                        </div>
                        <div className="width100 flexWrap margin20 d-flex d-flex-column">
                          <span className="width100">
                            4. {singleDes.question4}
                          </span>
                          {textfield.includes(4) ? (
                            <>
                              <div className="marginT20 textfieldWidth">
                                <StyledTextField
                                  placeholder="Eg, Your Answer"
                                  type="text"
                                  handleChange={(e) => {
                                    setanswers4(e.target.value);
                                  }}
                                  value={answer4}
                                />
                              </div>
                              <StyledButton
                                onClick={() => {
                                  settextfield([]);
                                }}
                                withBg
                                name="Submit"
                                margin="20px 0 0"
                              />
                            </>
                          ) : (
                            <StyledButton
                              onClick={() => {
                                settextfield([4]);
                              }}
                              withBg
                              name="Answer"
                              margin="20px 0 0"
                            />
                          )}
                        </div>
                        <div className="width100 flexWrap margin20 d-flex d-flex-column">
                          <span className="width100">
                            5. {singleDes.question5}
                          </span>
                          {textfield.includes(5) ? (
                            <>
                              <div className="marginT20 textfieldWidth">
                                <StyledTextField
                                  placeholder="Eg, Your Answer"
                                  type="text"
                                  handleChange={(e) => {
                                    setanswers5(e.target.value);
                                  }}
                                  value={answer5}
                                />
                              </div>
                              <StyledButton
                                onClick={() => {
                                  settextfield([]);
                                }}
                                withBg
                                name="Submit"
                                margin="20px 0 0"
                              />
                            </>
                          ) : (
                            <StyledButton
                              onClick={() => {
                                settextfield([5]);
                              }}
                              withBg
                              name="Answer"
                              margin="20px 0 0"
                            />
                          )}
                        </div>
                        <div className="width100 flexWrap margin20 d-flex d-flex-column">
                          <span className="width100">
                            6. {singleDes.question6}
                          </span>
                          {textfield.includes(6) ? (
                            <>
                              <div className="marginT20 textfieldWidth">
                                <StyledTextField
                                  placeholder="Eg, Your Answer"
                                  type="text"
                                  handleChange={(e) => {
                                    setanswers6(e.target.value);
                                  }}
                                  value={answer6}
                                />
                              </div>
                              <StyledButton
                                onClick={() => {
                                  settextfield([]);
                                }}
                                withBg
                                name="Submit"
                                margin="20px 0 0"
                              />
                            </>
                          ) : (
                            <StyledButton
                              onClick={() => {
                                settextfield([6]);
                              }}
                              withBg
                              name="Answer"
                              margin="20px 0 0"
                            />
                          )}
                        </div>
                        <div className="width100 flexWrap margin20 d-flex d-flex-column">
                          <span className="width100">
                            7. {singleDes.question7}
                          </span>
                          {textfield.includes(7) ? (
                            <>
                              <div className="marginT20 textfieldWidth">
                                <StyledTextField
                                  placeholder="Eg, Your Answer"
                                  type="text"
                                  handleChange={(e) => {
                                    setanswers7(e.target.value);
                                  }}
                                  value={answer7}
                                />
                              </div>
                              <StyledButton
                                onClick={() => {
                                  settextfield([]);
                                }}
                                withBg
                                name="Submit"
                                margin="20px 0 0"
                              />
                            </>
                          ) : (
                            <StyledButton
                              onClick={() => {
                                settextfield([7]);
                              }}
                              withBg
                              name="Answer"
                              margin="20px 0 0"
                            />
                          )}
                        </div>
                      </>
                    ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Resultpage;
