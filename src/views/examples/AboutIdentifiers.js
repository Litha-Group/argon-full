import React from 'react';
// import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

import DemoNavbar from 'components/navbars/DemoNavbar';
const AboutIdentifiers = () => {
    return(
        <div className="body_wrapper">
            <DemoNavbar type="primary" />
            {/* <CustomNavbar Class="custom_container p0" hbtnClass="new_btn"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Identifiers" Pdescription="Human Identifiers help you to identify and understand the perceptions that you are creating and the perspectives that you are forming in a particular situation. Rather than attempting to fit your perceptions and perspectives into a pigeon-holed personality profile, Human Identifiers invite you to stand in the centre of your own knowledge and experience and to engage with what is emerging, existing and evolving for you."/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_2.png" iImg="icon01.png" ftitle="Provide Context" descriptions="When you are identifying and understanding your perceptions and perspectives, context is everything. So the first step in using Human Identifiers is  an invitation for you to provide some context for the particular situation that you are keen to explore and understand. The context takes the form of a title for the situation you are identifying and a brief description of the situation."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_3.png" iImg="icon02.png" ftitle="Choose Words" descriptions="Next, you are given 100 words that describe a wide range of feelings and thoughts. You are invited to choose the 12 words that most significantly describe how you feel about the particular situation that you are describing and would like to understand better. You may find yourself immediately drawn to certain words and you will find that the process of choosing words will begin to clarify your feelings about the situation you are identifying."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon3.png" ftitle="Signify Words" 
                        descriptions="After choosing the most significant words, the next step in using the Human Identifiers is to rank those words in order of their significance to you. This is done using a process of self signification, where you choose the most significant words for you in this particular situation rather than having them prescriptively ranked for you."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="Create Report" 
                        descriptions="Then, after providing the context for this situation you want to explore and understand, choosing the most significant words and self-signifying them, you have provided all the information needed to create your Human Identifier report. The report describes your current psychological space and asks questions that will help you to understand and explore it in greater depth."/>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default AboutIdentifiers;