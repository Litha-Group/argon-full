import React from 'react';
// import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import DemoNavbar from 'components/navbars/DemoNavbar';
const AboutEchoes = () => {
    return(
        <div className="body_wrapper">
            <DemoNavbar />
            {/* <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Echoes" Pdescription="Human Echoes enable you to understand and explore the cultural dynamics of large groups of people. Instead of using the outdated approach of conventional survey methods, Human Echoes collect and display the shared stories of a culture in real time.  Using Human Echoes provides the ability to simultaneously understand the overall cultural perspective and also explore individual perceptions of a situation."/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon01.png" ftitle="Ask Question" descriptions="Invite members of a group to participate in the Human Echo by asking them a question about a particular situation that you want to understand and explore from a cultural perspective. The question you ask needs to be an open question as this will elicit powerful and complex responses from participants."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_5.png" iImg="icon02.png" ftitle="Share Story" descriptions="The participants are invited to Respond to your question by sharing a brief story about the situation that you would like to echo. This does not have to be a perfectly formed story, it can simply be a short narrative, stream of consciousness or some text from a message that Is of significance to the participants."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon3.png" ftitle="Signify Story" 
                        descriptions="The next step is for the participants to choose the most significant words in the story that they have shared. They do that by clicking on the words that have most significance to them and as they do so they will be highlighted or illuminated to echo their significance to the participant."/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon_04.png" ftitle="View Echo" 
                        descriptions="The Human Echo will start to be generated as soon as the first story is shared by a participant. As more participants share the stories, the Human Echo will continue to display those stories in collective psychological space, giving a real-time view of cultural perceptions and perspectives and the clusters that they are forming."/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_4.png" iImg="icon_05.png" ftitle="Create Report" 
                        descriptions="You can then create reports from your real-time displays of the Human Echo, showing how collective perceptions and perspectives are emerging, existing, and evolving and respond to cultural influences and challenges. These Human Echo reports can then be compared across a time series to chart and influence cultural change."/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default AboutEchoes;