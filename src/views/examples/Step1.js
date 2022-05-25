import React, { useState } from "react";

import StyledTextField from "../components/StyledComponents/StyledTextField";
import { StyledButton } from "../components/StyledComponents/StyledLayouts";
import SnackbarComponent from "./SnackbarComponent";
export const Step1 =(props)=> {
    // state = { yourself: "", description: "", success: "", error: "" };
    const [yourself, setYourself] = useState("")
    const [description, setDescription] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    return (
      <>
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

        <div className="margin30 width100">
          <div className="width100">
            <h3 className="subHeading">
              Enter the self-perception that you are orienting yourself to:
            </h3>
          </div>
          <div className="marginT20 textfieldWidth">
            <StyledTextField
              placeholder="Eg, Motivated"
              type="text"
              handleChange={(e) => {
                // this.setState({ yourself: e.target.value });
                setYourself(e.target.value);
              }}
              value={yourself}
              name="lastName"
            />
          </div>
        </div>
        <div className="margin30 width100">
          <div className="width100">
            <h3 className="subHeading">
              Enter a short description to provide some context:
            </h3>
          </div>
          <div className="marginT20 textfieldWidth">
            <StyledTextField
              placeholder="Eg, Self motivated"
              type="text"
              handleChange={(e) => {
                // this.setState({ description: e.target.value });
                setDescription(e.target.value)
              }}
              value={description}
              name="lastName"
            />
          </div>
        </div>
        <div className="margin30 textfieldWidth">
          <StyledButton
            onClick={() => {
              if (yourself && description) {
                // this.setState({ success: "Submitting !" }, () =>
                //   this.props.goToNextStep({
                //     yourself: yourself,
                //     description: description,
                //   })
                // );
                setSuccess("Submitting !")
                props.goToNextStep({
                      yourself: yourself,
                      description: description,
                    })
              } else {
                if (yourself) {
                  // this.setState({
                  //   error: "Please enter description about your self!",
                  // });
                  setError("Please enter description about your self!")
                } else {
                  // this.setState({
                  //   error: "Please enter about your self!",
                  // });
                  setError("Please enter about your self!")
                }
              }
            }}
            withBg={true}
            name={"Continue"}
            width="100px"
          />
        </div>
      </>
    );
}

export default Step1;
