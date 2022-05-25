import React from 'react';
// import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import DemoNavbar from 'components/navbars/DemoNavbar';
const AboutIlluminators = () => {
    return(
        <div className="body_wrapper">
            <DemoNavbar />
            {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Illuminators" Pdescription="Human illuminators help you to illuminate and explore the perceptions that you are creating and the perspectives that you are forming in a particular situation.  The natural way for humans to describe their perspectives and perceptions about a situation is in the form of a story, so Human Illuminators invite you to stand in the centre of your own knowledge and experience and share a brief story about the situation. "/>
            <section className="process_area bg_color sec_pad">
            <div className="container">
                    <div className="features_info">
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_2.png" iImg="icon01.png" ftitle="Provide Context" descriptions="When you are illuminating and exploring your perceptions and perspectives, context is everything. So the first step in using Human illuminators is  an invitation for you to provide some context for the particular situation that you are keen to explore and understand. The context takes the form of a title for the situation you are identifying and a brief description of the situation."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_5.png" iImg="icon02.png" ftitle="Share Story" descriptions="Next, you are invited to share a brief story about the situation that you would like to illuminate and explore. This does not have to be a perfectly formed story, it can simply be a short narrative, stream of consciousness or some text from a message that you would like to understand in greater depth. The important part is that it is a story that has significance for you in your current situation."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="Choose Words" 
                        descriptions="The next step is for you to choose the most significant words in the story that you have shared. You do this by clicking on the words that have most significance to you and as you do so they will be highlighted or illuminated. It is recommended that you illuminate 12 words from your story to provide the greatest breadth and depth in understanding your situation."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_1.png" iImg="icon_04.png" ftitle="Signify Words" 
                        descriptions="After choosing the most significant words, the next step in using the Human Illuminators is to rank those words in order of their significance to you. This is done using a process of self signification, where you choose the most significant words for you in this particular situation rather than having them prescriptively ranked for you."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_4.png" iImg="icon_05.png" ftitle="Create Report" 
                        descriptions="Then, after providing the context for this situation you want to explore and understand, choosing the most significant words and self-signifying them, you have provided all the information needed to create your Human Illuminator report. The report describes your current psychological space and asks questions that will help you to understand and explore it in greater depth."/>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default AboutIlluminators;