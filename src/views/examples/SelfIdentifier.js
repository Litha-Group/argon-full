import React, { useState } from "react";
// import CustomNavbar from "../components/CustomNavbar";
import DemoNavbar from "components/navbars/DemoNavbar";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";
import StyledStepper from "../components/StyledComponents/StyledStepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Resultpage from "./Resultpage";

function SelfIdentifier(props) {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedData, setselectedData] = useState({});
  const [ShowResult, setShowResult] = useState(false);
  return (
    <div className="body_wrapper">
      <DemoNavbar type="primary" />
      {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" /> */}
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Self Identifier"
        Pdescription="Use the Self Identifier to identify and understand how you are perceiving yourself in a particular situation. As you describe and question your self perceptions using the Self Identifier, you will naturally increase your levels of self-awareness and situational awareness."
      />
      <section className="process_area bg_color sec_pad">
        <div className="container">
          <div className="features_info">
            <div className="margin20 width100">
              {ShowResult ? (
                <Resultpage
                  selectedData={selectedData}
                  goToStep1={() => {
                    setselectedIndex(0);
                    setShowResult(false);
                    setselectedData({});
                  }}
                />
              ) : (
                <>
                  <StyledStepper
                    onClick={(e) => {
                      if (e === "Step 1") {
                        setselectedIndex(0);
                      }
                      if (e === "Step 2") {
                        if (
                          selectedData &&
                          selectedData.yourself &&
                          selectedData.description
                        ) {
                          setselectedIndex(1);
                        } else {
                        }
                      }
                      if (e === "Step 3") {
                        if (
                          selectedData &&
                          selectedData.yourself &&
                          selectedData.description &&
                          selectedData.selectedWords
                        ) {
                          setselectedIndex(2);
                        } else {
                        }
                      }
                    }}
                    totalSteps={["Step 1", "Step 2", "Step 3"]}
                    index={selectedIndex}
                  />

                  {selectedIndex === 0 ? (
                    <Step1
                      goToNextStep={(data) => {
                        setselectedData(data);
                        setselectedIndex(1);
                      }}
                    />
                  ) : selectedIndex === 1 ? (
                    <Step2
                      goToNextStep={(data) => {
                        var inputData = {};
                        inputData = selectedData;
                        inputData.selectedWords = data;
                        setselectedData(inputData);
                        setselectedIndex(2);
                      }}
                    />
                  ) : selectedIndex === 2 ? (
                    <Step3
                      selectedData={selectedData}
                      goToNextStep={(data) => {
                        var inputData = {};
                        inputData = selectedData;
                        inputData.selectedWords = data;
                        inputData.createdAt = new Date();
                        setselectedData(inputData);
                        setShowResult(true);
                      }}
                    />
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <FooterTwo FooterData={FooterData} />
    </div>
  );
}

export default SelfIdentifier;
